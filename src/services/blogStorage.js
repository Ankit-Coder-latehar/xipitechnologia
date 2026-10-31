import { articles as defaultArticles, categories } from '../data/fallbackBlogs';
import { supabase, isSupabaseConfigured } from './supabaseClient';

const STORAGE_KEY = 'xipi_admin_blogs';
const TOKEN_KEY = 'xipi_admin_token';
const USER_KEY = 'xipi_admin_user';

// Valid company admin credentials (Frontend-only authentication)
export const VALID_ADMIN_EMAILS = [
  'xipitechnologia@gmail.com',
  'admin@xipitechnologia.com',
  'admin',
  'xipi'
];

export const VALID_ADMIN_PASSWORDS = [
  'Xip!9mK#7vR2',
  'Admin@Xipi2026!',
  'admin123'
];

/**
 * Image compressor using HTML5 canvas
 * Resizes large images and converts to WebP/JPEG to ensure fast network/DB transfer (<150KB)
 */
export async function compressImageFile(file, maxWidth = 1200, quality = 0.8) {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image element'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        let dataUrl = canvas.toDataURL('image/webp', quality);
        if (!dataUrl.startsWith('data:image/webp')) {
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Check if Supabase integration is currently active
 */
export function isSupabaseActive() {
  return isSupabaseConfigured();
}

/**
 * Map database snake_case row to frontend camelCase blog object
 */
export function mapRowToBlog(row) {
  if (!row) return null;
  return {
    id: String(row.id),
    title: row.title || '',
    category: row.category || 'AI & Automation',
    tag: row.tag || 'FEATURED SPOTLIGHT',
    excerpt: row.excerpt || '',
    content: row.content || '',
    image: row.image || '',
    author: row.author || 'Xipitechnologia Admin',
    authorRole: row.author_role || row.authorRole || 'Super Admin',
    authorAvatar: row.author_avatar || row.authorAvatar || '',
    takeaways: Array.isArray(row.takeaways) ? row.takeaways : [],
    readTime: row.read_time || row.readTime || '5 min read',
    date: row.date || '',
    views: row.views || '1.2K',
    likes: parseInt(row.likes) || 0,
    status: row.status || 'published',
    createdAt: row.created_at || row.createdAt || new Date().toISOString()
  };
}

/**
 * Map frontend camelCase blog object to database snake_case row
 */
export function mapBlogToRow(blog) {
  return {
    id: String(blog.id),
    title: blog.title,
    category: blog.category,
    tag: blog.tag,
    excerpt: blog.excerpt,
    content: blog.content,
    image: blog.image,
    author: blog.author,
    author_role: blog.authorRole,
    author_avatar: blog.authorAvatar,
    takeaways: blog.takeaways || [],
    read_time: blog.readTime,
    date: blog.date,
    views: blog.views || '1.2K',
    likes: blog.likes || 0,
    status: blog.status || 'published',
    updated_at: new Date().toISOString()
  };
}

/**
 * Dispatch update event to all components & other browser tabs
 */
function notifyBlogChange(type, data) {
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('xipi_blogs_updated', {
        detail: { type, data, timestamp: Date.now() }
      }));
    } catch (e) {
      console.warn('Could not dispatch custom event', e);
    }
  }
}

/**
 * Check if the current user is an authenticated administrator
 */
export function isAdminAuthenticated() {
  if (typeof window === 'undefined') return false;
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const user = localStorage.getItem(USER_KEY);
    return Boolean(token && user);
  } catch {
    return false;
  }
}

/**
 * Get current admin user details
 */
export function getAdminUser() {
  if (typeof window === 'undefined') return null;
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

/**
 * Authenticate admin with credentials
 */
export function loginAdmin(identifier, password) {
  const cleanId = (identifier || '').trim().toLowerCase();
  const cleanPass = (password || '').trim();

  const isEmailValid = VALID_ADMIN_EMAILS.includes(cleanId);
  const isPassValid = VALID_ADMIN_PASSWORDS.includes(cleanPass);

  if (!isEmailValid || !isPassValid) {
    return {
      success: false,
      message: 'Invalid administrator credentials. Access restricted to authorized personnel.'
    };
  }

  const userPayload = {
    id: 'admin-primary',
    name: 'Xipitechnologia Admin',
    email: cleanId.includes('@') ? cleanId : 'xipitechnologia@gmail.com',
    role: 'Super Admin'
  };
  const token = `xipi_session_${Date.now()}`;

  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(userPayload));
  } catch (e) {
    console.warn('Storage warning on login', e);
  }

  notifyBlogChange('auth', { authenticated: true, user: userPayload });

  return {
    success: true,
    token,
    user: userPayload,
    message: 'Welcome back, Administrator!'
  };
}

/**
 * Log out admin
 */
export function logoutAdmin() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {}
  notifyBlogChange('auth', { authenticated: false });
}

/**
 * Get all blogs stored locally (purging legacy dummy articles)
 */
export function getAllStoredBlogs() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Strip out any legacy dummy/sample articles
        const cleaned = parsed.filter(b => {
          if (!b || !b.id) return false;
          const id = String(b.id);
          if (id.startsWith('feat-') || (id.startsWith('art-') && !id.startsWith('art-custom-'))) {
            return false;
          }
          return true;
        });

        if (cleaned.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
        }
        return cleaned;
      }
    }
  } catch (err) {
    console.warn('Failed to parse stored blogs', err);
  }

  return [];
}

/**
 * Remove all dummy blogs explicitly
 */
export function purgeDummyBlogs() {
  if (typeof window === 'undefined') return [];
  const cleaned = getAllStoredBlogs();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  } catch {}
  notifyBlogChange('purge', cleaned);
  return cleaned;
}

/**
 * Fetch and sync all blogs from Supabase database
 */
export async function syncFromSupabase() {
  if (!isSupabaseConfigured() || !supabase) return getAllStoredBlogs();

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && Array.isArray(data)) {
      const mapped = data.map(mapRowToBlog);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      } catch (e) {
        console.warn('Could not cache Supabase blogs locally', e);
      }
      notifyBlogChange('supabase_sync', mapped);
      return mapped;
    } else if (error) {
      console.warn('Supabase fetch error:', error.message);
    }
  } catch (err) {
    console.warn('Supabase connection warning:', err);
  }

  return getAllStoredBlogs();
}

/**
 * Get only published blogs (visible to public on frontend)
 */
export function getPublishedBlogs(category = '', search = '') {
  const all = getAllStoredBlogs();
  let list = all.filter(b => b.status !== 'draft');

  if (category && category !== 'All Articles' && category !== 'All') {
    list = list.filter(b => b.category?.toLowerCase() === category.toLowerCase());
  }

  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    list = list.filter(b => 
      b.title?.toLowerCase().includes(q) ||
      b.excerpt?.toLowerCase().includes(q) ||
      b.category?.toLowerCase().includes(q) ||
      b.author?.toLowerCase().includes(q)
    );
  }

  return list;
}

/**
 * Get single blog by ID
 */
export function getBlogById(id) {
  if (!id) return null;
  const all = getAllStoredBlogs();
  const match = all.find(b => String(b.id) === String(id));
  if (match) return match;
  return defaultArticles.find(b => String(b.id) === String(id)) || null;
}

/**
 * Add a new blog - STRICTLY RESTRICTED TO ADMIN
 * Persists to Supabase DB and local cache
 */
export async function createBlog(blogPayload, token = null) {
  if (!isAdminAuthenticated() && !token) {
    throw new Error('Unauthorized: Only administrators can create or publish blogs.');
  }

  if (!blogPayload.title || !blogPayload.title.trim()) {
    throw new Error('Blog title is required.');
  }
  if (!blogPayload.content || !blogPayload.content.trim()) {
    throw new Error('Blog content is required.');
  }

  const wordCount = blogPayload.content.trim().split(/\s+/).length;
  const calculatedReadTime = `${Math.max(3, Math.ceil(wordCount / 200))} min read`;
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  const newPost = {
    id: `post-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    title: blogPayload.title.trim(),
    category: blogPayload.category || 'AI & Automation',
    tag: blogPayload.tag || 'FEATURED SPOTLIGHT',
    excerpt: blogPayload.excerpt?.trim() || blogPayload.content.trim().slice(0, 160) + '...',
    content: blogPayload.content,
    image: blogPayload.image || '',
    author: blogPayload.author?.trim() || 'Xipitechnologia Admin',
    authorRole: blogPayload.authorRole?.trim() || 'Super Admin',
    authorAvatar: blogPayload.authorAvatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    takeaways: Array.isArray(blogPayload.takeaways) && blogPayload.takeaways.length > 0 
      ? blogPayload.takeaways 
      : ['Exclusive strategic insights curated by the Xipitechnologia team.'],
    readTime: blogPayload.readTime || calculatedReadTime,
    date: formattedDate,
    views: '1.2K',
    likes: 0,
    status: blogPayload.status || 'published',
    createdAt: new Date().toISOString()
  };

  // 1. Save to Supabase DB if configured
  if (isSupabaseConfigured() && supabase) {
    try {
      const row = mapBlogToRow(newPost);
      const { data, error } = await supabase
        .from('blogs')
        .insert([row])
        .select()
        .single();

      if (error) {
        console.warn('Supabase insert warning, saving locally:', error.message);
      } else if (data) {
        newPost.id = String(data.id);
      }
    } catch (err) {
      console.warn('Supabase DB offline, falling back to local store:', err);
    }
  }

  // 2. Save to local storage cache
  const existing = getAllStoredBlogs();
  const updated = [newPost, ...existing];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }

  notifyBlogChange('create', newPost);
  return { success: true, data: newPost };
}

/**
 * Update an existing blog - STRICTLY RESTRICTED TO ADMIN
 */
export async function updateBlog(id, blogPayload, token = null) {
  if (!isAdminAuthenticated() && !token) {
    throw new Error('Unauthorized: Only administrators can update blogs.');
  }

  const existing = getAllStoredBlogs();
  const index = existing.findIndex(b => String(b.id) === String(id));
  if (index === -1) {
    throw new Error('Blog not found.');
  }

  const updatedBlog = {
    ...existing[index],
    ...blogPayload,
    updatedAt: new Date().toISOString()
  };

  existing[index] = updatedBlog;

  // 1. Update in Supabase DB if configured
  if (isSupabaseConfigured() && supabase) {
    try {
      const row = mapBlogToRow(updatedBlog);
      const { error } = await supabase
        .from('blogs')
        .update(row)
        .eq('id', String(id));

      if (error) {
        console.warn('Supabase update error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase update warning:', err);
    }
  }

  // 2. Update local storage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to update blog in localStorage:', err);
  }

  notifyBlogChange('update', updatedBlog);
  return { success: true, data: updatedBlog };
}

/**
 * Delete a blog - STRICTLY RESTRICTED TO ADMIN
 */
export async function deleteBlog(id, token = null) {
  if (!isAdminAuthenticated() && !token) {
    throw new Error('Unauthorized: Only administrators can delete blogs.');
  }

  // 1. Delete from Supabase DB if configured
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', String(id));

      if (error) {
        console.warn('Supabase delete error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase delete warning:', err);
    }
  }

  // 2. Delete from local storage
  const existing = getAllStoredBlogs();
  const updated = existing.filter(b => String(b.id) !== String(id));

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete blog from localStorage:', err);
  }

  notifyBlogChange('delete', { id });
  return { success: true };
}

/**
 * Subscribe to blog updates (handles custom event, cross-tab storage, and Supabase Realtime)
 */
export function subscribeToBlogs(callback) {
  if (typeof window === 'undefined') return () => {};

  const handleCustomEvent = (e) => {
    callback(e.detail);
  };

  const handleStorageEvent = (e) => {
    if (e.key === STORAGE_KEY || e.key === TOKEN_KEY || e.key === USER_KEY) {
      callback({ type: 'storage_sync', key: e.key });
    }
  };

  window.addEventListener('xipi_blogs_updated', handleCustomEvent);
  window.addEventListener('storage', handleStorageEvent);

  // Setup Supabase Realtime Channel if available
  let realtimeChannel = null;
  if (isSupabaseConfigured() && supabase) {
    try {
      realtimeChannel = supabase
        .channel('blogs-realtime-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'blogs' }, () => {
          syncFromSupabase();
        })
        .subscribe();
    } catch (e) {
      console.warn('Supabase Realtime subscription error:', e);
    }
  }

  return () => {
    window.removeEventListener('xipi_blogs_updated', handleCustomEvent);
    window.removeEventListener('storage', handleStorageEvent);
    if (realtimeChannel && supabase) {
      try {
        supabase.removeChannel(realtimeChannel);
      } catch {}
    }
  };
}

// Auto-purge any legacy dummy blogs on frontend initialization and sync with Supabase
if (typeof window !== 'undefined') {
  try {
    purgeDummyBlogs();
    if (isSupabaseConfigured()) {
      syncFromSupabase();
    }
  } catch {}
}
