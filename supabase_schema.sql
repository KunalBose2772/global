-- Supabase Schema for Global Webify Menu System

-- 1. Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL DEFAULT 5,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    target VARCHAR(20) DEFAULT '_self',
    parent_id INTEGER DEFAULT 0,
    sort_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_menu_items_menu_id ON menu_items(menu_id);
CREATE INDEX idx_menu_items_parent_id ON menu_items(parent_id);

-- 2. Create service_pages table (optional, but good for reference if expanding)
CREATE TABLE IF NOT EXISTS service_pages (
    id SERIAL PRIMARY KEY,
    page_title VARCHAR(255) NOT NULL,
    page_slug VARCHAR(255) UNIQUE NOT NULL,
    page_content TEXT,
    is_active INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- 3. Seed Data (Based on your PHP site structure)

-- Main Categories (Parent IDs will need to be dynamically determined in a real script, 
-- but here we hardcode for clarity or you can run this block)

INSERT INTO menu_items (id, title, url, parent_id, sort_order) VALUES
(100, 'WEBSITE', '#', 0, 1),
(200, 'HOSTING', '#', 0, 2),
(300, 'DIGITAL MARKETING', '#', 0, 3),
(400, 'BRANDING & PR', '#', 0, 4),
(500, 'PACKAGES', '#', 0, 5),
(600, 'COMPANY', '#', 0, 6);

-- WEBSITES Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'Web Development', 'web-development', 100, 1),
(5, 'E-commerce Solutions', 'ecommerce', 100, 2),
(5, 'CMS Development', 'cms-development', 100, 3),
(5, 'Website Maintenance', 'website-maintenance', 100, 4);

-- HOSTING Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'Shared Hosting', 'shared-hosting', 200, 1),
(5, 'VPS Hosting', 'vps-hosting', 200, 2),
(5, 'Dedicated Servers', 'dedicated-servers', 200, 3),
(5, 'Cloud Hosting', 'cloud-hosting', 200, 4);

-- DIGITAL MARKETING Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'SEO Services', 'seo-services', 300, 1),
(5, 'Social Media Marketing', 'social-media', 300, 2),
(5, 'PPC Advertising', 'ppc-advertising', 300, 3),
(5, 'Content Marketing', 'content-marketing', 300, 4),
(5, 'Email Marketing', 'email-marketing', 300, 5);

-- BRANDING Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'Logo Design', 'logo-design', 400, 1),
(5, 'Brand Identity', 'brand-identity', 400, 2),
(5, 'Graphic Design', 'graphic-design', 400, 3),
(5, 'Video Production', 'video-production', 400, 4);

-- PACKAGES Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'Startup Package', 'startup-package', 500, 1),
(5, 'Business Package', 'business-package', 500, 2),
(5, 'Enterprise Package', 'enterprise-package', 500, 3);

-- COMPANY Children
INSERT INTO menu_items (menu_id, title, url, parent_id, sort_order) VALUES
(5, 'About Us', 'about-us', 600, 1),
(5, 'Our Team', 'our-team', 600, 2),
(5, 'Careers', 'careers', 600, 3),
(5, 'Contact Us', 'contact-us', 600, 4);

-- Adjust sequence to avoid collision if needed
SELECT setval('menu_items_id_seq', (SELECT MAX(id) FROM menu_items));
