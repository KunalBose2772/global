
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase Credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const menuItems = [
    { id: 2238, title: 'Blog', url: 'blog', parent_id: 2146, menu_position: 'main', sort_order: 15, is_active: 1, menu_id: null },
    { id: 2370, title: 'WEBSITE', url: '#', parent_id: 0, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2371, title: 'HOSTING', url: '#', parent_id: 0, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2372, title: 'DIGITAL MARKETING', url: '#', parent_id: 0, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2373, title: 'BRANDING & PR', url: '#', parent_id: 0, menu_position: 'main', sort_order: 4, is_active: 1, menu_id: 5 },
    { id: 2374, title: 'COMPANY', url: '#', parent_id: 0, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2375, title: 'CONTACT', url: 'contact', parent_id: 0, menu_position: 'main', sort_order: 7, is_active: 1, menu_id: 5 },
    { id: 2376, title: 'Small Business Website', url: '/small-business-website', parent_id: 2370, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2377, title: 'Web Development', url: '/web-development', parent_id: 2370, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2378, title: 'ECommerce Web Designing', url: '/ecommerce-web-designing', parent_id: 2370, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2380, title: 'Website Designing By Industry', url: '/website-designing-by-industry', parent_id: 2370, menu_position: 'main', sort_order: 5, is_active: 1, menu_id: 5 },
    { id: 2381, title: 'Responsive Web Designing', url: '/responsive-web-designing', parent_id: 2370, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2382, title: 'Website Redesigning', url: '/website-redesigning', parent_id: 2370, menu_position: 'main', sort_order: 7, is_active: 1, menu_id: 5 },
    { id: 2383, title: 'Website Maintenance', url: '/website-maintenance', parent_id: 2370, menu_position: 'main', sort_order: 8, is_active: 1, menu_id: 5 },
    { id: 2384, title: 'Domain Registration / Pricing', url: '/domain-registration-pricing', parent_id: 2370, menu_position: 'main', sort_order: 9, is_active: 1, menu_id: 5 },
    { id: 2385, title: 'Domain Transfer', url: '/domain-transfer', parent_id: 2370, menu_position: 'main', sort_order: 10, is_active: 1, menu_id: 5 },
    { id: 2386, title: 'Domain Renewal', url: '/domain-renewal', parent_id: 2370, menu_position: 'main', sort_order: 11, is_active: 1, menu_id: 5 },
    { id: 2387, title: 'Shared Hosting', url: '/shared-hosting', parent_id: 2371, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2388, title: 'VPS Hosting', url: '/vps-hosting', parent_id: 2371, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2389, title: 'Dedicated Hosting', url: '/dedicated-hosting', parent_id: 2371, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2390, title: 'Unlimited Hosting', url: '/unlimited-hosting', parent_id: 2371, menu_position: 'main', sort_order: 4, is_active: 1, menu_id: 5 },
    { id: 2391, title: 'Cloud Hosting', url: '/cloud-hosting', parent_id: 2371, menu_position: 'main', sort_order: 5, is_active: 1, menu_id: 5 },
    { id: 2392, title: 'WordPress Hosting', url: '/wordpress-hosting', parent_id: 2371, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2393, title: 'Email Hosting', url: '/email-hosting', parent_id: 2371, menu_position: 'main', sort_order: 7, is_active: 1, menu_id: 5 },
    { id: 2394, title: 'SSL Certificate', url: '/ssl-certificate', parent_id: 2371, menu_position: 'main', sort_order: 8, is_active: 1, menu_id: 5 },
    { id: 2395, title: 'Website Backup', url: '/website-backup', parent_id: 2371, menu_position: 'main', sort_order: 9, is_active: 1, menu_id: 5 },
    { id: 2396, title: 'Whatsapp Marketing', url: '/whatsapp-marketing', parent_id: 2372, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2397, title: 'SMS Marketing', url: '/sms-marketing', parent_id: 2372, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2398, title: 'Content Marketing', url: '/content-marketing', parent_id: 2372, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2399, title: 'Digital Marketing By Industry', url: '/digital-marketing-by-industry', parent_id: 2372, menu_position: 'main', sort_order: 4, is_active: 1, menu_id: 5 },
    { id: 2400, title: 'SEO/ Search Engine Optimisation', url: '/seo-search-engine-optimisation', parent_id: 2372, menu_position: 'main', sort_order: 5, is_active: 1, menu_id: 5 },
    { id: 2401, title: 'Social Media Marketing', url: '/social-media-marketing', parent_id: 2372, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2402, title: 'Paid Ads/PPC', url: '/paid-ads-ppc', parent_id: 2372, menu_position: 'main', sort_order: 7, is_active: 1, menu_id: 5 },
    { id: 2403, title: 'Email Marketing', url: '/email-marketing', parent_id: 2372, menu_position: 'main', sort_order: 8, is_active: 1, menu_id: 5 },
    { id: 2404, title: 'Voice Marketing', url: '/voice-marketing', parent_id: 2372, menu_position: 'main', sort_order: 9, is_active: 1, menu_id: 5 },
    { id: 2406, title: 'Online Reputation Management', url: '/online-reputation-management', parent_id: 2373, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2407, title: 'Press Release Distribution', url: '/press-release', parent_id: 2373, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2408, title: 'Digital Branding Agency', url: '/branding', parent_id: 2373, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2409, title: 'Corporate Video Production Agency', url: '/corporate-video-production-agency', parent_id: 2373, menu_position: 'main', sort_order: 4, is_active: 1, menu_id: 5 },
    { id: 2410, title: 'Influencer Marketing', url: '/influencer-marketing', parent_id: 2373, menu_position: 'main', sort_order: 5, is_active: 1, menu_id: 5 },
    { id: 2411, title: 'Graphic Designing', url: '/graphic-designing', parent_id: 2373, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2412, title: 'PR Agency', url: '/pr', parent_id: 2373, menu_position: 'main', sort_order: 7, is_active: 1, menu_id: 5 },
    { id: 2413, title: 'Brand Image Building', url: '/brand-image-building', parent_id: 2373, menu_position: 'main', sort_order: 8, is_active: 1, menu_id: 5 },
    { id: 2414, title: 'Corporate Film Makers', url: '/corporate-film-makers', parent_id: 2373, menu_position: 'main', sort_order: 9, is_active: 1, menu_id: 5 },
    { id: 2418, title: 'About Us', url: '/about', parent_id: 2374, menu_position: 'main', sort_order: 1, is_active: 1, menu_id: 5 },
    { id: 2419, title: 'Our Team', url: '/team', parent_id: 2374, menu_position: 'main', sort_order: 2, is_active: 1, menu_id: 5 },
    { id: 2420, title: 'Careers', url: '/career', parent_id: 2374, menu_position: 'main', sort_order: 3, is_active: 1, menu_id: 5 },
    { id: 2421, title: 'Testimonials', url: '/testimonials', parent_id: 2374, menu_position: 'main', sort_order: 4, is_active: 1, menu_id: 5 },
    { id: 2422, title: 'Gallery', url: '/gallery', parent_id: 2374, menu_position: 'main', sort_order: 5, is_active: 1, menu_id: 5 },
    { id: 2423, title: 'Blogs', url: '/blogs', parent_id: 2374, menu_position: 'main', sort_order: 6, is_active: 1, menu_id: 5 },
    { id: 2425, title: 'FAQ', url: '/faq', parent_id: 2374, menu_position: 'main', sort_order: 8, is_active: 1, menu_id: 5 },
    { id: 2427, title: 'Portfolio', url: '/portfolio', parent_id: 2374, menu_position: 'main', sort_order: 10, is_active: 1, menu_id: 5 },
    { id: 2443, title: 'Digital Marketing Services', url: '/digital-marketing', parent_id: 2372, menu_position: 'main', sort_order: 10, is_active: 1, menu_id: 5 }
];

async function seed() {
    console.log('Starting seed process...');

    // 1. Upsert Menu
    console.log('Seeding menus...');
    const { error: menuError } = await supabase
        .from('menus')
        .upsert({ id: 5, name: 'Main Menu', type: 'main' });

    if (menuError) {
        console.error('Error seeding menus:', menuError.message);
        if (menuError.code === '42P01') {
            console.error('\nCRITICAL: Table "menus" does not exist.');
            console.error('You MUST run the SQL script in Supabase SQL Editor manually.');
            return;
        }
    } else {
        console.log('Menu seeded.');
    }

    // 2. Upsert Menu Items
    console.log(`Seeding ${menuItems.length} menu items...`);
    const { error: itemsError } = await supabase
        .from('menu_items')
        .upsert(menuItems, { onConflict: 'id' });

    if (itemsError) {
        console.error('Error seeding items:', itemsError.message);
        if (itemsError.code === '42P01') {
            console.error('\nCRITICAL: Table "menu_items" does not exist.');
            console.error('You MUST run the SQL script in Supabase SQL Editor manually.');
        } else if (itemsError.message.includes('row level security')) {
            console.error('\nCRITICAL: RLS Policy Error.');
            console.error('You MUST run the updated SQL script to enable permissions.');
        }
    } else {
        console.log('Menu items seeded successfully!');
    }
}

seed();
