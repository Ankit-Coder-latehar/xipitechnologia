-- =======================================================
-- Supabase Schema for Xipitechnologia Blogs
-- Paste this script into your Supabase Dashboard > SQL Editor
-- =======================================================

-- 1. Create the blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'AI & Automation',
  tag TEXT DEFAULT 'FEATURED SPOTLIGHT',
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  author TEXT DEFAULT 'Xipitechnologia Admin',
  author_role TEXT DEFAULT 'Super Admin',
  author_avatar TEXT,
  takeaways JSONB DEFAULT '[]'::jsonb,
  read_time TEXT DEFAULT '5 min read',
  date TEXT,
  views TEXT DEFAULT '1.2K',
  likes INTEGER DEFAULT 0,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Public can read all published blogs
CREATE POLICY "Allow public read access to blogs"
ON public.blogs
FOR SELECT
USING (true);

-- 4. Policy: Allow insert/update/delete with anon key for frontend admin
CREATE POLICY "Allow anon insert on blogs"
ON public.blogs
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow anon update on blogs"
ON public.blogs
FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow anon delete on blogs"
ON public.blogs
FOR DELETE
USING (true);

-- 5. Enable Realtime on blogs table
ALTER PUBLICATION supabase_realtime ADD TABLE public.blogs;
