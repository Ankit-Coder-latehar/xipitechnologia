import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Clock, ArrowUpRight, Bookmark, X, Filter, 
  Calendar, RefreshCw, Sparkles, ChevronRight, AlertCircle, BookOpen,
  Globe, Check, ExternalLink, Settings, Radio
} from 'lucide-react';
import { api } from '../services/api';
import * as blogStorage from '../services/blogStorage';
import { categories as defaultCategories } from '../data/fallbackBlogs';

export default function BlogPage({ onNavigate }) {
  // Articles state initialized from frontend storage
  const [articleList, setArticleList] = useState(() => blogStorage.getPublishedBlogs());
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [toastMessage, setToastMessage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortBy, setSortBy] = useState('latest');

  // WordPress Connect State
  const [isWpModalOpen, setIsWpModalOpen] = useState(false);
  const [wpUrlInput, setWpUrlInput] = useState(() => api.wordpress.getWordPressUrl());
  const [isTestingWp, setIsTestingWp] = useState(false);
  const [wpTestStatus, setWpTestStatus] = useState(null);
  const [wpConfigured, setWpConfigured] = useState(() => api.wordpress.isWordPressConfigured());

  // Toast Helper
  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Sync blogs from WordPress & storage
  const refreshBlogs = async (showFeedback = false) => {
    setIsSyncing(true);
    try {
      const res = await api.getPublishedBlogs();
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        setArticleList(res.data);
        if (showFeedback) {
          if (res.source === 'wordpress') {
            showToast(`Synced ${res.data.length} live articles from WordPress!`, 'success');
          } else {
            showToast('Articles synced successfully!', 'success');
          }
        }
      } else {
        const live = blogStorage.getPublishedBlogs();
        setArticleList(live);
        if (showFeedback) showToast('Loaded cached articles', 'info');
      }
    } catch {
      // Fallback already in place
      if (showFeedback) showToast('Sync failed, showing cached articles', 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  // Test WordPress connection
  const handleTestWordPress = async () => {
    setIsTestingWp(true);
    setWpTestStatus(null);
    try {
      const result = await api.wordpress.testWordPressConnection(wpUrlInput);
      setWpTestStatus(result);
    } catch (err) {
      setWpTestStatus({ success: false, message: err.message });
    } finally {
      setIsTestingWp(false);
    }
  };

  // Save WordPress URL
  const handleSaveWordPressUrl = () => {
    api.wordpress.setWordPressUrl(wpUrlInput);
    setWpConfigured(api.wordpress.isWordPressConfigured());
    setIsWpModalOpen(false);
    showToast(
      wpUrlInput.trim() 
        ? 'WordPress connected! Fetching latest published posts...' 
        : 'WordPress URL cleared.',
      'success'
    );
    refreshBlogs(true);
  };

  // Subscribe to real-time blog updates across tabs & actions
  useEffect(() => {
    refreshBlogs();
    const unsubscribe = blogStorage.subscribeToBlogs(() => {
      refreshBlogs();
    });
    return () => unsubscribe();
  }, []);

  // Dynamic Categories: Collects categories from loaded articles (WordPress + Fallbacks)
  const allCategories = useMemo(() => {
    const set = new Set(['All Articles']);
    articleList.forEach((a) => {
      if (a.category && a.category.trim()) {
        set.add(a.category.trim());
      }
    });
    defaultCategories.forEach((c) => set.add(c));
    return Array.from(set);
  }, [articleList]);

  // Toggle Bookmark
  const toggleBookmark = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Article removed from bookmarks');
      } else {
        next.add(id);
        showToast('Article saved to bookmarks');
      }
      return next;
    });
  };

  // Handle article open
  const handleArticleClick = (artId, e) => {
    e?.preventDefault();
    if (onNavigate) {
      onNavigate('blog-post', artId);
    } else {
      window.location.href = `/blog/${artId}`;
    }
  };

  // Filter & Sort articles
  const filteredArticles = useMemo(() => {
    let list = articleList.filter(art => {
      const matchesCat = selectedCategory === 'All Articles' || art.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
                            art.title?.toLowerCase().includes(query) || 
                            art.excerpt?.toLowerCase().includes(query) ||
                            art.category?.toLowerCase().includes(query) ||
                            art.author?.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });

    if (sortBy === 'popular') {
      list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === 'views') {
      list.sort((a, b) => parseFloat(b.views || 0) - parseFloat(a.views || 0));
    }
    return list;
  }, [articleList, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans select-none overflow-x-hidden pt-28 pb-24 relative">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-semibold backdrop-blur-md border ${
              toastMessage.type === 'error'
                ? 'bg-red-50 text-red-800 border-red-200'
                : 'bg-white/95 text-zinc-900 border-brand-red/30 shadow-brand-red/5'
            }`}
          >
            {toastMessage.type === 'error' ? (
              <AlertCircle className="h-4 w-4 text-brand-red" />
            ) : (
              <Sparkles className="h-4 w-4 text-brand-red" />
            )}
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Warm Gradient & Mesh Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-brand-red/[0.05] via-amber-500/[0.03] to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* ================= PAGE HEADER & SEARCH ================= */}
        <div className="text-center space-y-4 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Xipitechnologia® Editorial & Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight">
            Our Insights & <span className="text-brand-red">Blog</span>
          </h1>
          <p className="text-xs sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Discover actionable strategies, AI implementation playbooks, and modern performance marketing frameworks curated for ambitious business leaders.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or author..."
                className="w-full bg-white border border-zinc-200/90 focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 rounded-full pl-11 pr-10 py-3.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ================= CATEGORY TABS & SORT ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {allCategories.map((cat) => {
              const count = cat === 'All Articles' 
                ? articleList.length 
                : articleList.filter(a => a.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(9);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/25 ring-2 ring-brand-red/30'
                      : 'bg-white border border-zinc-200/90 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-50 shadow-xs'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat ? 'bg-black/20 text-white' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort, Live Sync & WordPress Connect */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-end lg:self-auto">
            {/* WordPress Integration Pill */}
            <button
              type="button"
              onClick={() => {
                setWpUrlInput(api.wordpress.getWordPressUrl());
                setWpTestStatus(null);
                setIsWpModalOpen(true);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all cursor-pointer shadow-xs ${
                wpConfigured
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300'
              }`}
              title={wpConfigured ? 'Connected to WordPress. Click to configure.' : 'Connect your WordPress site'}
            >
              <span className={`w-2 h-2 rounded-full ${wpConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
              <span>{wpConfigured ? 'WordPress Live' : 'Connect WordPress'}</span>
            </button>

            {/* Refresh / Sync Live button */}
            <button
              type="button"
              onClick={() => refreshBlogs(true)}
              disabled={isSyncing}
              title="Sync articles live from WordPress & database"
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200/90 text-[11px] font-semibold text-zinc-700 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:border-zinc-300 active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-brand-red ${isSyncing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Live</span>
            </button>

            <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium pl-1">
              <Filter className="h-3.5 w-3.5 text-zinc-400" /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-zinc-200/90 text-xs text-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-brand-red shadow-xs cursor-pointer font-medium"
            >
              <option value="latest">Latest Published</option>
              <option value="popular">Most Liked</option>
              <option value="views">Most Read</option>
            </select>
          </div>

        </div>

        {/* ================= ARTICLES GRID ================= */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 px-6 text-center rounded-3xl bg-white border border-zinc-200/80 space-y-5 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto text-brand-red">
              <BookOpen className="h-7 w-7" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xl font-bold text-zinc-950">
                {articleList.length === 0 ? 'No Articles Published Yet' : 'No Articles Match Your Search'}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                {articleList.length === 0
                  ? "We're curating actionable insights, playbooks, and strategic case studies. Check back soon for fresh content!"
                  : 'Try selecting a different category or clearing your search term.'}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Articles');
                }}
                className="bg-zinc-900 hover:bg-brand-red text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-brand-red/20"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.slice(0, visibleCount).map((art, idx) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.05, 0.4) }}
                className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden flex flex-col justify-between hover:border-brand-red/40 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300 hover:-translate-y-1.5 relative"
              >
                <a
                  href={`/blog/${art.id}`}
                  onClick={(e) => handleArticleClick(art.id, e)}
                  className="block flex-1 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Category & New Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap z-10">
                      <span className="bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-brand-red px-3 py-1 rounded-full border border-brand-red/20 shadow-xs">
                        {art.category}
                      </span>
                      {art.id?.startsWith('post-') && (
                        <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Bookmark */}
                    <button
                      onClick={(e) => toggleBookmark(art.id, e)}
                      title="Bookmark"
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 shadow-sm ${
                        bookmarkedIds.has(art.id)
                          ? 'bg-brand-red text-white'
                          : 'bg-white/90 text-zinc-700 hover:text-brand-red hover:bg-white border border-zinc-200/50'
                      }`}
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                    </button>

                    {/* Meta date / read time */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium drop-shadow-md">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-red-400" /> {art.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-amber-300" /> {art.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="p-5 space-y-2.5">
                    <h2 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-brand-red transition-colors leading-snug line-clamp-2">
                      {art.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </a>

                {/* Footer: Author & Read CTA */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={art.authorAvatar} 
                        alt={art.author} 
                        className="h-7 w-7 rounded-full object-cover border border-zinc-200 shadow-xs" 
                      />
                      <div>
                        <span className="text-xs font-bold text-zinc-900 block leading-tight">{art.author}</span>
                        <span className="text-[10px] text-zinc-500 block">{art.authorRole || 'Author'}</span>
                      </div>
                    </div>

                    <a
                      href={`/blog/${art.id}`}
                      onClick={(e) => handleArticleClick(art.id, e)}
                      className="text-brand-red font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Read Story</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </motion.article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="pt-8 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-zinc-950 hover:bg-brand-red text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-xl hover:shadow-brand-red/20 hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Load More Articles</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>

      {/* WordPress Connect & Live Publishing Modal */}
      <AnimatePresence>
        {isWpModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWpModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-zinc-200 space-y-6 select-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Headless WordPress CMS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight font-display">
                    Connect WordPress
                  </h3>
                </div>
                <button
                  onClick={() => setIsWpModalOpen(false)}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Enter your WordPress site URL. When you write and publish posts in your WordPress admin, they will immediately reflect here on your React blog via the built-in WordPress REST API!
              </p>

              {/* URL Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 block">
                  WordPress Website URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="url"
                    value={wpUrlInput}
                    onChange={(e) => {
                      setWpUrlInput(e.target.value);
                      setWpTestStatus(null);
                    }}
                    placeholder="https://your-wordpress-site.com"
                    className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/60 pl-10 pr-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/10 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Test Status feedback */}
              {wpTestStatus && (
                <div
                  className={`p-3.5 rounded-2xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    wpTestStatus.success
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-red-50 border-red-200 text-red-900'
                  }`}
                >
                  {wpTestStatus.success ? (
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                  )}
                  <span>{wpTestStatus.message}</span>
                </div>
              )}

              {/* How it works info card */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-xs text-zinc-600 leading-relaxed">
                <span className="font-bold text-zinc-900 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                  How Publishing Works:
                </span>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-600">
                  <li>Write your article in your WordPress Dashboard (<code className="bg-zinc-200/80 px-1 py-0.5 rounded text-[10px] font-mono">/wp-admin</code>).</li>
                  <li>Set your <strong>Featured Image</strong> and <strong>Categories</strong>.</li>
                  <li>Click <strong>Publish</strong>.</li>
                  <li>Your article appears immediately on this blog page!</li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleTestWordPress}
                  disabled={isTestingWp || !wpUrlInput.trim()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-bold text-zinc-800 transition-all cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  {isTestingWp ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-red" />
                      <span>Testing...</span>
                    </>
                  ) : (
                    <span>Test Connection</span>
                  )}
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setWpUrlInput('');
                      api.wordpress.setWordPressUrl('');
                      setWpConfigured(false);
                      setIsWpModalOpen(false);
                      refreshBlogs(true);
                    }}
                    className="px-4 py-2.5 rounded-full text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    Disconnect
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveWordPressUrl}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-brand-red hover:bg-red-600 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md cursor-pointer active:scale-95"
                  >
                    Save & Sync
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
