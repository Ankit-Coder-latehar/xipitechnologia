import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Search, Clock, ArrowRight, ArrowUpRight, User, Tag, 
  Share2, Bookmark, CheckCircle2, Mail, X, BookOpen, TrendingUp, Cpu, Globe, Filter
} from 'lucide-react';

const statsData = [
  { value: '150+', label: 'Articles Published', detail: 'In-depth industry playbooks' },
  { value: '4.9/5', label: 'Reader Rating', detail: 'Verified by growth directors' },
  { value: '50K+', label: 'Monthly Readers', detail: 'Marketers, founders & engineers' },
  { value: '100%', label: 'Actionable Tactics', detail: 'Zero fluff, pure execution' }
];

const categories = ['All Articles', 'AI & Automation', 'SEO & Search', 'Performance Ads', 'E-Commerce Growth', 'Brand Strategy'];

const featuredArticle = {
  id: 'feat-1',
  category: 'AI & Automation',
  title: 'How Autonomous AI Employees Are Reclaiming 10,000+ Hours for Enterprise Brands in 2026',
  excerpt: 'A deep-dive analysis into custom RAG vector databases, LLM agent routing, and how leading DTC & SaaS companies are automating 85% of tier-1 support and outbound sales prospecting.',
  readTime: '8 min read',
  date: 'July 18, 2026',
  author: 'Elena Rostova',
  authorRole: 'Head of AI Engineering',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  content: `
### Executive Summary
Enterprise brands are facing unprecedented operational costs in manual data routing, lead qualification, and customer support. In 2026, the transition from simple chatbots to **Autonomous AI Employees** has fundamentally altered how high-growth organizations operate.

### The Architecture of AI Employees
Unlike legacy rule-based chatbots, modern AI employees combine three critical technological breakthroughs:
1. **Private RAG Vector Indexing**: Connects company SOPs, Notion docs, Slack logs, and SQL databases using vector engines like Pinecone and Weaviate.
2. **Multi-Agent Orchestration**: Specialized sub-agents handling discrete tasks (e.g., Prospector Agent, Technical Support Agent, Copywriting Agent).
3. **Strict SOC2 Guardrails**: Multi-layer security filtering preventing prompt injection attacks and enforcing zero data retention policies.

### Real-World Case Study: 10,000 Hours Reclaimed
By deploying a multi-agent AI system across customer support and lead enrichment, one enterprise e-commerce client reduced first-response time from 42 minutes to 1.2 seconds while cutting operational overhead by 82%.

### Conclusion & Next Steps
Organizations that adopt custom LLM workflows today build compounding competitive moats. Automating manual workflows allows team members to focus 100% on high-leverage strategic growth.
  `
};

const articles = [
  {
    id: 'art-1',
    category: 'SEO & Search',
    title: 'The 2026 SEO Playbook: Google SGE, ChatGPT Citations & llms.txt',
    excerpt: 'Traditional 10-blue-link SEO is no longer enough. Learn how to optimize your content structure so your brand gets cited by ChatGPT, Perplexity, and Google AI Overviews.',
    readTime: '6 min read',
    date: 'July 14, 2026',
    author: 'Marcus Vance',
    authorRole: 'Director of Growth',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    content: `
### The New Search Paradigm
Search engine optimization has evolved into **AI Search Optimization**. Users are increasingly asking natural-language questions directly to LLMs instead of scanning search pages.

### Key Strategies for 2026:
- **llms.txt Standard**: Deploy structured markdown summaries specifically formatted for LLM web crawlers.
- **Entity Knowledge Graphs**: Build topical clusters that establish unambiguous authority in your niche.
- **Direct Answer Extraction**: Format content headers to match prompt intent structures.
    `
  },
  {
    id: 'art-2',
    category: 'Performance Ads',
    title: 'Meta Ads Scaling: How We Hit a 4.8x ROAS Across $2.5M+ Ad Spend',
    excerpt: 'An unvarnished breakdown of our creative testing matrix, dynamic UGC hook engineering, and Conversions API (CAPI) server-side attribution setup.',
    readTime: '7 min read',
    date: 'July 10, 2026',
    author: 'Alex Mercer',
    authorRole: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop',
    content: `
### Scaling Paid Media in 2026
Media buying is no longer about audience hacks; it is 90% creative engineering. If your ad creative doesn't stop the scroll within 2 seconds, no bidding strategy can save the campaign.

### The 4-Part Creative Matrix:
1. **Hook Engineering**: Testing 5 distinct visual & audio hooks per ad script.
2. **UGC Authenticity**: Content that feels organic to feeds converts 3x better than polished studio spots.
3. **CAPI Server Attribution**: Direct server-to-server event tracking for 100% pixel accuracy.
    `
  },
  {
    id: 'art-3',
    category: 'E-Commerce Growth',
    title: 'Headless Shopify vs WooCommerce: Choosing the Right E-Commerce Stack',
    excerpt: 'Comparing speed benchmarks, developer flexibility, maintenance costs, and conversion metrics across enterprise e-commerce platforms.',
    readTime: '9 min read',
    date: 'July 05, 2026',
    author: 'Elena Rostova',
    authorRole: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1556742049-0a675659e366?q=80&w=800&auto=format&fit=crop',
    content: `
### E-Commerce Architecture in 2026
Choosing between Headless Shopify Plus and WooCommerce Platinum depends on your annual GMV, SKU count, and internal engineering capacity.

### Benchmark Breakdown:
- **Load Speed**: Headless Shopify averages 0.9s vs WooCommerce 1.3s.
- **Flexibility**: WooCommerce offers 100% open-source database customization.
- **Checkout Conversion**: Native 1-click checkout options boost conversion by 18%.
    `
  },
  {
    id: 'art-4',
    category: 'Brand Strategy',
    title: 'Brand Identity That Converts: Moving Beyond Generic Templates',
    excerpt: 'Why generic template branding fails to capture luxury positioning and how custom grid spaces and bespoke typography command category authority.',
    readTime: '5 min read',
    date: 'June 28, 2026',
    author: 'Alex Mercer',
    authorRole: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    content: `
### The Premium Brand Advantage
Consumers evaluate brand credibility in under 50 milliseconds. Generic templates signal cheapness and undermine price elasticity.

### Building Category Authority:
- **Custom Typography**: Bespoke serif & sans-serif font pairings.
- **Color Psychology**: Harmonious palettes calibrated for high contrast and luxury appeal.
- **Micro-Animations**: Smooth UI transitions that create a tactile, premium feel.
    `
  },
  {
    id: 'art-5',
    category: 'AI & Automation',
    title: 'Building Private RAG Vector Databases with Pinecone and LangChain',
    excerpt: 'Step-by-step technical guide for engineers building private, SOC2-compliant RAG search engines for internal company data.',
    readTime: '10 min read',
    date: 'June 20, 2026',
    author: 'Elena Rostova',
    authorRole: 'Head of AI Engineering',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    content: `
### Vector Search Demystified
Retrieval-Augmented Generation (RAG) allows LLMs to query your private database without fine-tuning weights.

### Implementation Stack:
1. **Chunking Engine**: Recursive character text splitting at 500-token chunks with 50-token overlap.
2. **Embedding Model**: OpenAI text-embedding-3-large generating 3072-dimensional vectors.
3. **Vector Store**: Pinecone Serverless with hybrid dense/sparse keyword search.
    `
  },
  {
    id: 'art-6',
    category: 'Performance Ads',
    title: 'Omnichannel Attribution in 2026: Fixing Multi-Touch Drop-Offs',
    excerpt: 'How to accurately track customer touchpoints across Meta, Google, TikTok, and direct traffic without relying on third-party cookies.',
    readTime: '6 min read',
    date: 'June 15, 2026',
    author: 'Marcus Vance',
    authorRole: 'Director of Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    content: `
### The Death of Third-Party Cookies
First-party data modeling and server-side tracking are the only reliable ways to measure true campaign ROAS in 2026.

### Recommended Attribution Setup:
- **First-Party Click IDs**: Capture UTM & custom click identifiers on landing page load.
- **Blended ROAS Metrics**: Tracking total ad spend against net revenue for true efficiency.
    `
  }
];

export default function BlogPage({ onContactClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Filter articles based on category and search query
  const filteredArticles = articles.filter(art => {
    const matchesCat = selectedCategory === 'All Articles' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-red/10 via-sky-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            INSIGHTS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              INSIGHTS & INDUSTRY INTELLIGENCE
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93] uppercase">
              INSIGHTS THAT <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-brand-red normal-case">
                Move Markets.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal pt-2">
              Deep-dive analyses on AI marketing automation, search algorithm updates, performance media buying, brand positioning, and e-commerce growth.
            </p>
          </motion.div>

          {/* Search & Category Filter Bar */}
          <div className="space-y-6 pt-4">
            
            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword, topic, or strategy..."
                className="w-full bg-[#0D0D0F] border border-white/10 focus:border-brand-red rounded-full pl-11 pr-4 py-3.5 text-xs text-white outline-none font-medium shadow-xl transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25'
                      : 'bg-[#0D0D0F] border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. METRICS BANNER */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-red/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-brand-red font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-white mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-medium mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED HERO ARTICLE SPOTLIGHT */}
      <section className="py-20 bg-[#050507] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-red block">
            FEATURED ARTICLE SPOTLIGHT
          </span>

          <div 
            onClick={() => setActiveArticleModal(featuredArticle)}
            className="group relative bg-[#0D0D0F] rounded-3xl border border-white/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer hover:border-brand-red/40 transition-all duration-500 shadow-2xl"
          >
            <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="bg-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-brand-red/30">
                  {featuredArticle.category}
                </span>
                <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                {featuredArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red flex items-center justify-center font-bold text-xs">
                    ER
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{featuredArticle.author}</span>
                    <span className="text-[10px] text-zinc-500 block">{featuredArticle.authorRole}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ARTICLE GRID SECTION */}
      <section className="py-24 bg-[#0D0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-sky-400">
                ALL PUBLISHED INSIGHTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                EXPLORE STRATEGIES.
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              Showing {filteredArticles.length} of {articles.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveArticleModal(art)}
                className="group bg-[#050507] rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-brand-red px-3 py-1 rounded-full border border-white/10">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-brand-red transition-colors leading-tight">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white border-t border-white/5 mt-4">
                  <span>By {art.author}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-red" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEWSLETTER SUBSCRIPTION BANNER */}
      <section className="py-24 bg-[#050507] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="bg-[#0D0D0F] p-8 sm:p-12 rounded-3xl border border-white/10 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              STAY AHEAD OF THE CURVE
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Get Weekly Growth Tactics Direct to Your Inbox.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              Join 50,000+ marketers and founders receiving our weekly breakdowns on AI automation, search algorithms, and paid ad scaling.
            </p>

            {newsletterSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-full max-w-md mx-auto text-xs font-bold text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscribed! Check your inbox for your first playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="flex-grow bg-black/60 border border-white/15 focus:border-brand-red rounded-full px-5 py-3.5 text-xs text-white outline-none"
                />
                <button
                  type="submit"
                  className="bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              READY TO SCALE YOUR BRAND WITH XIPI?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Book Your Free 30-Minute Growth Strategy Call.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Let's audit your current customer acquisition channels, search rankings, and design stack to formulate a high-ROAS roadmap.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULL ARTICLE READER MODAL */}
      <AnimatePresence>
        {activeArticleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticleModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0D0D0F] border border-white/15 rounded-3xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6 text-left shadow-2xl"
            >
              <button
                onClick={() => setActiveArticleModal(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-3 pt-2">
                <span className="bg-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-brand-red/30">
                  {activeArticleModal.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight pt-1">
                  {activeArticleModal.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono pt-1">
                  <span>By {activeArticleModal.author} ({activeArticleModal.authorRole})</span>
                  <span>•</span>
                  <span>{activeArticleModal.readTime}</span>
                </div>
              </div>

              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10">
                <img src={activeArticleModal.image} alt={activeArticleModal.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed whitespace-pre-line space-y-4 pt-2">
                {activeArticleModal.content}
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold">
                <span className="text-zinc-500">Share this article:</span>
                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Close Reader
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
