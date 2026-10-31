/**
 * WordPress REST API Integration Service
 * 
 * Connects headless WordPress to the React frontend.
 * When you publish or edit any post in your WordPress dashboard,
 * it immediately reflects on the Blog page and Blog Post views.
 */

// 1. Get the configured WordPress site URL
export function getWordPressUrl() {
  // Priority: 1. localStorage override -> 2. Environment variable -> 3. Empty string
  if (typeof window !== 'undefined') {
    const localUrl = localStorage.getItem('xipi_wordpress_url');
    if (localUrl && localUrl.trim()) return cleanUrl(localUrl);
  }
  
  const envUrl = import.meta.env.VITE_WORDPRESS_URL || '';
  return cleanUrl(envUrl);
}

// 2. Set or update the WordPress URL in localStorage
export function setWordPressUrl(url) {
  if (typeof window === 'undefined') return;
  if (!url || !url.trim()) {
    localStorage.removeItem('xipi_wordpress_url');
  } else {
    localStorage.setItem('xipi_wordpress_url', cleanUrl(url));
  }
}

// 3. Helper to clean and format base URL (strip trailing slash)
function cleanUrl(url) {
  if (!url) return '';
  let cleaned = url.trim();
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    cleaned = 'https://' + cleaned;
  }
  return cleaned.replace(/\/+$/, '');
}

// 4. Check if WordPress is configured
export function isWordPressConfigured() {
  const url = getWordPressUrl();
  return Boolean(url && url.length > 5);
}

// 5. Decode HTML Entities produced by WordPress (e.g., &#8217;, &#8211;, &amp;)
export function decodeHtml(html) {
  if (!html) return '';
  if (typeof document !== 'undefined') {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  return html
    .replace(/&#8217;|&#8216;|&rsquo;|&lsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&rdquo;|&ldquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}

// 6. Strip HTML tags from strings for clean excerpts
export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

// 7. Format ISO date to human readable format (e.g., "Oct 24, 2026")
export function formatWpDate(isoDate) {
  if (!isoDate) return '';
  try {
    const d = new Date(isoDate);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return '';
  }
}

// 8. Estimate read time from HTML content
export function calculateReadTime(content) {
  if (!content) return '4 min read';
  const clean = stripHtml(content);
  const wordCount = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));
  return `${minutes} min read`;
}

// 9. Extract featured image from all possible WordPress fields (REST, plugins, embedded, content)
export function extractFeaturedImage(post) {
  if (!post) return '';

  // 1. Check _embedded['wp:featuredmedia']
  const mediaList = post._embedded?.['wp:featuredmedia'];
  if (Array.isArray(mediaList) && mediaList.length > 0) {
    const media = mediaList[0];
    if (media && typeof media === 'object' && !media.code) {
      if (media.source_url) return media.source_url;
      if (media.media_details?.sizes) {
        const sizes = media.media_details.sizes;
        if (sizes.large?.source_url) return sizes.large.source_url;
        if (sizes.full?.source_url) return sizes.full.source_url;
        if (sizes.medium_large?.source_url) return sizes.medium_large.source_url;
        if (sizes.medium?.source_url) return sizes.medium.source_url;
      }
      if (media.guid?.rendered && !media.guid.rendered.includes('?p=')) {
        return media.guid.rendered;
      }
    }
  }

  // 2. Direct WordPress properties (Jetpack, custom themes, SEO plugins)
  if (post.jetpack_featured_media_url) return post.jetpack_featured_media_url;
  if (post.featured_media_src_url) return post.featured_media_src_url;
  if (post.featured_image_url) return post.featured_image_url;
  if (post.featured_image_urls?.large) return post.featured_image_urls.large;
  if (post.featured_image_urls?.full) return post.featured_image_urls.full;
  if (post.yoast_head_json?.og_image?.[0]?.url) return post.yoast_head_json.og_image[0].url;

  // 3. Fallback: Extract the first <img> tag from the post content body
  const rawHtml = (post.content?.rendered || '') + ' ' + (post.excerpt?.rendered || '');
  const imgMatch = rawHtml.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }

  return '';
}

// 10. Fetch single media by ID if featured_media > 0 but not in _embedded
export async function fetchMediaUrl(mediaId) {
  if (!mediaId || typeof mediaId !== 'number' || mediaId <= 0) return '';
  try {
    const res = await smartWpFetch(`/wp-json/wp/v2/media/${mediaId}`);
    if (res.ok) {
      const data = await res.json();
      return (
        data.source_url || 
        data.media_details?.sizes?.large?.source_url || 
        data.media_details?.sizes?.full?.source_url || 
        data.guid?.rendered || ''
      );
    }
  } catch {}
  return '';
}

// 11. Transform a raw WordPress REST API post into our frontend blog schema
export function transformWpPost(post, overrideImage = '') {
  if (!post) return null;

  // Extract featured image
  let featuredImage = overrideImage || extractFeaturedImage(post);
  if (!featuredImage) {
    // Fallback professional cover image
    featuredImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
  }

  // Extract category name
  const terms = post._embedded?.['wp:term']?.[0];
  const categoryName = terms && terms.length > 0 ? decodeHtml(terms[0].name) : 'AI & Tech';

  // Extract author info
  const authorObj = post._embedded?.author?.[0];
  const authorName = authorObj?.name ? decodeHtml(authorObj.name) : 'Xi-Pi Technologia';
  const authorAvatar = authorObj?.avatar_urls?.['96'] || authorObj?.avatar_urls?.['48'] || '';

  // Extract takeaways if any or generate from excerpt
  const cleanExcerpt = stripHtml(decodeHtml(post.excerpt?.rendered || ''));

  return {
    id: String(post.id),
    slug: post.slug || String(post.id),
    title: decodeHtml(post.title?.rendered || 'Untitled Post'),
    category: categoryName,
    tag: categoryName.toUpperCase(),
    excerpt: cleanExcerpt.length > 200 ? cleanExcerpt.slice(0, 197) + '...' : cleanExcerpt,
    content: post.content?.rendered || '', // full WordPress rich HTML
    rawContent: post.content?.rendered || '',
    isHtml: true, // flags that content is rich HTML from WordPress
    image: featuredImage,
    author: authorName,
    authorRole: 'Author',
    authorAvatar: authorAvatar,
    date: formatWpDate(post.date),
    readTime: calculateReadTime(post.content?.rendered),
    views: `${Math.floor(1.2 + ((post.id % 15) / 10))}K`,
    likes: (post.id * 7) % 89 + 12,
    status: post.status === 'publish' ? 'published' : post.status,
    source: 'wordpress',
    link: post.link,
    createdAt: post.date || new Date().toISOString()
  };
}

// Helper: Smart fetcher with automatic fallback to dev proxy if CORS blocks
async function smartWpFetch(fullPath) {
  const baseUrl = getWordPressUrl();
  const directUrl = `${baseUrl}${fullPath}`;

  // Try direct fetch first
  try {
    const res = await fetch(directUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) return res;
  } catch (err) {
    // If direct failed (e.g. CORS on localhost), proceed to proxy attempt
  }

  // Fallback to relative dev proxy if running on localhost / dev server
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    try {
      const proxyRes = await fetch(fullPath, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });
      if (proxyRes.ok) return proxyRes;
    } catch {}
  }

  // Re-attempt direct to report the actual response/error
  return fetch(directUrl, {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  });
}

// 10. Fetch published posts from WordPress REST API
export async function fetchWordPressPosts({ page = 1, perPage = 20, search = '', categorySlug = '' } = {}) {
  const baseUrl = getWordPressUrl();
  if (!baseUrl) {
    return { success: false, data: [], message: 'WordPress URL is not configured' };
  }

  try {
    const params = new URLSearchParams({
      _embed: '1',
      per_page: String(perPage),
      page: String(page),
      status: 'publish'
    });

    if (search && search.trim()) {
      params.append('search', search.trim());
    }

    const relPath = `/wp-json/wp/v2/posts?${params.toString()}`;
    const res = await smartWpFetch(relPath);

    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const totalPosts = parseInt(res.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
    const rawPosts = await res.json();

    if (!Array.isArray(rawPosts)) {
      return { success: false, data: [], message: 'Invalid response from WordPress' };
    }

    // Transform posts with parallel media fallback resolution
    const transformed = (
      await Promise.all(
        rawPosts.map(async (raw) => {
          let img = extractFeaturedImage(raw);
          if (!img && raw.featured_media && typeof raw.featured_media === 'number' && raw.featured_media > 0) {
            img = await fetchMediaUrl(raw.featured_media);
          }
          return transformWpPost(raw, img);
        })
      )
    ).filter(Boolean);

    return {
      success: true,
      data: transformed,
      total: totalPosts || transformed.length,
      totalPages: totalPages || 1,
      source: 'wordpress'
    };
  } catch (err) {
    console.warn('[WordPress API] Fetch error:', err.message);
    return { success: false, data: [], message: err.message };
  }
}

// 11. Fetch single post by ID or Slug
export async function fetchWordPressPostByIdOrSlug(idOrSlug) {
  const baseUrl = getWordPressUrl();
  if (!baseUrl || !idOrSlug) return null;

  try {
    // If it's a numeric ID
    if (/^\d+$/.test(String(idOrSlug).trim())) {
      const relPath = `/wp-json/wp/v2/posts/${idOrSlug}?_embed=1`;
      const res = await smartWpFetch(relPath);
      if (res.ok) {
        const raw = await res.json();
        let img = extractFeaturedImage(raw);
        if (!img && raw.featured_media && typeof raw.featured_media === 'number' && raw.featured_media > 0) {
          img = await fetchMediaUrl(raw.featured_media);
        }
        return transformWpPost(raw, img);
      }
    }

    // Try fetching by slug
    const slugRelPath = `/wp-json/wp/v2/posts?slug=${encodeURIComponent(idOrSlug)}&_embed=1`;
    const slugRes = await smartWpFetch(slugRelPath);
    if (slugRes.ok) {
      const list = await slugRes.json();
      if (Array.isArray(list) && list.length > 0) {
        const raw = list[0];
        let img = extractFeaturedImage(raw);
        if (!img && raw.featured_media && typeof raw.featured_media === 'number' && raw.featured_media > 0) {
          img = await fetchMediaUrl(raw.featured_media);
        }
        return transformWpPost(raw, img);
      }
    }

    return null;
  } catch (err) {
    console.warn('[WordPress API] Single post fetch error:', err.message);
    return null;
  }
}

// 12. Fetch Categories from WordPress
export async function fetchWordPressCategories() {
  const baseUrl = getWordPressUrl();
  if (!baseUrl) return [];

  try {
    const res = await smartWpFetch(`/wp-json/wp/v2/categories?per_page=50&hide_empty=true`);
    if (!res.ok) return [];
    const list = await res.json();
    if (!Array.isArray(list)) return [];
    return list.map(c => ({
      id: c.id,
      name: decodeHtml(c.name),
      slug: c.slug,
      count: c.count
    }));
  } catch (err) {
    console.warn('[WordPress API] Categories fetch error:', err.message);
    return [];
  }
}

// 13. Test WordPress connection
export async function testWordPressConnection(targetUrl) {
  const url = cleanUrl(targetUrl || getWordPressUrl());
  if (!url) {
    return { success: false, message: 'Please provide a valid WordPress URL (e.g. https://your-site.com)' };
  }

  try {
    const endpoint = `${url}/wp-json/wp/v2/posts?per_page=1&_embed=1`;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(6000)
    });

    if (!res.ok) {
      return { 
        success: false, 
        message: `HTTP error ${res.status}: Could not reach WordPress REST API at ${url}/wp-json/wp/v2/posts` 
      };
    }

    const data = await res.json();
    if (Array.isArray(data)) {
      return { 
        success: true, 
        message: `Connection successful! Found ${data.length > 0 ? 'published posts' : 'active REST API'}.`,
        postsCount: data.length,
        url 
      };
    } else {
      return { success: false, message: 'Endpoint reached but response was not a valid posts list.' };
    }
  } catch (err) {
    return { 
      success: false, 
      message: `Connection failed: ${err.message}. Ensure your WordPress site has REST API enabled and CORS permits requests.` 
    };
  }
}

