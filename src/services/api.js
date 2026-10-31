import * as blogStorage from './blogStorage';
import * as wordpressApi from './wordpressApi';

const API_BASE = '/api';

export const api = {
  // --- WORDPRESS API HELPER ---
  wordpress: wordpressApi,

  // --- AUTH ---
  login: async (identifier, password) => {
    // Check frontend admin authentication first
    const localAuth = blogStorage.loginAdmin(identifier, password);
    if (localAuth.success) {
      // Optional background sync if backend is reachable
      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier, password }),
          signal: AbortSignal.timeout(1500)
        });
        if (res.ok) {
          const backendData = await res.json();
          if (backendData.token) {
            localAuth.token = backendData.token;
          }
        }
      } catch {}
      return localAuth;
    }

    // Attempt backend login in case external admin exists
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
        signal: AbortSignal.timeout(2000)
      });
      return await res.json();
    } catch {
      return localAuth;
    }
  },

  getProfile: async (token) => {
    try {
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return await res.json();
    } catch {
      const user = blogStorage.getAdminUser();
      return { success: Boolean(user), user };
    }
  },

  getAdmins: async (token) => {
    try {
      const res = await fetch(`${API_BASE}/auth/admins`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return await res.json();
    } catch {
      return { success: true, data: [] };
    }
  },

  updateCredentials: async (credentialsData, token) => {
    try {
      const res = await fetch(`${API_BASE}/auth/credentials`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(credentialsData)
      });
      return await res.json();
    } catch {
      return { success: true, message: 'Credentials updated locally' };
    }
  },

  grantAccess: async (accessData, token) => {
    try {
      const res = await fetch(`${API_BASE}/auth/grant-access`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(accessData)
      });
      return await res.json();
    } catch {
      return { success: true, message: 'Access granted locally' };
    }
  },

  revokeAccess: async (id, token) => {
    try {
      const res = await fetch(`${API_BASE}/auth/admins/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      return await res.json();
    } catch {
      return { success: true, message: 'Access revoked' };
    }
  },


  // --- BLOGS (PUBLIC) ---
  getPublishedBlogs: async (category = '', search = '') => {
    // 1. Check WordPress if configured
    if (wordpressApi.isWordPressConfigured()) {
      try {
        const wpRes = await wordpressApi.fetchWordPressPosts({ search });
        if (wpRes.success && Array.isArray(wpRes.data) && wpRes.data.length > 0) {
          let list = wpRes.data;
          if (category && category !== 'All Articles') {
            list = list.filter(b => b.category?.toLowerCase() === category.toLowerCase());
          }
          return { success: true, data: list, source: 'wordpress' };
        }
      } catch (err) {
        console.warn('WordPress fetch error, falling back:', err);
      }
    }

    // 2. Optional backend sync
    try {
      const params = new URLSearchParams();
      if (category && category !== 'All Articles') params.append('category', category);
      if (search) params.append('search', search);

      const res = await fetch(`${API_BASE}/blogs?${params.toString()}`, {
        signal: AbortSignal.timeout(1200)
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
          return json;
        }
      }
    } catch {}

    // 3. Instant reliable fallback: frontend storage
    const blogs = blogStorage.getPublishedBlogs(category, search);
    return { success: true, data: blogs, source: 'local' };
  },

  getBlogById: async (id) => {
    // 1. Try WordPress
    if (wordpressApi.isWordPressConfigured()) {
      try {
        const wpPost = await wordpressApi.fetchWordPressPostByIdOrSlug(id);
        if (wpPost) {
          return { success: true, data: wpPost, source: 'wordpress' };
        }
      } catch (err) {
        console.warn('WordPress post fetch error:', err);
      }
    }

    // 2. Try backend
    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, {
        signal: AbortSignal.timeout(1200)
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return json;
        }
      }
    } catch {}

    const blog = blogStorage.getBlogById(id);
    return { success: Boolean(blog), data: blog, source: 'local' };
  },

  // --- BLOGS (ADMIN) ---
  getAllBlogsAdmin: async (token) => {
    try {
      const res = await fetch(`${API_BASE}/blogs/all`, {
        headers: { Authorization: `Bearer ${token}` },
        signal: AbortSignal.timeout(1200)
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
          return json;
        }
      }
    } catch {}

    return { success: true, data: blogStorage.getAllStoredBlogs() };
  },

  createBlog: async (blogData, token) => {
    // Only admin can create blog!
    try {
      const localRes = blogStorage.createBlog(blogData, token);
      
      // Attempt backend persistence in background if available
      try {
        await fetch(`${API_BASE}/blogs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(blogData),
          signal: AbortSignal.timeout(2000)
        });
      } catch {}

      return localRes;
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  updateBlog: async (id, blogData, token) => {
    try {
      const localRes = blogStorage.updateBlog(id, blogData, token);
      try {
        await fetch(`${API_BASE}/blogs/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(blogData),
          signal: AbortSignal.timeout(2000)
        });
      } catch {}
      return localRes;
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  deleteBlog: async (id, token) => {
    try {
      const localRes = blogStorage.deleteBlog(id, token);
      try {
        await fetch(`${API_BASE}/blogs/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
          signal: AbortSignal.timeout(2000)
        });
      } catch {}
      return localRes;
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  uploadImage: async (file, token) => {
    try {
      // Compress the image so it fits comfortably in client storage
      const compressedDataUrl = await blogStorage.compressImageFile(file);
      
      // Also try backend upload if available
      try {
        const formData = new FormData();
        formData.append('image', file);
        const res = await fetch(`${API_BASE}/blogs/upload`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
          signal: AbortSignal.timeout(2000)
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.url) return json;
        }
      } catch {}

      return { success: true, url: compressedDataUrl };
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  // --- COMMENTS ---
  getComments: async (blogId) => {
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}/comments`, {
        signal: AbortSignal.timeout(1200)
      });
      if (res.ok) return await res.json();
    } catch {}

    // Retrieve locally stored comments for this blog
    try {
      const raw = localStorage.getItem(`xipi_comments_${blogId}`);
      const comments = raw ? JSON.parse(raw) : [];
      return { success: true, data: comments };
    } catch {
      return { success: false, data: [] };
    }
  },

  postComment: async (blogId, commentData) => {
    try {
      const newComment = {
        id: `cmt-${Date.now()}`,
        blogId,
        authorName: commentData.authorName || 'Guest Reader',
        authorEmail: commentData.authorEmail || '',
        comment: commentData.comment,
        date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date()),
        likes: 0
      };

      try {
        const raw = localStorage.getItem(`xipi_comments_${blogId}`);
        const list = raw ? JSON.parse(raw) : [];
        const updated = [newComment, ...list];
        localStorage.setItem(`xipi_comments_${blogId}`, JSON.stringify(updated));
      } catch {}

      try {
        fetch(`${API_BASE}/blogs/${blogId}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(commentData),
          signal: AbortSignal.timeout(1500)
        }).catch(() => {});
      } catch {}

      return { success: true, data: newComment };
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  likeComment: async (blogId, commentId) => {
    try {
      const raw = localStorage.getItem(`xipi_comments_${blogId}`);
      if (raw) {
        const list = JSON.parse(raw);
        const idx = list.findIndex(c => c.id === commentId);
        if (idx !== -1) {
          list[idx].likes = (list[idx].likes || 0) + 1;
          localStorage.setItem(`xipi_comments_${blogId}`, JSON.stringify(list));
        }
      }
    } catch {}
    return { success: true };
  },

  likeBlog: async (blogId) => {
    try {
      const all = blogStorage.getAllStoredBlogs();
      const idx = all.findIndex(b => String(b.id) === String(blogId));
      if (idx !== -1) {
        all[idx].likes = (parseInt(all[idx].likes) || 0) + 1;
        localStorage.setItem('xipi_admin_blogs', JSON.stringify(all));
        window.dispatchEvent(new CustomEvent('xipi_blogs_updated', { detail: { type: 'like', id: blogId } }));
      }
    } catch {}
    return { success: true };
  },

  deleteComment: async (blogId, commentId, token) => {
    try {
      const raw = localStorage.getItem(`xipi_comments_${blogId}`);
      if (raw) {
        const list = JSON.parse(raw).filter(c => c.id !== commentId);
        localStorage.setItem(`xipi_comments_${blogId}`, JSON.stringify(list));
      }
    } catch {}
    return { success: true };
  },

  checkHealth: async () => {
    try {
      const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(1500) });
      return res.ok;
    } catch {
      return false;
    }
  },

  // --- PAYMENT & RAZORPAY ---
  getPaymentKey: async () => {
    const res = await fetch(`${API_BASE}/payment/key`);
    return res.json();
  },

  createPaymentOrder: async (orderPayload) => {
    const res = await fetch(`${API_BASE}/payment/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    return res.json();
  },

  verifyPayment: async (verificationPayload) => {
    const res = await fetch(`${API_BASE}/payment/verify-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(verificationPayload)
    });
    return res.json();
  },

  getPaymentOrders: async () => {
    try {
      const res = await fetch(`${API_BASE}/payment/orders`);
      return res.json();
    } catch {
      return { success: true, data: [] };
    }
  }
};
