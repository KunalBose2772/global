'use client';

import { useState, useEffect } from 'react';
import { Edit, Trash, Plus, Save, X, Loader } from 'lucide-react';
import Link from 'next/link';

export default function MenuAdminPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingItem, setEditingItem] = useState(null); // null = list, {} = new, {id...} = edit

    async function fetchItems() {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/menu');
            if (res.ok) {
                const data = await res.json();
                setItems(Array.isArray(data) ? data : []);
            }
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchItems();
    }, []);

    async function handleDelete(id) {
        if (!confirm('Are you sure you want to delete this item?')) return;

        const res = await fetch(`/api/admin/menu?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
            fetchItems();
        } else {
            alert('Failed to delete');
        }
    }

    async function handleSave(e) {
        e.preventDefault();
        const method = editingItem.id ? 'PUT' : 'POST';

        try {
            const res = await fetch('/api/admin/menu', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingItem)
            });

            if (res.ok) {
                setEditingItem(null);
                fetchItems();
            } else {
                const err = await res.json();
                alert('Failed to save: ' + (err.error || 'Unknown error'));
            }
        } catch (e) {
            alert('Error Saving');
        }
    }

    return (
        <div style={{ padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'var(--font-jakarta, sans-serif)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'inline-block' }}>← Back to Site</Link>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Mega Menu Manager</h1>
                    </div>
                    {!editingItem && (
                        <button
                            onClick={() => setEditingItem({ title: '', url: '/', parent_id: 0, sort_order: 0, menu_id: 5, is_active: 1 })}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#2563eb', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: 'white', border: 'none', cursor: 'pointer' }}
                        >
                            <Plus size={20} /> Add New
                        </button>
                    )}
                </header>

                {editingItem ? (
                    <form onSubmit={handleSave} style={{ background: '#171717', padding: '2rem', borderRadius: '1rem', border: '1px solid #333' }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{editingItem.id ? 'Edit Item' : 'New Item'}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Title</label>
                                <input
                                    type="text"
                                    value={editingItem.title}
                                    onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', background: '#262626', border: '1px solid #404040', borderRadius: '0.5rem', color: 'white' }}
                                    required
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>URL</label>
                                <input
                                    type="text"
                                    value={editingItem.url}
                                    onChange={e => setEditingItem({ ...editingItem, url: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', background: '#262626', border: '1px solid #404040', borderRadius: '0.5rem', color: 'white' }}
                                    required
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Parent ID (0 for Root Category)</label>
                                <input
                                    type="number"
                                    value={editingItem.parent_id || 0}
                                    onChange={e => setEditingItem({ ...editingItem, parent_id: parseInt(e.target.value) })}
                                    style={{ width: '100%', padding: '0.75rem', background: '#262626', border: '1px solid #404040', borderRadius: '0.5rem', color: 'white' }}
                                />
                                <small style={{ display: 'block', marginTop: '0.5rem', color: '#666' }}>
                                    Common Parents: 2370(Website), 2371(Hosting), 2372(Marketing)
                                </small>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Sort Order</label>
                                <input
                                    type="number"
                                    value={editingItem.sort_order || 0}
                                    onChange={e => setEditingItem({ ...editingItem, sort_order: parseInt(e.target.value) })}
                                    style={{ width: '100%', padding: '0.75rem', background: '#262626', border: '1px solid #404040', borderRadius: '0.5rem', color: 'white' }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <button type="button" onClick={() => setEditingItem(null)} style={{ padding: '0.75rem 1.5rem', background: '#404040', borderRadius: '0.5rem', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
                            <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#16a34a', borderRadius: '0.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
                                <Save size={18} /> Save Changes
                            </button>
                        </div>
                    </form>
                ) : (
                    <div style={{ background: '#171717', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #333' }}>
                        {loading ? (
                            <div style={{ padding: '4rem', textAlign: 'center', color: '#888' }}><Loader className="animate-spin" style={{ margin: '0 auto 1rem' }} /> Loading items...</div>
                        ) : (
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: '#262626', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem', color: '#aaa', fontSize: '0.9rem' }}>ID</th>
                                        <th style={{ padding: '1rem', color: '#aaa', fontSize: '0.9rem' }}>Title</th>
                                        <th style={{ padding: '1rem', color: '#aaa', fontSize: '0.9rem' }}>URL</th>
                                        <th style={{ padding: '1rem', color: '#aaa', fontSize: '0.9rem' }}>Parent</th>
                                        <th style={{ padding: '1rem', color: '#aaa', fontSize: '0.9rem' }}>Order</th>
                                        <th style={{ padding: '1rem', textAlign: 'right', color: '#aaa', fontSize: '0.9rem' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item.id} style={{ borderTop: '1px solid #333' }}>
                                            <td style={{ padding: '1rem', opacity: 0.5, fontFamily: 'monospace' }}>{item.id}</td>
                                            <td style={{ padding: '1rem', fontWeight: '500' }}>{item.title}</td>
                                            <td style={{ padding: '1rem', opacity: 0.7 }}>{item.url}</td>
                                            <td style={{ padding: '1rem' }}>{item.parent_id === 0 ? <span style={{ opacity: 0.3 }}>-</span> : <span style={{ background: '#333', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>{item.parent_id}</span>}</td>
                                            <td style={{ padding: '1rem' }}>{item.sort_order}</td>
                                            <td style={{ padding: '1rem', textAlign: 'right' }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                                    <button onClick={() => setEditingItem(item)} style={{ padding: '0.5rem', background: '#2563eb', borderRadius: '0.3rem', color: 'white', border: 'none', cursor: 'pointer' }} title="Edit"><Edit size={16} /></button>
                                                    <button onClick={() => handleDelete(item.id)} style={{ padding: '0.5rem', background: '#dc2626', borderRadius: '0.3rem', color: 'white', border: 'none', cursor: 'pointer' }} title="Delete"><Trash size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {items.length === 0 && (
                                        <tr><td colSpan="6" style={{ padding: '3rem', textAlign: 'center', opacity: 0.5 }}>No menu items found. Add one to get started.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
