'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { supabase } from "@/utils/supabase";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase.from('categories').select('*');

                if (error) {
                    throw error;
                }

                setCategories(data || []);
            } catch (err) {
                console.error('Error fetching categories:', err);
                setError('Failed to load categories. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const formatTimeSettings = timestamp => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                // First, check if there are any posts using this category
                const { data: postsWithCategory, error: checkError } = await supabase
                    .from('posts')
                    .select('id')
                    .eq('category_id', id);

                if (checkError) {
                    throw checkError;
                }

                // If there are posts using this category, show an error
                if (postsWithCategory && postsWithCategory.length > 0) {
                    alert(`Cannot delete this category because it is being used by ${postsWithCategory.length} post(s). Please reassign these posts to another category first.`);
                    return;
                }

                // If no posts are using this category, proceed with deletion
                const { error } = await supabase
                    .from('categories')
                    .delete()
                    .eq('id', id);

                if (error) {
                    throw error;
                }

                // Update the state to remove the deleted category
                setCategories(categories.filter(category => category.id !== id));

                // Show success message
                alert('Category deleted successfully');
            } catch (err) {
                console.error('Error deleting category:', err);
                alert('Failed to delete category: ' + err.message);
            }
        }
    };

    const handleSort = (e) => {
        setSortOption(e.target.value);

        // Sort the categories based on the selected option
        const sortedCategories = [...categories];

        switch (e.target.value) {
            case 'name':
                sortedCategories.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'date':
                sortedCategories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            default:
                break;
        }

        setCategories(sortedCategories);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter categories based on search query
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (category.description && category.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) return <div>Loading categories...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div>
            <div className="dashboard-header">
                <h1>All Categories</h1>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Link href="/dashboard/categories/create" className="btn btn-primary">
                        Create New Category
                    </Link>
                    <button
                        className="btn btn-outline"
                        onClick={() => alert('For help with managing categories, please check our documentation.')}
                    >
                        Need Help?
                    </button>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                    <select
                        className="form-input"
                        style={{ width: "auto" }}
                        value={sortOption}
                        onChange={handleSort}
                    >
                        <option value="name">Sort by Name</option>
                        <option value="date">Sort by Date</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Search categories..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {filteredCategories.length === 0 ? (
                <div>No categories found. Try a different search or create a new category.</div>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCategories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.slug}</td>
                            <td>{category.description}</td>
                            <td>{category.created_at ? formatTimeSettings(category.created_at) : 'N/A'}</td>
                            <td>
                                <div className="actions">
                                    <Link href={`/dashboard/categories/edit/${category.id}`} className="icon-btn edit-icon">
                                        ✏️
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(category.id)}
                                        className="icon-btn delete-icon"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
                <div>Showing {filteredCategories.length} of {categories.length} categories</div>
            </div>
        </div>
    );
}