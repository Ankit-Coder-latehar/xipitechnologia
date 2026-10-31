import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, Clock, Sparkles, BookOpen } from 'lucide-react';
import { api } from '../services/api';
import * as blogStorage from '../services/blogStorage';

export default function HomeBlogSection({ onNavigate }) {
  // Grab published blogs reactively from frontend storage & WordPress
  const [displayArticles, setDisplayArticles] = useState(() => {
    return blogStorage.getPublishedBlogs().slice(0, 3);
  });

  useEffect(() => {
    let isMounted = true;
    const fetchLatest = async () => {
      try {
        const res = await api.getPublishedBlogs();
        if (res && res.success && Array.isArray(res.data) && res.data.length > 0 && isMounted) {
          setDisplayArticles(res.data.slice(0, 3));
          return;
        }
      } catch {}
      if (isMounted) {
        setDisplayArticles(blogStorage.getPublishedBlogs().slice(0, 3));
      }
    };

    fetchLatest();
    const unsubscribe = blogStorage.subscribeToBlogs(() => {
      fetchLatest();
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const handleArticleClick = (id, e) => {
    e?.preventDefault();
    if (onNavigate) {
      onNavigate('blog-post', id);
    } else {
      window.location.href = `/blog/${id}`;
    }
  };

  const handleViewAllClick = (e) => {
    e?.preventDefault();
    if (onNavigate) {
      onNavigate('blog');
    } else {
      window.location.href = '/blog';
    }
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] text-zinc-900 overflow-hidden border-t border-zinc-200/80 select-none">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-red/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thought Leadership & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
              Latest from Our <span className="text-brand-red">Blog</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
              Fresh strategic playbooks, AI implementation case studies, and modern performance marketing frameworks.
            </p>
          </div>

          <button
            onClick={handleViewAllClick}
            className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-800 bg-white hover:bg-brand-red hover:text-white px-6 py-3 rounded-full transition-all duration-300 self-start md:self-auto border border-zinc-200/90 hover:border-brand-red shadow-sm cursor-pointer"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3-Column Article Grid or Empty State */}
        {displayArticles.length === 0 ? (
          <div className="text-center py-14 px-6 rounded-3xl bg-white border border-zinc-200/80 max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto text-brand-red">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">Editorial Insights Coming Soon</h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
              Our specialists are preparing deep-dive strategic case studies and marketing frameworks. Stay tuned for upcoming articles.
            </p>
            <button
              onClick={handleViewAllClick}
              className="bg-brand-red text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2 hover:bg-brand-red-dark transition-all cursor-pointer shadow-md shadow-brand-red/20"
            >
              <span>Visit Blog Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((art, idx) => (
            <motion.article
              key={art.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden flex flex-col justify-between hover:border-brand-red/40 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300 hover:-translate-y-1.5"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-brand-red px-3 py-1 rounded-full border border-brand-red/20 shadow-xs">
                    {art.category}
                  </div>

                  {/* Date & Read time */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium drop-shadow-md">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-red-400" /> {art.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-amber-300" /> {art.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-brand-red transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </a>

              {/* Author & Read Story Link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={art.authorAvatar}
                      alt={art.author}
                      className="h-7 w-7 rounded-full object-cover border border-zinc-200 shadow-xs"
                    />
                    <span className="text-xs font-bold text-zinc-900">{art.author}</span>
                  </div>

                  <a
                    href={`/blog/${art.id}`}
                    onClick={(e) => handleArticleClick(art.id, e)}
                    className="text-brand-red font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform"
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
    </div>
    </section>
  );
}
