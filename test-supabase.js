const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('Testing connection to:', supabaseUrl);
    // Try to fetch from a system table or just check health? 
    // We'll try to fetch count of menu_items. 
    // If table doesn't exist, it throws specific error.
    const { count, error } = await supabase
        .from('menu_items')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('Connection test failed or table missing:', error.message);
        if (error.code === '42P01') {
            console.log('SUCCESS: Connected to Supabase! (But table "menu_items" does not exist yet).');
            console.log('ACTION REQUIRED: Please run the "supabase_schema.sql" in your Supabase SQL Editor.');
        }
    } else {
        console.log(`SUCCESS: Connected! Found ${count} items in "menu_items".`);
    }
}

testConnection();
