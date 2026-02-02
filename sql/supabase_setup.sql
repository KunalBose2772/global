-- Create menus table
CREATE TABLE IF NOT EXISTS menus (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT DEFAULT 'custom'
);

INSERT INTO menus (id, name, type) VALUES (5, 'Main Menu', 'main') ON CONFLICT (id) DO NOTHING;

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  parent_id BIGINT DEFAULT 0,
  menu_position TEXT DEFAULT 'main',
  sort_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  menu_id INTEGER DEFAULT NULL
);

-- Insert menu items
INSERT INTO menu_items (id, title, url, parent_id, menu_position, sort_order, is_active, created_at, menu_id) VALUES
(2238, 'Blog', 'blog', 2146, 'main', 15, 1, '2025-08-11 15:29:38', NULL),
(2370, 'WEBSITE', '#', 0, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2371, 'HOSTING', '#', 0, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2372, 'DIGITAL MARKETING', '#', 0, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2373, 'BRANDING & PR', '#', 0, 'main', 4, 1, '2025-09-01 17:15:55', 5),
(2374, 'COMPANY', '#', 0, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2375, 'CONTACT', 'contact', 0, 'main', 7, 1, '2025-09-01 17:15:55', 5),
(2376, 'Small Business Website', '/small-business-website', 2370, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2377, 'Web Development', '/web-development', 2370, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2378, 'ECommerce Web Designing', '/ecommerce-web-designing', 2370, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2380, 'Website Designing By Industry', '/website-designing-by-industry', 2370, 'main', 5, 1, '2025-09-01 17:15:55', 5),
(2381, 'Responsive Web Designing', '/responsive-web-designing', 2370, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2382, 'Website Redesigning', '/website-redesigning', 2370, 'main', 7, 1, '2025-09-01 17:15:55', 5),
(2383, 'Website Maintenance', '/website-maintenance', 2370, 'main', 8, 1, '2025-09-01 17:15:55', 5),
(2384, 'Domain Registration / Pricing', '/domain-registration-pricing', 2370, 'main', 9, 1, '2025-09-01 17:15:55', 5),
(2385, 'Domain Transfer', '/domain-transfer', 2370, 'main', 10, 1, '2025-09-01 17:15:55', 5),
(2386, 'Domain Renewal', '/domain-renewal', 2370, 'main', 11, 1, '2025-09-01 17:15:55', 5),
(2387, 'Shared Hosting', '/shared-hosting', 2371, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2388, 'VPS Hosting', '/vps-hosting', 2371, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2389, 'Dedicated Hosting', '/dedicated-hosting', 2371, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2390, 'Unlimited Hosting', '/unlimited-hosting', 2371, 'main', 4, 1, '2025-09-01 17:15:55', 5),
(2391, 'Cloud Hosting', '/cloud-hosting', 2371, 'main', 5, 1, '2025-09-01 17:15:55', 5),
(2392, 'WordPress Hosting', '/wordpress-hosting', 2371, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2393, 'Email Hosting', '/email-hosting', 2371, 'main', 7, 1, '2025-09-01 17:15:55', 5),
(2394, 'SSL Certificate', '/ssl-certificate', 2371, 'main', 8, 1, '2025-09-01 17:15:55', 5),
(2395, 'Website Backup', '/website-backup', 2371, 'main', 9, 1, '2025-09-01 17:15:55', 5),
(2396, 'Whatsapp Marketing', '/whatsapp-marketing', 2372, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2397, 'SMS Marketing', '/sms-marketing', 2372, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2398, 'Content Marketing', '/content-marketing', 2372, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2399, 'Digital Marketing By Industry', '/digital-marketing-by-industry', 2372, 'main', 4, 1, '2025-09-01 17:15:55', 5),
(2400, 'SEO/ Search Engine Optimisation', '/seo-search-engine-optimisation', 2372, 'main', 5, 1, '2025-09-01 17:15:55', 5),
(2401, 'Social Media Marketing', '/social-media-marketing', 2372, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2402, 'Paid Ads/PPC', '/paid-ads-ppc', 2372, 'main', 7, 1, '2025-09-01 17:15:55', 5),
(2403, 'Email Marketing', '/email-marketing', 2372, 'main', 8, 1, '2025-09-01 17:15:55', 5),
(2404, 'Voice Marketing', '/voice-marketing', 2372, 'main', 9, 1, '2025-09-01 17:15:55', 5),
(2406, 'Online Reputation Management', '/online-reputation-management', 2373, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2407, 'Press Release Distribution', '/press-release', 2373, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2408, 'Digital Branding Agency', '/branding', 2373, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2409, 'Corporate Video Production Agency', '/corporate-video-production-agency', 2373, 'main', 4, 1, '2025-09-01 17:15:55', 5),
(2410, 'Influencer Marketing', '/influencer-marketing', 2373, 'main', 5, 1, '2025-09-01 17:15:55', 5),
(2411, 'Graphic Designing', '/graphic-designing', 2373, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2412, 'PR Agency', '/pr', 2373, 'main', 7, 1, '2025-09-01 17:15:55', 5),
(2413, 'Brand Image Building', '/brand-image-building', 2373, 'main', 8, 1, '2025-09-01 17:15:55', 5),
(2414, 'Corporate Film Makers', '/corporate-film-makers', 2373, 'main', 9, 1, '2025-09-01 17:15:55', 5),
(2418, 'About Us', '/about', 2374, 'main', 1, 1, '2025-09-01 17:15:55', 5),
(2419, 'Our Team', '/team', 2374, 'main', 2, 1, '2025-09-01 17:15:55', 5),
(2420, 'Careers', '/career', 2374, 'main', 3, 1, '2025-09-01 17:15:55', 5),
(2421, 'Testimonials', '/testimonials', 2374, 'main', 4, 1, '2025-09-01 17:15:55', 5),
(2422, 'Gallery', '/gallery', 2374, 'main', 5, 1, '2025-09-01 17:15:55', 5),
(2423, 'Blogs', '/blogs', 2374, 'main', 6, 1, '2025-09-01 17:15:55', 5),
(2425, 'FAQ', '/faq', 2374, 'main', 8, 1, '2025-09-01 17:15:55', 5),
(2427, 'Portfolio', '/portfolio', 2374, 'main', 10, 1, '2025-09-01 17:15:55', 5),
(2443, 'Digital Marketing Services', '/digital-marketing', 2372, 'main', 10, 1, '2025-11-12 06:47:47', 5)
ON CONFLICT (id) DO UPDATE SET 
title = EXCLUDED.title,
url = EXCLUDED.url,
parent_id = EXCLUDED.parent_id,
menu_position = EXCLUDED.menu_position,
sort_order = EXCLUDED.sort_order,
is_active = EXCLUDED.is_active,
created_at = EXCLUDED.created_at,

-- Enable RLS and allow public access (for Anon Key usage in MVP)
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Menus" ON menus FOR SELECT USING (true);
CREATE POLICY "Public Write Menus" ON menus FOR ALL USING (true);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Items" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public Write Items" ON menu_items FOR ALL USING (true);

