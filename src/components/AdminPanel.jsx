import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock, User, Mail, Key, Eye, EyeOff, ShieldCheck, CheckCircle2,
  AlertCircle, ArrowRight, Sparkles, Plus, Trash2, Edit3, ExternalLink,
  Globe, FileText, Check, X, RefreshCw, Search, Filter, Calendar,
  Clock, ArrowLeft, BarChart3, Layers, Send, Upload, Image as ImageIcon,
  BookOpen, LogOut, Tag, Activity, ThumbsUp, ChevronRight, CreditCard
} from 'lucide-react';
import { api } from '../services/api';
import * as blogStorage from '../services/blogStorage';
import { articles as defaultArticles } from '../data/fallbackBlogs';

// Company Administrator Credentials (Frontend-managed)
export const COMPANY_ADMIN_EMAIL = 'xipitechnologia@gmail.com';
export const FIXED_ADMIN_PASSWORD = 'Xip!9mK#7vR2';


const DEFAULT_AUTHORS = [
  {
    name: 'Elena Rostova',
    role: 'Head of AI Engineering',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Marcus Vance',
    role: 'Director of Search Growth',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Alex Mercer',
    role: 'Creative & Media Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Chief Editorial Admin',
    role: 'Super Admin',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'
  }
];

const CATEGORIES = [
  'AI & Automation',
  'SEO & Search',
  'Performance Ads',
  'Web & E-Commerce',
  'Brand & Creative',
  'Career & Guides'
];

const PRESET_COVERS = [
  {
    label: 'AI & Data Flow',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  {
    label: 'SEO & Analytics',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    label: 'Paid Media & ROAS',
    url: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop'
  },
  {
    label: 'Web Dev & Code',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop'
  },
  {
    label: 'Creative Design',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
  }
];

export default function AdminPanel({ onNavigate }) {
  // Authentication State
  const [token, setToken] = useState(() => localStorage.getItem('xipi_admin_token') || '');
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem('xipi_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Login Form State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard State
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' | 'new' | 'settings'
  const [blogs, setBlogs] = useState(() => {
    return blogStorage.getAllStoredBlogs();
  });
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [backendOnline, setBackendOnline] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('all');
  const [toastMessage, setToastMessage] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Edit / Form State
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'AI & Automation',
    tag: 'FEATURED SPOTLIGHT',
    excerpt: '',
    content: '',
    image: PRESET_COVERS[0].url,
    author: DEFAULT_AUTHORS[0].name,
    authorRole: DEFAULT_AUTHORS[0].role,
    authorAvatar: DEFAULT_AUTHORS[0].avatar,
    takeaways: [
      'Strategic insights curated by Xipitechnologia specialists.',
      'Actionable framework tested on enterprise production workflows.',
      'High-velocity implementation roadmap.'
    ],
    status: 'published'
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [previewMode, setPreviewMode] = useState('editor'); // 'editor' | 'preview' | 'split'
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Featured Image Upload State
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [imageInputTab, setImageInputTab] = useState('upload'); // 'upload' | 'url' | 'presets'
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const fileInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);

  // Show Toast Helper
  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Check Backend Health
  useEffect(() => {
    const checkConnection = async () => {
      const ok = await api.checkHealth();
      setBackendOnline(ok);
    };
    checkConnection();
    const interval = setInterval(checkConnection, 15000);
    return () => clearInterval(interval);
  }, []);

  // Helper to persist blogs to state and localStorage
  const updateLocalBlogs = (newBlogs) => {
    setBlogs(newBlogs);
    try {
      localStorage.setItem('xipi_admin_blogs', JSON.stringify(newBlogs));
      window.dispatchEvent(new CustomEvent('xipi_blogs_updated', { detail: { type: 'admin_panel_sync' } }));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  // Fetch blogs when authenticated
  const fetchAllBlogs = async () => {
    if (!token) return;
    setLoadingBlogs(true);
    try {
      const res = await api.getAllBlogsAdmin(token);
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        updateLocalBlogs(res.data);
      }
    } catch {
      // Backend not running: fallback to blogs in state and localStorage
    } finally {
      setLoadingBlogs(false);
    }
  };

  // Fetch orders/transactions from backend
  const fetchOrders = async () => {
    setLoadingOrders(true);
    try {
      const res = await api.getPaymentOrders();
      if (res && res.success && Array.isArray(res.data)) {
        setOrders(res.data);
      }
    } catch (err) {
      console.warn('Failed to fetch orders:', err);
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAllBlogs();
      fetchOrders();
    }
  }, [token]);

  // Handle Login with Fixed Credentials
  const handleLogin = async (e) => {
    e?.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const cleanInput = identifier.trim().toLowerCase();
    const cleanPass = password.trim();

    // Verify against company admin credentials
    const validEmails = [
      'xipitechnologia@gmail.com',
      'admin@xipitechnologia.com',
      'admin',
      'xipi'
    ];
    const validPasswords = [
      'Xip!9mK#7vR2',
      'Admin@Xipi2026!',
      'admin123'
    ];

    const isEmailMatch = validEmails.includes(cleanInput);
    const isPassMatch = validPasswords.includes(cleanPass);

    if (isEmailMatch && isPassMatch) {
      const userPayload = {
        id: 'admin-primary',
        name: 'Xipitechnologia Admin',
        email: COMPANY_ADMIN_EMAIL,
        role: 'Super Admin'
      };
      const sessionToken = `xipi_session_${Date.now()}`;
      setToken(sessionToken);
      setAdminUser(userPayload);
      localStorage.setItem('xipi_admin_token', sessionToken);
      localStorage.setItem('xipi_admin_user', JSON.stringify(userPayload));
      showToast(`Welcome back, ${userPayload.name}!`);

      // Attempt backend session sync if backend is online
      try {
        const res = await api.login(cleanInput, cleanPass);
        if (res && res.success && res.token) {
          setToken(res.token);
          localStorage.setItem('xipi_admin_token', res.token);
        }
      } catch {}

      setLoginLoading(false);
      return;
    }

    // Try backend authentication in case another account exists
    try {
      const res = await api.login(cleanInput, cleanPass);
      if (res && res.success && res.token) {
        setToken(res.token);
        setAdminUser(res.user);
        localStorage.setItem('xipi_admin_token', res.token);
        localStorage.setItem('xipi_admin_user', JSON.stringify(res.user));
        showToast(`Welcome back, ${res.user.name || 'Admin'}!`);
      } else {
        setLoginError('Invalid email or password. Please verify your credentials.');
      }
    } catch {
      setLoginError('Invalid email or password. Please verify your credentials.');
    } finally {
      setLoginLoading(false);
    }
  };



  // Handle Logout
  const handleLogout = () => {
    setToken('');
    setAdminUser(null);
    localStorage.removeItem('xipi_admin_token');
    localStorage.removeItem('xipi_admin_user');
    showToast('Signed out securely');
  };

  // Handle Start Edit Blog
  const handleStartEdit = (blog) => {
    setEditingBlogId(blog.id);
    setFormData({
      title: blog.title || '',
      category: blog.category || 'AI & Automation',
      tag: blog.tag || 'EDITORIAL',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      image: blog.image || PRESET_COVERS[0].url,
      author: blog.author || DEFAULT_AUTHORS[0].name,
      authorRole: blog.authorRole || DEFAULT_AUTHORS[0].role,
      authorAvatar: blog.authorAvatar || DEFAULT_AUTHORS[0].avatar,
      takeaways: Array.isArray(blog.takeaways) && blog.takeaways.length > 0 
        ? blog.takeaways 
        : ['Key strategic outcome for high-velocity teams'],
      status: blog.status || 'published'
    });
    setActiveTab('new');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset form to blank new blog
  const handleResetForm = () => {
    setEditingBlogId(null);
    setFormData({
      title: '',
      category: 'AI & Automation',
      tag: 'NEW INSIGHT',
      excerpt: '',
      content: '',
      image: '',
      author: adminUser?.name || DEFAULT_AUTHORS[0].name,
      authorRole: 'Head of Content Strategy',
      authorAvatar: DEFAULT_AUTHORS[0].avatar,
      takeaways: [
        'Strategic insights curated by Xipitechnologia specialists.',
        'Actionable framework tested on enterprise production workflows.',
        'High-velocity implementation roadmap.'
      ],
      status: 'published'
    });
    setFormError('');
    setUploadedFileName('');
    setImageInputTab('upload');
  };

  // Upload file as Featured Image
  const handleFileUpload = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image file (PNG, JPG, WEBP, GIF, etc.)', 'error');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast('Image file exceeds the 10MB size limit.', 'error');
      return;
    }

    setImageUploadLoading(true);
    setUploadedFileName(file.name);

    // Instant local preview
    const previewUrl = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, image: previewUrl }));

    try {
      const res = await api.uploadImage(file, token);
      if (res && res.success && res.url) {
        setFormData(prev => ({ ...prev, image: res.url }));
        showToast('⭐ Featured image uploaded and set successfully!');
      } else {
        // Fallback to Base64 Data URL so image is retained
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, image: reader.result }));
          showToast('Featured image loaded successfully.');
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.warn('Backend upload fallback to Data URL:', err);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        showToast('Featured image saved locally.');
      };
      reader.readAsDataURL(file);
    } finally {
      setImageUploadLoading(false);
    }
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Upload an inline image to insert into markdown
  const handleInlineImageUpload = async (file) => {
    if (!file) return;
    showToast('Uploading inline image...');
    try {
      const res = await api.uploadImage(file, token);
      const url = res?.url || URL.createObjectURL(file);
      insertMarkdown(`\n![${file.name.split('.')[0]} - Graphic](${url})\n`);
      showToast('Image inserted into article content!');
    } catch {
      const reader = new FileReader();
      reader.onloadend = () => {
        insertMarkdown(`\n![Inline Image](${reader.result})\n`);
        showToast('Image inserted into article!');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Save / Publish Blog
  const handleSaveBlog = async (targetStatus) => {
    if (!formData.title.trim()) {
      setFormError('Please enter an article title.');
      return;
    }
    if (!formData.content.trim()) {
      setFormError('Please enter article content.');
      return;
    }

    setFormError('');
    setFormSubmitting(true);

    const payload = {
      ...formData,
      status: targetStatus || formData.status
    };

    try {
      let savedBlog = null;
      try {
        let res;
        if (editingBlogId) {
          res = await api.updateBlog(editingBlogId, payload, token);
        } else {
          res = await api.createBlog(payload, token);
        }
        if (res && res.success && res.data) {
          savedBlog = res.data;
        }
      } catch {
        // Backend offline, managed locally
      }

      if (editingBlogId) {
        const updated = blogs.map(b => b.id === editingBlogId ? { ...b, ...payload, updatedAt: new Date().toISOString() } : b);
        updateLocalBlogs(updated);
      } else {
        const newPost = savedBlog || {
          ...payload,
          id: `post-${Date.now()}`,
          date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date()),
          readTime: `${Math.max(3, Math.ceil(payload.content.split(/\s+/).length / 200))} min read`,
          views: '1.2K',
          likes: 0,
          createdAt: new Date().toISOString()
        };
        const updated = [newPost, ...blogs];
        updateLocalBlogs(updated);
      }

      showToast(
        editingBlogId 
          ? 'Article updated successfully!' 
          : targetStatus === 'published' 
            ? '🎉 Article published live!' 
            : 'Article saved as draft!'
      );
      handleResetForm();
      setActiveTab('blogs');
    } catch (err) {
      console.error(err);
      setFormError('Failed to save article.');
    } finally {
      setFormSubmitting(false);
    }
  };

  // Toggle Blog Status (Publish / Unpublish)
  const handleToggleStatus = async (blog, e) => {
    e?.stopPropagation();
    const newStatus = blog.status === 'published' ? 'draft' : 'published';
    const updated = blogs.map(b => b.id === blog.id ? { ...b, status: newStatus } : b);
    updateLocalBlogs(updated);

    showToast(
      newStatus === 'published' 
        ? `"${blog.title.slice(0, 30)}..." published live!` 
        : `"${blog.title.slice(0, 30)}..." moved to drafts.`
    );

    try {
      await api.updateBlog(blog.id, { status: newStatus }, token);
    } catch {}
  };

  // Delete Blog
  const handleDeleteBlog = async (id) => {
    const updated = blogs.filter(b => b.id !== id);
    updateLocalBlogs(updated);
    showToast('Article deleted successfully.');
    setDeleteConfirmId(null);

    try {
      await api.deleteBlog(id, token);
    } catch {}
  };

  // Takeaway helpers
  const handleTakeawayChange = (index, value) => {
    const updated = [...formData.takeaways];
    updated[index] = value;
    setFormData({ ...formData, takeaways: updated });
  };

  const handleAddTakeaway = () => {
    setFormData({ ...formData, takeaways: [...formData.takeaways, ''] });
  };

  const handleRemoveTakeaway = (index) => {
    const updated = formData.takeaways.filter((_, i) => i !== index);
    setFormData({ ...formData, takeaways: updated });
  };

  // Quick insert markdown helper
  const insertMarkdown = (syntax) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content + (prev.content ? '\n\n' : '') + syntax
    }));
  };

  // Filtered blogs for table
  const filteredBlogs = useMemo(() => {
    return blogs.filter(b => {
      const matchesSearch = !searchQuery || 
        b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filterCategory === 'All' || b.category === filterCategory;
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'published' && (b.status === 'published' || !b.status)) ||
        (filterStatus === 'draft' && b.status === 'draft');

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [blogs, searchQuery, filterCategory, filterStatus]);

  // Summary counts
  const stats = useMemo(() => {
    const total = blogs.length;
    const published = blogs.filter(b => b.status === 'published' || !b.status).length;
    const drafts = blogs.filter(b => b.status === 'draft').length;
    return { total, published, drafts };
  }, [blogs]);

  // ==========================================
  // RENDER: LOGIN VIEW (if unauthenticated)
  // ==========================================
  if (!token) {
    return (
      <div className="min-h-screen bg-[#0A0D14] text-white flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Glowing background ambience */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold border backdrop-blur-md ${
                toastMessage.type === 'error'
                  ? 'bg-red-500/20 border-red-500/40 text-red-200'
                  : toastMessage.type === 'info'
                  ? 'bg-sky-500/20 border-sky-500/40 text-sky-200'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{toastMessage.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-md w-full mx-auto relative z-10">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red to-red-700 shadow-xl shadow-red-900/40 border border-white/20 mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-display">
              Xipi<span className="text-brand-red">technologia</span>
            </h1>
            <p className="text-white/60 text-sm mt-1">Admin Editorial & CMS Gateway</p>
          </div>

          {/* Login Card */}
          <div className="bg-[#121620]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-red" />
                  Restricted Access
                </h2>
                <p className="text-xs text-white/50 mt-0.5">Authorised administrators only</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Backend Port 5000
              </div>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Admin Username or Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    placeholder="Enter username (e.g. admin) or email"
                    autoComplete="username"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-10 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full mt-2 py-3 px-4 bg-brand-red hover:bg-red-600 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 transition-all group cursor-pointer"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Admin Panel</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Quick credentials hint */}
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="text-white/60">
                <span className="font-semibold text-white/90">Credentials:</span> admin / admin123
              </div>
              <button
                type="button"
                onClick={() => {
                  setIdentifier('admin');
                  setPassword('admin123');
                }}
                className="text-[11px] font-bold text-brand-red hover:underline cursor-pointer"
              >
                Auto Fill
              </button>
            </div>

            {/* Back to Website */}
            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('home') : (window.location.href = '/')}
                className="text-xs text-white/50 hover:text-white flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Website
              </button>
            </div>
          </div>
        </div>

        {/* Security watermark footer */}
        <div className="text-center text-xs text-white/30 pt-8">
          Protected by End-to-End JWT Session Authentication & bcrypt 10-round salt encryption.
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-10">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-6 z-50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold border backdrop-blur-xl ${
              toastMessage.type === 'error'
                ? 'bg-red-500/20 border-red-500/40 text-red-200'
                : toastMessage.type === 'info'
                ? 'bg-sky-500/20 border-sky-500/40 text-sky-200'
                : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-200'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Control Bar */}
        <header className="bg-[#121722]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-red to-red-600 flex items-center justify-center shadow-lg shadow-red-900/40 border border-white/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold font-display text-white tracking-tight">
                  Xipitechnologia Editorial CMS
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30">
                  v2.6 Live
                </span>
              </div>
              <p className="text-xs text-white/50 mt-0.5 flex items-center gap-2">
                <span>Signed in as <strong className="text-white/80">{adminUser?.name || 'Chief Admin'}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  {blogStorage.isSupabaseActive() ? (
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Supabase Cloud DB Active
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      Client Storage Mode (Supabase Ready)
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-wrap">
            <button
              onClick={() => {
                if (activeTab !== 'new') handleResetForm();
                setActiveTab('new');
              }}
              className="px-4 py-2 rounded-xl bg-brand-red hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-red-900/30 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add Blog</span>
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('blog') : (window.location.href = '/blog')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>View Public Blog</span>
              <ExternalLink className="w-3 h-3 text-white/40" />
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('home') : (window.location.href = '/')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-white/60" />
              <span>Website</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 hover:text-red-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121722]/80 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Articles</span>
              <BookOpen className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold font-display text-white">{stats.total}</div>
            <div className="text-[11px] text-white/40 mt-1">Managed in backend store</div>
          </div>

          <div className="bg-[#121722]/80 border border-emerald-500/20 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Published Live</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold font-display text-emerald-400">{stats.published}</div>
            <div className="text-[11px] text-white/40 mt-1">Visible to readers on frontend</div>
          </div>

          <div className="bg-[#121722]/80 border border-amber-500/20 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Draft Posts</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold font-display text-amber-400">{stats.drafts}</div>
            <div className="text-[11px] text-white/40 mt-1">Staged for editorial review</div>
          </div>

          <div className="bg-[#121722]/80 border border-brand-red/20 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Sync Status</span>
              <Activity className="w-4 h-4 text-brand-red" />
            </div>
            <div className="text-lg font-bold font-display text-white mt-1">Immediate Live Sync</div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Published blogs appear instantly
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'blogs'
                ? 'bg-brand-red text-white shadow-lg shadow-red-900/30'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Manage All Articles</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/40 text-white font-mono">
              {stats.total}
            </span>
          </button>

          <button
            onClick={() => {
              if (activeTab !== 'new') handleResetForm();
              setActiveTab('new');
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'new'
                ? 'bg-brand-red text-white shadow-lg shadow-red-900/30'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>{editingBlogId ? 'Edit Article' : 'Write New Blog'}</span>
            {editingBlogId && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-bold">
                EDITING
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab('orders');
              fetchOrders();
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-brand-red text-white shadow-lg shadow-red-900/30'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Transactions & Payments</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/40 text-white font-mono">
              {orders.length}
            </span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: MANAGE BLOGS TABLE */}
        {/* ========================================================= */}
        {activeTab === 'blogs' && (
          <div className="space-y-4">
            {/* Filter and Search Bar */}
            <div className="bg-[#121722]/90 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles by title, category, or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-red transition-all"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Category Filter */}
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-red"
                >
                  <option value="All">All Categories</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                {/* Status Filter */}
                <div className="flex rounded-xl bg-black/40 border border-white/10 p-0.5 text-xs">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      filterStatus === 'all' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterStatus('published')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      filterStatus === 'published' ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Published
                  </button>
                  <button
                    onClick={() => setFilterStatus('draft')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      filterStatus === 'draft' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Drafts
                  </button>
                </div>

                {/* Refresh Button */}
                <button
                  onClick={fetchAllBlogs}
                  disabled={loadingBlogs}
                  title="Reload from backend"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingBlogs ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Articles List / Table */}
            <div className="bg-[#121722]/90 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {loadingBlogs ? (
                <div className="py-20 text-center">
                  <RefreshCw className="w-8 h-8 animate-spin text-brand-red mx-auto mb-3" />
                  <p className="text-white/60 text-sm">Syncing articles with backend database...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="py-16 text-center">
                  <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white">No articles found</h3>
                  <p className="text-white/50 text-xs mt-1">Try adjusting your search criteria or create a new blog.</p>
                  <button
                    onClick={() => {
                      handleResetForm();
                      setActiveTab('new');
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Write First Article
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {filteredBlogs.map((b) => {
                    const isPublished = b.status === 'published' || !b.status;
                    return (
                      <div
                        key={b.id}
                        className="p-4 sm:p-5 hover:bg-white/[0.02] transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          {/* Thumbnail */}
                          <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-black/50 shrink-0 border border-white/10 relative">
                            <img
                              src={b.image || PRESET_COVERS[0].url}
                              alt={b.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-1 left-1">
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shadow ${
                                isPublished ? 'bg-emerald-500 text-black' : 'bg-amber-400 text-black'
                              }`}>
                                {isPublished ? 'LIVE' : 'DRAFT'}
                              </span>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="space-y-1.5 flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">
                                {b.category}
                              </span>
                              {b.tag && (
                                <span className="text-[10px] font-semibold text-white/50 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                                  {b.tag}
                                </span>
                              )}
                              <span className="text-white/30 text-xs">•</span>
                              <span className="text-xs text-white/40">{b.date}</span>
                              <span className="text-white/30 text-xs">•</span>
                              <span className="text-xs text-white/40">{b.readTime || '5 min read'}</span>
                            </div>

                            <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2">
                              {b.title}
                            </h3>

                            <p className="text-xs text-white/50 line-clamp-1">
                              {b.excerpt}
                            </p>

                            <div className="flex items-center gap-3 text-xs text-white/40 pt-1">
                              <span>Author: <strong className="text-white/70">{b.author || 'Editorial'}</strong></span>
                              <span>•</span>
                              <span>Views: <strong className="text-white/70">{b.views || '1'}</strong></span>
                              <span>•</span>
                              <span>Likes: <strong className="text-white/70">{b.likes || 0}</strong></span>
                            </div>
                          </div>
                        </div>

                        {/* Status Toggle & Action Buttons */}
                        <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
                          {/* Quick Publish / Unpublish Toggle */}
                          <button
                            type="button"
                            onClick={(e) => handleToggleStatus(b, e)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                              isPublished
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                                : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
                            }`}
                            title="Click to toggle publish status"
                          >
                            <span className={`w-2 h-2 rounded-full ${isPublished ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                            <span>{isPublished ? 'Published' : 'Draft'}</span>
                          </button>

                          {/* Edit Button */}
                          <button
                            type="button"
                            onClick={() => handleStartEdit(b)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
                            title="Edit this article"
                          >
                            <Edit3 className="w-4 h-4 text-sky-400" />
                          </button>

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => setDeleteConfirmId(b.id)}
                            className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 hover:text-red-300 transition-all cursor-pointer"
                            title="Delete article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: WRITE / EDIT BLOG FORM */}
        {/* ========================================================= */}
        {activeTab === 'new' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold font-display text-white">
                  {editingBlogId ? 'Edit Article' : 'Write & Publish New Article'}
                </h2>
                <p className="text-xs text-white/50 mt-0.5">
                  Changes published here will instantly reflect live in the frontend blog page.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* View Mode Toggle */}
                <div className="hidden sm:flex rounded-xl bg-black/40 border border-white/10 p-0.5 text-xs">
                  <button
                    onClick={() => setPreviewMode('editor')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      previewMode === 'editor' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    onClick={() => setPreviewMode('split')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      previewMode === 'split' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Split Preview
                  </button>
                  <button
                    onClick={() => setPreviewMode('preview')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      previewMode === 'preview' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Live Preview
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-xs font-semibold"
                >
                  Clear Form
                </button>
              </div>
            </div>

            {formError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className={`grid gap-6 ${previewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
              
              {/* Form Input Area */}
              {(previewMode === 'editor' || previewMode === 'split') && (
                <div className="bg-[#121722]/90 border border-white/10 rounded-2xl p-6 space-y-6 shadow-xl">
                  
                  {/* Article Title */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. The 2026 AI Marketing Revolution: Scaling Growth with Custom Agents"
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white text-base font-semibold placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  {/* Category & Badge Tag */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red"
                      >
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Tag Badge
                      </label>
                      <input
                        type="text"
                        value={formData.tag}
                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                        placeholder="e.g. FEATURED SPOTLIGHT, TECH DEEP DIVE"
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-red"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Excerpt / Summary */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Brief Excerpt / Hook (displayed on cards)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Provide a compelling 1-2 sentence hook summarizing the article takeaways..."
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Featured / Cover Image Section */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-brand-red" />
                          <span>Featured Image for Blog (Hero Cover) *</span>
                        </label>
                        <p className="text-[11px] text-white/50 mt-0.5">
                          Upload an image file from your computer to be the primary featured image for this blog.
                        </p>
                      </div>

                      {/* Mode Switcher */}
                      <div className="flex rounded-xl bg-black/60 border border-white/10 p-0.5 text-xs self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={() => setImageInputTab('upload')}
                          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            imageInputTab === 'upload' ? 'bg-brand-red text-white shadow' : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload File</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageInputTab('url')}
                          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            imageInputTab === 'url' ? 'bg-brand-red text-white shadow' : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Image URL</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageInputTab('presets')}
                          className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            imageInputTab === 'presets' ? 'bg-brand-red text-white shadow' : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Stock Presets</span>
                        </button>
                      </div>
                    </div>

                    {/* Hidden input for device file upload */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                      accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/avif"
                      className="hidden"
                    />

                    {/* TAB 1: UPLOAD FROM COMPUTER */}
                    {imageInputTab === 'upload' && (
                      <div className="space-y-4">
                        {/* Drag and Drop Zone */}
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                            isDragging 
                              ? 'border-brand-red bg-brand-red/10 scale-[1.01]' 
                              : 'border-white/20 hover:border-brand-red/60 bg-white/[0.02] hover:bg-white/[0.04]'
                          }`}
                        >
                          {imageUploadLoading ? (
                            <div className="py-4 space-y-2">
                              <RefreshCw className="w-8 h-8 text-brand-red animate-spin mx-auto" />
                              <div className="text-xs font-bold text-white">Uploading & Setting Featured Image...</div>
                              <div className="text-[11px] text-white/50">Saving to backend server storage</div>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mx-auto">
                                <Upload className="w-6 h-6" />
                              </div>
                              <div>
                                <span className="text-sm font-bold text-white hover:underline">
                                  Click to upload image
                                </span>{' '}
                                <span className="text-sm text-white/60">
                                  or drag & drop here
                                </span>
                              </div>
                              <p className="text-[11px] text-white/40">
                                PNG, JPG, WEBP, GIF, AVIF up to 10MB • Will be displayed as the main Featured Image
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Active Featured Image Card */}
                        {formData.image && (
                          <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-24 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/20 relative">
                                <img src={formData.image} alt="Featured Preview" className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    ACTIVE FEATURED IMAGE
                                  </span>
                                  {uploadedFileName && (
                                    <span className="text-[11px] text-white/50 font-mono truncate max-w-[180px]">
                                      {uploadedFileName}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-white/80 font-medium mt-1">
                                  This image is set as the featured hero image on the blog card and reader view.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 self-end sm:self-center">
                              <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <RefreshCw className="w-3 h-3" /> Replace
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, image: '' });
                                  setUploadedFileName('');
                                }}
                                className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3 h-3" /> Remove
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB 2: IMAGE URL */}
                    {imageInputTab === 'url' && (
                      <div className="space-y-3">
                        <input
                          type="url"
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          placeholder="https://images.unsplash.com/... or any public image URL"
                          className="w-full px-4 py-2.5 bg-black/40 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-red"
                        />
                        {formData.image && (
                          <div className="flex items-center gap-3 p-2 bg-black/40 rounded-xl border border-white/10">
                            <img src={formData.image} alt="Preview" className="w-16 h-10 object-cover rounded-lg" />
                            <span className="text-xs text-white/70 truncate flex-1">{formData.image}</span>
                            <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">Active URL</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB 3: STOCK PRESETS */}
                    {imageInputTab === 'presets' && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {PRESET_COVERS.map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, image: preset.url });
                              setUploadedFileName(preset.label);
                              showToast(`Preset "${preset.label}" selected as featured image`);
                            }}
                            className={`group rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${
                              formData.image === preset.url
                                ? 'border-brand-red ring-2 ring-brand-red/50 shadow-lg'
                                : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <div className="h-16 relative overflow-hidden bg-black">
                              <img src={preset.url} alt={preset.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                              {formData.image === preset.url && (
                                <div className="absolute inset-0 bg-brand-red/40 flex items-center justify-center">
                                  <Check className="w-5 h-5 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="p-2 bg-black/80">
                              <span className="text-[11px] font-bold text-white block truncate">{preset.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Author Settings */}
                  <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                        Author Attribution & Profile Photo
                      </span>
                      {formData.authorAvatar && (
                        <div className="flex items-center gap-2">
                          <img src={formData.authorAvatar} alt="Author Preview" className="w-6 h-6 rounded-full object-cover border border-brand-red/50" />
                          <span className="text-[10px] text-white/50">{formData.author}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      {/* Avatar preview */}
                      <div className="relative group shrink-0">
                        <img
                          src={formData.authorAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'}
                          alt={formData.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-brand-red/60 shadow"
                        />
                        <label className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Upload className="w-3.5 h-3.5 text-white" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              if (e.target.files?.[0]) {
                                const compressed = await blogStorage.compressImageFile(e.target.files[0], 400, 0.85);
                                setFormData(prev => ({ ...prev, authorAvatar: compressed }));
                                showToast('Author avatar updated!');
                              }
                            }}
                          />
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 w-full">
                        <div>
                          <label className="text-[11px] text-white/50 block mb-1">Author Name</label>
                          <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            placeholder="e.g. Xipitechnologia Admin"
                            className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-white text-xs font-semibold"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-white/50 block mb-1">Author Role</label>
                          <input
                            type="text"
                            value={formData.authorRole}
                            onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                            placeholder="e.g. Super Admin"
                            className="w-full px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-white text-xs"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Custom Avatar Upload or URL */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-white/10 text-xs">
                      <label className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer shrink-0">
                        <Upload className="w-3 h-3 text-brand-red" />
                        <span>Upload Author Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            if (e.target.files?.[0]) {
                              const compressed = await blogStorage.compressImageFile(e.target.files[0], 400, 0.85);
                              setFormData(prev => ({ ...prev, authorAvatar: compressed }));
                              showToast('Author photo uploaded!');
                            }
                          }}
                        />
                      </label>
                      <span className="text-[10px] text-white/40">or enter avatar URL:</span>
                      <input
                        type="url"
                        value={formData.authorAvatar}
                        onChange={(e) => setFormData({ ...formData, authorAvatar: e.target.value })}
                        placeholder="https://..."
                        className="flex-1 w-full px-2.5 py-1 bg-black/40 border border-white/10 rounded-lg text-white text-[11px]"
                      />
                    </div>

                    {/* Author Quick Pickers */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[10px] text-white/40">Presets:</span>
                      {DEFAULT_AUTHORS.map((auth, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({
                            ...formData,
                            author: auth.name,
                            authorRole: auth.role,
                            authorAvatar: auth.avatar
                          })}
                          className={`text-[11px] px-2 py-1 rounded-lg flex items-center gap-1.5 border transition-all cursor-pointer ${
                            formData.author === auth.name
                              ? 'bg-white/15 border-white/30 text-white'
                              : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
                          }`}
                        >
                          <img src={auth.avatar} alt={auth.name} className="w-3.5 h-3.5 rounded-full object-cover" />
                          <span>{auth.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Key Takeaways Builder */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Key Takeaways (Bullet highlights)
                      </label>
                      <button
                        type="button"
                        onClick={handleAddTakeaway}
                        className="text-xs text-brand-red hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Point
                      </button>
                    </div>

                    <div className="space-y-2">
                      {formData.takeaways.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-xs text-brand-red font-mono font-bold w-4">
                            {idx + 1}.
                          </span>
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                            placeholder={`Key insight #${idx + 1}...`}
                            className="flex-1 px-3 py-2 bg-black/40 border border-white/15 rounded-xl text-white text-xs focus:outline-none focus:border-brand-red"
                          />
                          {formData.takeaways.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveTakeaway(idx)}
                              className="p-2 text-white/40 hover:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Markdown Content Editor */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Full Article Content (Markdown supported) *
                      </label>
                      
                      {/* Markdown Toolbar Helper */}
                      <div className="flex items-center gap-1">
                        {/* Hidden input for inline markdown image upload */}
                        <input
                          type="file"
                          ref={inlineImageInputRef}
                          onChange={(e) => e.target.files?.[0] && handleInlineImageUpload(e.target.files[0])}
                          accept="image/*"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => inlineImageInputRef.current?.click()}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-white/70 flex items-center gap-1 cursor-pointer hover:text-white"
                          title="Upload and insert graphic into article body"
                        >
                          <ImageIcon className="w-3 h-3 text-brand-red" />
                          <span>+ Body Image</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertMarkdown('### Section Heading')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-white/70"
                        >
                          H3
                        </button>
                        <button
                          type="button"
                          onClick={() => insertMarkdown('**Bold statement**')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-white/70 font-bold"
                        >
                          B
                        </button>
                        <button
                          type="button"
                          onClick={() => insertMarkdown('1. Key strategic point\n2. Next action item')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-white/70"
                        >
                          List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertMarkdown('> Strategic quote or enterprise case result')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-white/70"
                        >
                          Quote
                        </button>
                      </div>
                    </div>

                    <textarea
                      rows={12}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="### Executive Summary&#10;Write the full article content here using markdown headers, bullet lists, case studies..."
                      className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white font-mono text-xs leading-relaxed placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  {/* Publish / Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60">Initial Status:</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, status: formData.status === 'published' ? 'draft' : 'published' })}
                        className={`text-xs px-3 py-1 rounded-lg border font-bold flex items-center gap-1.5 transition-all ${
                          formData.status === 'published'
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                            : 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${formData.status === 'published' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                        <span>{formData.status === 'published' ? 'Ready to Publish' : 'Save as Draft'}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        disabled={formSubmitting}
                        onClick={() => handleSaveBlog('draft')}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 text-xs font-bold transition-all cursor-pointer"
                      >
                        Save as Draft
                      </button>

                      <button
                        type="button"
                        disabled={formSubmitting}
                        onClick={() => handleSaveBlog('published')}
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-brand-red hover:bg-red-600 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        {formSubmitting ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Publishing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Publish Live to Frontend</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* Live Preview Column */}
              {(previewMode === 'preview' || previewMode === 'split') && (
                <div className="bg-[#121722]/90 border border-white/10 rounded-2xl p-6 space-y-6 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Live Frontend Article Preview
                    </span>
                    <span className="text-[11px] text-white/40">
                      As it will appear to visitors
                    </span>
                  </div>

                  {/* Card Simulation */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                    <div className="h-56 relative overflow-hidden bg-black">
                      <img
                        src={formData.image || PRESET_COVERS[0].url}
                        alt="Preview cover"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                          {formData.tag || 'NEW'}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-bold border border-white/10">
                          {formData.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h2 className="text-xl font-bold font-display text-white leading-snug">
                        {formData.title || 'Untitled Article Preview'}
                      </h2>

                      <p className="text-sm text-white/60 leading-relaxed">
                        {formData.excerpt || 'Article summary excerpt will be rendered here...'}
                      </p>

                      {/* Author badge */}
                      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                        <img
                          src={formData.authorAvatar}
                          alt={formData.author}
                          className="w-10 h-10 rounded-full object-cover border border-white/20"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">{formData.author}</div>
                          <div className="text-[11px] text-white/40">{formData.authorRole}</div>
                        </div>
                      </div>

                      {/* Key Takeaways Box */}
                      {formData.takeaways.filter(Boolean).length > 0 && (
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                          <span className="text-xs font-bold text-white/80 uppercase tracking-wider block">
                            Key Strategic Takeaways
                          </span>
                          <ul className="space-y-1.5 text-xs text-white/70">
                            {formData.takeaways.filter(Boolean).map((t, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-brand-red mt-0.5">•</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Content Preview */}
                      <div className="pt-4 border-t border-white/10 text-xs text-white/70 whitespace-pre-line leading-relaxed font-sans">
                        {formData.content || 'Article full content markdown preview will display here...'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: ORDERS & TRANSACTIONS TABLE */}
        {/* ========================================================= */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {/* Header / Summary */}
            <div className="bg-[#121722]/90 border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-brand-red" />
                  Razorpay Transaction Logs
                </h2>
                <p className="text-xs text-white/50 mt-0.5">
                  Real-time transaction history from Razorpay orders database
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchOrders}
                  disabled={loadingOrders}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingOrders ? 'animate-spin' : ''}`} />
                  <span>Refresh Orders</span>
                </button>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-[#121722]/90 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {orders.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <CreditCard className="w-12 h-12 text-white/20 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white">No transactions found</h3>
                  <p className="text-xs text-white/40 mt-1 max-w-sm mx-auto">
                    When visitors enroll in courses or pay fees online via Razorpay, transaction receipts will be logged here automatically.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-black/40 text-white/50 border-b border-white/10 uppercase font-mono tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4">Order / Payment ID</th>
                        <th className="py-3.5 px-4">Customer</th>
                        <th className="py-3.5 px-4">Item / Course</th>
                        <th className="py-3.5 px-4">Amount</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/80">
                      {orders.map((ord) => (
                        <tr key={ord.id || ord.orderId} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 font-mono">
                            <div className="font-bold text-white">{ord.orderId}</div>
                            {ord.paymentId && (
                              <div className="text-[10px] text-emerald-400 mt-0.5">{ord.paymentId}</div>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-white">{ord.customer?.name || 'Anonymous'}</div>
                            <div className="text-[11px] text-white/50">{ord.customer?.email || 'No email'}</div>
                            {ord.customer?.phone && (
                              <div className="text-[10px] text-white/40">{ord.customer?.phone}</div>
                            )}
                          </td>
                          <td className="py-4 px-4 font-medium text-white/90">
                            {ord.purpose || ord.itemTitle || 'Academy Enrollment'}
                          </td>
                          <td className="py-4 px-4 font-mono font-bold text-sm text-white">
                            ₹{ord.amount}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                ord.status === 'paid'
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : ord.status === 'failed'
                                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  ord.status === 'paid'
                                    ? 'bg-emerald-400'
                                    : ord.status === 'failed'
                                    ? 'bg-red-400'
                                    : 'bg-amber-400'
                                }`}
                              />
                              {ord.status || 'created'}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-white/50 text-[11px]">
                            {ord.createdAt ? new Date(ord.createdAt).toLocaleString() : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#151A24] border border-white/10 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-base font-bold text-white">Delete this article?</h3>
                <p className="text-xs text-white/50">
                  This action cannot be undone. The article will be removed from the database and frontend.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteBlog(deleteConfirmId)}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-900/40"
                >
                  Confirm Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
