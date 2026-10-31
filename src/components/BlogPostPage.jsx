import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, Eye, Heart, MessageSquare, 
  Share2, Bookmark, Copy, Send, CheckCircle2, RefreshCw, 
  Award, Check, ExternalLink, ArrowRight, Sparkles, User, Tag, BookOpen
} from 'lucide-react';
import { api } from '../services/api';
import * as blogStorage from '../services/blogStorage';
import { articles as fallbackArticles } from '../data/fallbackBlogs';

export default function BlogPostPage({ blogId, onNavigate, onContactClick }) {
  // If no blogId is passed directly as prop, check location pathname and search params
  const activeId = useMemo(() => {
    if (blogId) return blogId;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const qId = params.get('id') || params.get('blog');
      if (qId) return qId;
      const path = window.location.pathname.replace(/\/+$/, '');
      if (path.toLowerCase().startsWith('/blog/')) {
        return decodeURIComponent(path.slice('/blog/'.length));
      }
    }
    return 'feat-1';
  }, [blogId]);

  const findArticle = (id) => {
    return blogStorage.getBlogById(id) || fallbackArticles.find(a => a.id === id) || null;
  };

  const [blog, setBlog] = useState(() => findArticle(activeId));
  const [loadingBlog, setLoadingBlog] = useState(!blog);
  const [readingProgress, setReadingProgress] = useState(0);

  // Comments state
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [likedCommentIds, setLikedCommentIds] = useState(new Set());

  // Article reaction states
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalScroll) * 100)));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch single blog data
  useEffect(() => {
    let isMounted = true;

    const fetchBlogData = async () => {
      if (!activeId) return;
      setLoadingBlog(true);

      // Check local storage / fallback first
      const localMatch = findArticle(activeId);
      if (localMatch && isMounted) {
        setBlog(localMatch);
        setLikeCount(parseInt(localMatch.likes) || 0);
      }

      // Try fetching updated post from backend
      try {
        const res = await api.getBlogById(activeId);
        if (res && res.success && res.data && isMounted) {
          setBlog(res.data);
          setLikeCount(parseInt(res.data.likes) || 0);
        }
      } catch (err) {
        console.warn('Could not fetch blog from backend, using local fallback:', err);
      } finally {
        if (isMounted) setLoadingBlog(false);
      }
    };

    fetchBlogData();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeId]);

  // Load comments
  const loadComments = async (idToLoad) => {
    const targetId = idToLoad || activeId;
    if (!targetId) return;
    setLoadingComments(true);
    try {
      const res = await api.getComments(targetId);
      if (res && res.success && Array.isArray(res.data)) {
        setComments(res.data);
      } else {
        setComments([]);
      }
    } catch {
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    loadComments(activeId);
  }, [activeId]);

  // Sync title
  useEffect(() => {
    if (blog?.title) {
      document.title = `${blog.title} | Xipitechnologia® Insights`;
    }
  }, [blog]);

  // Like Article Handler
  const handleLikeArticle = async () => {
    if (liked) {
      showToast('You already liked this article');
      return;
    }
    try {
      const res = await api.likeBlog(activeId);
      if (res && res.success) {
        setLiked(true);
        setLikeCount(prev => prev + 1);
        showToast('💖 Thank you for liking this article!');
      } else {
        setLiked(true);
        setLikeCount(prev => prev + 1);
        showToast('💖 Article upvoted!');
      }
    } catch {
      setLiked(true);
      setLikeCount(prev => prev + 1);
      showToast('💖 Article upvoted!');
    }
  };

  // Add Comment Handler
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentName.trim()) {
      showToast('Please enter your name to post a comment', 'error');
      return;
    }
    if (!commentText.trim()) {
      showToast('Please type your comment message', 'error');
      return;
    }

    setCommentSubmitting(true);
    try {
      const res = await api.postComment(activeId, {
        authorName: commentName.trim(),
        authorEmail: commentEmail.trim(),
        comment: commentText.trim()
      });

      if (res && res.success && res.data) {
        setComments(prev => [res.data, ...prev]);
        setCommentText('');
        showToast('🎉 Your comment has been posted live!');
      } else {
        // Fallback local append if backend is in offline mode
        const localComment = {
          id: `cmt-${Date.now()}`,
          blogId: activeId,
          authorName: commentName.trim(),
          comment: commentText.trim(),
          date: 'Just now',
          likes: 0
        };
        setComments(prev => [localComment, ...prev]);
        setCommentText('');
        showToast('🎉 Your comment has been posted live!');
      }
    } catch (err) {
      console.error(err);
      showToast('Network error posting comment', 'error');
    } finally {
      setCommentSubmitting(false);
    }
  };

  // Like Comment Handler
  const handleLikeComment = async (commentId) => {
    if (likedCommentIds.has(commentId)) {
      showToast('You have already liked this comment');
      return;
    }
    try {
      const res = await api.likeComment(activeId, commentId);
      if (res && res.success) {
        setComments(prev => prev.map(c => c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c));
        setLikedCommentIds(prev => new Set([...prev, commentId]));
        showToast('❤️ Comment upvoted!');
      } else {
        setComments(prev => prev.map(c => c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c));
        setLikedCommentIds(prev => new Set([...prev, commentId]));
        showToast('❤️ Comment upvoted!');
      }
    } catch {
      setComments(prev => prev.map(c => c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c));
      setLikedCommentIds(prev => new Set([...prev, commentId]));
      showToast('❤️ Comment upvoted!');
    }
  };

  // Copy Link
  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('📋 Article link copied to clipboard!');
    }
  };

  // WhatsApp share
  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent((blog?.title || 'Check this out') + ' ' + window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Twitter / X share
  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent((blog?.title || 'Check this out') + ' ' + window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // LinkedIn share
  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Related articles
  const relatedArticles = useMemo(() => {
    return fallbackArticles
      .filter(a => a.id !== activeId)
      .slice(0, 3);
  }, [activeId]);

  // Helper to remove duplicate hero image from post body so it doesn't show twice
  const cleanDuplicateHeroImage = (htmlContent, heroImgUrl) => {
    if (!htmlContent || typeof htmlContent !== 'string') return '';
    if (!heroImgUrl) return htmlContent;

    let cleaned = htmlContent;

    try {
      // 1. If filename matches, strip that <figure> or <img> tag
      const urlClean = heroImgUrl.split('?')[0].split('#')[0];
      const filename = urlClean.substring(urlClean.lastIndexOf('/') + 1);
      
      if (filename && filename.length > 3) {
        // Strip <figure ...> ... filename ... </figure>
        const figureRegex = new RegExp(
          `<figure[^>]*>[\\s\\S]*?${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?<\\/figure>`,
          'i'
        );
        cleaned = cleaned.replace(figureRegex, '');

        // Strip <p><img ... filename ... /></p>
        const pImgRegex = new RegExp(
          `<p[^>]*>\\s*<img[^>]+src=["'][^"']*${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']*["'][^>]*>\\s*<\\/p>`,
          'i'
        );
        cleaned = cleaned.replace(pImgRegex, '');

        // Strip standalone <img> tag
        const standaloneImgRegex = new RegExp(
          `<img[^>]+src=["'][^"']*${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']*["'][^>]*>`,
          'i'
        );
        cleaned = cleaned.replace(standaloneImgRegex, '');
      }

      // 2. If content starts with an image/figure at the very top, remove it to prevent duplicate
      const trimmed = cleaned.trim();
      const firstFigureMatch = trimmed.match(/^<figure[^>]*>[\s\S]*?<\/figure>/i);
      if (firstFigureMatch) {
        cleaned = trimmed.slice(firstFigureMatch[0].length).trim();
      } else {
        const firstPImgMatch = trimmed.match(/^<p[^>]*>\s*<img[^>]*>\s*<\/p>/i);
        if (firstPImgMatch) {
          cleaned = trimmed.slice(firstPImgMatch[0].length).trim();
        } else {
          const firstImgMatch = trimmed.match(/^<img[^>]*>/i);
          if (firstImgMatch) {
            cleaned = trimmed.slice(firstImgMatch[0].length).trim();
          }
        }
      }
    } catch (err) {
      console.warn('Error cleaning duplicate image:', err);
    }

    return cleaned;
  };

  // Content formatter: automatically handles WordPress HTML as well as custom markdown
  const renderFormattedContent = (content) => {
    if (!content) {
      return (
        <div className="py-12 text-center text-zinc-400 italic text-sm">
          No content written for this article yet.
        </div>
      );
    }

    // Clean duplicate hero image so it doesn't show twice
    const deduplicated = cleanDuplicateHeroImage(content, blog?.image);

    // Check if content is WordPress rich HTML
    const isHtml = /<\s*(p|h[1-6]|div|ul|ol|blockquote|img|figure|table|section)\b[^>]*>/i.test(deduplicated);
    if (isHtml) {
      return (
        <div 
          className="wp-content-render space-y-6 text-zinc-800 text-base sm:text-lg leading-[1.85] font-normal break-words [overflow-wrap:anywhere]"
          dangerouslySetInnerHTML={{ __html: deduplicated }}
        />
      );
    }

    const normalized = deduplicated.replace(/\r\n/g, '\n');
    const blocks = normalized.split(/\n{2,}/);

    return (
      <div className="space-y-6 text-zinc-800 text-base sm:text-lg leading-[1.85] font-normal break-words [overflow-wrap:anywhere] [word-break:break-word]">
        {blocks.map((block, idx) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-xl sm:text-2xl font-bold font-display text-zinc-950 mt-10 mb-4 flex items-center gap-2.5 border-l-4 border-brand-red pl-3.5 tracking-tight break-words">
                <span>{trimmed.replace('### ', '')}</span>
              </h3>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-950 mt-12 mb-6 tracking-tight border-b border-zinc-100 pb-3 break-words">
                <span>{trimmed.replace('## ', '')}</span>
              </h2>
            );
          }
          if (trimmed.startsWith('# ')) {
            return (
              <h2 key={idx} className="text-2xl sm:text-3xl font-black font-display text-zinc-950 mt-12 mb-6 tracking-tight border-b border-zinc-100 pb-3 break-words">
                <span>{trimmed.replace('# ', '')}</span>
              </h2>
            );
          }
          if (trimmed.startsWith('> ')) {
            return (
              <blockquote key={idx} className="my-8 p-6 sm:p-7 rounded-2xl bg-zinc-50/90 border-l-4 border-brand-red text-zinc-800 italic text-base sm:text-lg leading-relaxed shadow-xs border-y border-r border-zinc-200/60 break-words">
                "{trimmed.replace('> ', '')}"
              </blockquote>
            );
          }
          if (/^(\d+\.|\-|\*)\s/.test(trimmed)) {
            const lines = trimmed.split('\n');
            return (
              <ul key={idx} className="space-y-3.5 my-6 pl-1 break-words">
                {lines.map((l, lIdx) => (
                  <li key={lIdx} className="text-zinc-700 text-base sm:text-lg leading-relaxed flex items-start gap-3">
                    <span className="text-brand-red font-bold mt-1 text-sm shrink-0">✦</span>
                    <span className="break-words [overflow-wrap:anywhere]">{l.replace(/^(\d+\.|\-|\*)\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-zinc-800 text-base sm:text-lg leading-[1.85] font-normal my-4 whitespace-pre-line break-words [overflow-wrap:anywhere] [word-break:break-word]">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  };

  if (loadingBlog && !blog) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center pt-24 pb-20">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 border-3 border-brand-red border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            Loading Article Insights...
          </p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-md w-full bg-white border border-zinc-200/80 rounded-3xl p-8 text-center space-y-6 shadow-xl">
          <div className="h-14 w-14 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mx-auto">
            <BookOpen className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-black text-zinc-950">Article Not Found</h2>
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
            The requested article could not be located or may have been moved.
          </p>
          <a
            href="/blog"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('blog');
              }
            }}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-brand-red/20 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to All Articles</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-brand-red selection:text-white pt-24 pb-24 relative overflow-hidden">
      
      {/* Subtle Warm Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-gradient-to-b from-brand-red/[0.04] via-amber-500/[0.02] to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      {/* Top Sticky Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-zinc-200 pointer-events-none"
      >
        <div 
          className="h-full bg-gradient-to-r from-brand-red via-red-500 to-amber-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Action Strip (Desktop Only) */}
      <aside className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 p-2 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-xl">
        <button
          onClick={handleLikeArticle}
          title="Like this article"
          className={`p-3 rounded-xl transition-all flex flex-col items-center gap-1 cursor-pointer ${
            liked 
              ? 'bg-red-50 text-red-600 border border-red-200 shadow-xs' 
              : 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
          <span className="text-[10px] font-mono font-bold">{likeCount}</span>
        </button>

        <a
          href="#reader-comments"
          title="Jump to comments"
          className="p-3 rounded-xl hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-all flex flex-col items-center gap-1 cursor-pointer"
        >
          <MessageSquare className="h-4 w-4 text-brand-red" />
          <span className="text-[10px] font-mono font-bold">{comments.length}</span>
        </a>

        <button
          onClick={() => {
            setBookmarked(!bookmarked);
            showToast(bookmarked ? 'Bookmark removed' : '🔖 Article saved to bookmarks!');
          }}
          title="Bookmark article"
          className={`p-3 rounded-xl transition-all cursor-pointer ${
            bookmarked 
              ? 'bg-brand-red text-white shadow-xs' 
              : 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
          }`}
        >
          <Bookmark className="h-4 w-4" />
        </button>

        <button
          onClick={handleCopyLink}
          title="Copy link"
          className="p-3 rounded-xl hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer"
        >
          <Copy className="h-4 w-4" />
        </button>

        <button
          onClick={handleShareWhatsApp}
          title="Share on WhatsApp"
          className="p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all cursor-pointer"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </aside>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-3 border-b border-zinc-200/80">
          <a
            href="/blog"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('blog');
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-brand-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </a>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="text-zinc-400">Xipitechnologia</span>
            <span>/</span>
            <span className="text-brand-red font-bold">{blog.category}</span>
          </div>
        </div>

        {/* Article Header Section */}
        <div className="space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-brand-red text-white text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm">
              {blog.category}
            </span>
            {blog.tag && (
              <span className="bg-white text-zinc-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-zinc-200 shadow-xs">
                {blog.tag}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-[1.18] font-display">
            {blog.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Info & Author Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-4 border-y border-zinc-200/80">
            {/* Author */}
            <div className="flex items-center gap-3.5">
              <img
                src={blog.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'}
                alt={blog.author}
                className="h-12 w-12 rounded-full object-cover border-2 border-brand-red/60 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-950 block">{blog.author || 'Editorial Lead'}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                    VERIFIED AUTHOR
                  </span>
                </div>
                <span className="text-xs text-zinc-500 block">{blog.authorRole || 'Senior Strategist'}</span>
              </div>
            </div>

            {/* Reading stats */}
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-zinc-700 font-semibold">
                <Calendar className="h-4 w-4 text-brand-red" /> {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-amber-600 font-bold">
                <Clock className="h-4 w-4" /> {blog.readTime || '7 min read'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Eye className="h-4 w-4 text-sky-500" /> {blog.views || '1'} reads
              </span>
            </div>
          </div>

        </div>

        {/* Featured Cover Image */}
        {blog.image && (
          <div className="relative h-72 sm:h-[440px] w-full rounded-3xl overflow-hidden border border-zinc-200/80 shadow-xl bg-zinc-100">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 uppercase tracking-wider border border-zinc-200/80 shadow-sm">
                FEATURED PLAYBOOK
              </span>
            </div>
          </div>
        )}

        {/* Executive Key Takeaways Box */}
        {blog.takeaways && blog.takeaways.length > 0 && (
          <div className="bg-gradient-to-br from-red-50/50 via-zinc-50 to-white border border-brand-red/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="text-xs font-black text-brand-red uppercase tracking-widest flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Executive Briefing & Key Takeaways</span>
            </div>
            <ul className="space-y-3 text-sm text-zinc-800">
              {blog.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Article Content Block */}
        <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-xl shadow-zinc-200/40 p-6 sm:p-10 md:p-12 break-words [overflow-wrap:anywhere] overflow-hidden relative">
          
          {/* Header strip inside the content block */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-zinc-100 text-xs">
            <div className="flex items-center gap-2 text-zinc-500 font-medium">
              <BookOpen className="w-4 h-4 text-brand-red" />
              <span className="uppercase tracking-wider font-bold text-[11px] text-zinc-700">Editorial Article Body</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 font-mono text-[11px]">
              <span>{blog.readTime || '5 min read'}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>

          {/* Formatted Article Content */}
          <article className="prose-content">
            {renderFormattedContent(blog.content)}
          </article>

          {/* Article Endmark */}
          <div className="pt-8 mt-10 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4 text-xs text-zinc-400">
            <span className="font-mono text-[11px] font-semibold text-zinc-400">✦ END OF ARTICLE</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-semibold text-zinc-600">Written by {blog.author || 'Xipitechnologia Editorial Team'}</span>
            </div>
          </div>
        </div>

        {/* Social Sharing & Like Toolbar */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-zinc-500 font-semibold mr-1">Share this insight:</span>
            <button
              onClick={handleCopyLink}
              className="bg-zinc-100 hover:bg-brand-red hover:text-white text-zinc-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Link</span>
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleShareTwitter}
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>X (Twitter)</span>
            </button>
            <button
              onClick={handleShareLinkedIn}
              className="bg-zinc-100 hover:bg-[#0A66C2] hover:text-white text-zinc-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>LinkedIn</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLikeArticle}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                liked
                  ? 'bg-red-50 border border-red-300 text-brand-red shadow-xs'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-brand-red text-brand-red' : ''}`} />
              <span>{liked ? 'Liked' : 'Like Post'} ({likeCount})</span>
            </button>

            <button
              onClick={() => {
                setBookmarked(!bookmarked);
                showToast(bookmarked ? 'Bookmark removed' : '🔖 Saved to bookmarks!');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                bookmarked
                  ? 'bg-brand-red text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200'
              }`}
            >
              <Bookmark className="h-4 w-4" />
              <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* COMMENTS & READER DISCUSSION SECTION                           */}
        {/* ============================================================== */}
        <section id="reader-comments" className="pt-6 space-y-8">
          
          <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-brand-red" />
                <span>Comments & Discussion</span>
                <span className="text-xs px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-mono font-bold">
                  {comments.length}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Share your insights, debate tactics, or ask questions directly about this article.
              </p>
            </div>

            <button
              type="button"
              onClick={() => loadComments(activeId)}
              disabled={loadingComments}
              className="p-2.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-950 text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Refresh comments"
            >
              <RefreshCw className={`w-4 h-4 ${loadingComments ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Add a Comment Form */}
          <form onSubmit={handleAddComment} className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-800">
                Join The Discussion
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Your Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins / CMO"
                  className="w-full px-4 py-3 bg-zinc-50/70 border border-zinc-200 rounded-xl text-zinc-900 text-xs placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Email Address <span className="text-[10px] text-zinc-400 font-normal">(Optional • kept private)</span>
                </label>
                <input
                  type="email"
                  value={commentEmail}
                  onChange={(e) => setCommentEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-3 bg-zinc-50/70 border border-zinc-200 rounded-xl text-zinc-900 text-xs placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-zinc-700">
                  Your Comment / Perspective <span className="text-brand-red">*</span>
                </label>
                <span className="text-[10px] text-zinc-400 font-mono">{commentText.length}/1000</span>
              </div>
              <textarea
                required
                rows={4}
                maxLength={1000}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts on this strategy, suggest improvements, or ask questions..."
                className="w-full px-4 py-3 bg-zinc-50/70 border border-zinc-200 rounded-xl text-zinc-900 text-xs leading-relaxed placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Live moderated discussion</span>
              </span>

              <button
                type="submit"
                disabled={commentSubmitting || !commentName.trim() || !commentText.trim()}
                className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark disabled:opacity-50 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-brand-red/25 flex items-center gap-2 transition-all cursor-pointer hover:scale-105"
              >
                {commentSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Post Comment</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* List of Comments */}
          <div className="space-y-4">
            {loadingComments ? (
              <div className="text-center py-12 text-zinc-400 text-xs font-mono space-y-2">
                <RefreshCw className="w-5 h-5 animate-spin mx-auto text-brand-red" />
                <p>Loading reader comments...</p>
              </div>
            ) : comments.length === 0 ? (
              <div className="bg-white border border-zinc-200/80 rounded-3xl p-10 text-center space-y-3 shadow-xs">
                <MessageSquare className="w-8 h-8 text-brand-red/40 mx-auto" />
                <h4 className="text-base font-bold text-zinc-900">No comments yet</h4>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
                  Be the first to share your perspective or ask a question about this article!
                </p>
              </div>
            ) : (
              comments.map((cmt) => (
                <motion.div
                  key={cmt.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-5 sm:p-6 space-y-3 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-red/15 to-amber-500/15 border border-brand-red/30 flex items-center justify-center text-brand-red font-extrabold text-xs">
                        {cmt.authorName?.slice(0, 2).toUpperCase() || 'CU'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-950">{cmt.authorName}</span>
                          {cmt.verified && (
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              VERIFIED
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono">{cmt.date || 'Recent'}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleLikeComment(cmt.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                        likedCommentIds.has(cmt.id)
                          ? 'bg-red-50 text-brand-red border border-red-200'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${likedCommentIds.has(cmt.id) ? 'fill-brand-red text-brand-red' : ''}`} />
                      <span>{cmt.likes || 0}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed pl-13">
                    {cmt.comment}
                  </p>
                </motion.div>
              ))
            )}
          </div>

        </section>

        {/* ============================================================== */}
        {/* RECOMMENDED & RELATED STORIES                                  */}
        {/* ============================================================== */}
        <section className="pt-12 border-t border-zinc-200/80 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-950">
              Recommended Insights
            </h3>
            <a
              href="/blog"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('blog');
                }
              }}
              className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <a
                key={art.id}
                href={`/blog/${art.id}`}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('blog-post', art.id);
                  }
                }}
                className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden flex flex-col justify-between hover:border-brand-red/40 hover:shadow-xl hover:shadow-zinc-200/60 transition-all hover:-translate-y-1 block cursor-pointer"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-brand-red px-2.5 py-0.5 rounded-full border border-brand-red/20 shadow-xs">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-950 group-hover:text-brand-red transition-colors line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-[11px] text-zinc-600 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 text-[10px] text-zinc-400 font-mono flex items-center justify-between border-t border-zinc-100 mt-2">
                  <span>{art.readTime}</span>
                  <span className="text-brand-red font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Read Post <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>



      </div>

      {/* Quick Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl border text-xs font-semibold flex items-center gap-2.5 backdrop-blur-xl ${
              toastMessage.type === 'error'
                ? 'bg-red-50 border-red-300 text-red-800'
                : 'bg-white/95 border-brand-red/30 text-zinc-900 shadow-brand-red/10'
            }`}
          >
            <Sparkles className="h-4 w-4 text-brand-red shrink-0" />
            <span>{toastMessage.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
