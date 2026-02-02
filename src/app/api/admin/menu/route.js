import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// GET: Fetch all menu items (flat list)
export async function GET() {
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 500 });

    const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('id', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

// POST: Create a new menu item
export async function POST(request) {
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 500 });

    try {
        const body = await request.json();
        // Default to Main Menu (ID 5) if not specified
        if (!body.menu_id) body.menu_id = 5;

        // Auto-generate ID if needed? Postgres SERIAL handles valid insert without ID usually,
        // but our setup used `id` in insert. 
        // If user sends no ID, Supabase/Postgres should handle it if column is IDENTITY?
        // My migration schema: `id BIGINT PRIMARY KEY`. NO AUTO INCREMENT specified explicitly as generated?
        // Wait, `sql/supabase_setup.sql`: `id BIGINT PRIMARY KEY`.
        // This is NOT auto-increment.
        // I must generate ID.
        // Strategy: Get max ID + 1. OR random?
        // Max ID + 1 is safer for integer IDs.

        let newId = body.id;
        if (!newId) {
            const { data: maxIdData } = await supabase
                .from('menu_items')
                .select('id')
                .order('id', { ascending: false })
                .limit(1);

            const currentMax = maxIdData && maxIdData.length > 0 ? maxIdData[0].id : 0;
            newId = currentMax + 1;
            body.id = newId;
        }

        const { data, error } = await supabase.from('menu_items').insert(body).select();
        if (error) throw error;

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// PUT: Update an existing menu item
export async function PUT(request) {
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 500 });

    try {
        const body = await request.json();
        const { id, ...updates } = body;

        if (!id) return NextResponse.json({ error: 'ID is required for update' }, { status: 400 });

        const { data, error } = await supabase
            .from('menu_items')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// DELETE: Remove a menu item
export async function DELETE(request) {
    if (!supabase) return NextResponse.json({ error: 'Database not configured' }, { status: 500 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}
