import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client for Server Side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// Backend Logic: Icon Mapping
function getIconForTitle(title) {
    if (!title) return 'ArrowRight';
    const lowerTitle = title.toLowerCase();

    // Custom Logic for Icon Assignment
    const map = {
        'web': 'Code',
        'development': 'Code',
        'marketing': 'Megaphone',
        'seo': 'Search',
        'design': 'Palette',
        'branding': 'Layers',
        'hosting': 'Server',
        'server': 'Server',
        'app': 'Smartphone',
        'mobile': 'Smartphone',
        'commerce': 'ShoppingCart',
        'shop': 'ShoppingCart',
        'security': 'Shield',
        'ssl': 'Shield',
        'social': 'Users',
        'team': 'Users',
        'email': 'Mail',
        'cloud': 'Cloud',
        'package': 'Package',
        'analytics': 'BarChart',
        'data': 'BarChart',
        'infrastructure': 'Server',
        'support': 'Briefcase'
    };

    for (const [key, icon] of Object.entries(map)) {
        if (lowerTitle.includes(key)) return icon;
    }

    return 'ArrowRight';
}

export async function GET() {
    // Custom Backend Logic

    // 1. Check DB Connection
    if (!supabase) {
        return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    try {
        // 2. Fetch Raw Data (Custom Query)
        const { data: items, error } = await supabase
            .from('menu_items')
            .select('id, title, url, parent_id, sort_order')
            .eq('menu_id', 5)
            .eq('is_active', 1)
            .order('sort_order', { ascending: true });

        if (error) throw error;
        if (!items || items.length === 0) {
            return NextResponse.json({ empty: true });
        }

        // 3. Process Data (Tree Construction)
        const menuMap = {};
        const rootItems = [];

        // First pass: Index objects
        items.forEach(item => {
            item.children = [];
            item.iconName = getIconForTitle(item.title);
            // Ensure URL has leading slash
            item.href = item.url.startsWith('/') || item.url.startsWith('http') ? item.url : `/${item.url}`;
            menuMap[item.id] = item;
        });

        // Second pass: Build Hierarchy
        items.forEach(item => {
            if (item.parent_id && item.parent_id !== 0) {
                const parent = menuMap[item.parent_id];
                if (parent) {
                    parent.children.push(item);
                }
            } else {
                rootItems.push(item);
            }
        });

        // 4. Return standard Menu Tree (Dynamic Roots)
        // This matches the PHP site structure (Website, Hosting, etc. at top level)
        const menuTree = rootItems.map(root => ({
            id: root.id,
            title: root.title,
            href: root.href,
            iconName: root.iconName,
            children: root.children.map(child => ({
                id: child.id,
                title: child.title,
                href: child.href,
                iconName: child.iconName,
                description: `Professional ${child.title} Services`
            }))
        }));

        return NextResponse.json(menuTree, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
            }
        });

        // Cache Control for Performance (Custom)
        return NextResponse.json(menuData, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
            }
        });

    } catch (err) {
        if (err.code === '42P01') {
            console.error('Migration Required: Table "menu_items" does not exist in Supabase. Please run the SQL script provided in sql/supabase_setup.sql using the Supabase SQL Editor.');
        }
        console.error('Menu API Error:', err);
        return NextResponse.json({ error: 'Failed to fetch menu' }, { status: 500 });
    }
}
