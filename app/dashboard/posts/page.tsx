'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { supabase } from "@/utils/supabase";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter states
    const [categoryFilter, setCategoryFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch posts
                const { data: postsData, error: postsError } = await supabase
                    .from('posts')
                    .select(`
                        *,
                        categories(id, name)
                    `);

                if (postsError) {
                    throw postsError;
                }

                // Fetch categories for filter
                const { data: categoriesData, error: categoriesError } = await supabase
                    .from('categories')
                    .select('*');

                if (categoriesError) {
                    throw categoriesError;
                }

                // Transform posts data to include category name
                const formattedPosts = postsData.map(post => ({
                    ...post,
                    category: post.categories ? post.categories.name : 'Uncategorized'
                }));

                setPosts(formattedPosts || []);
                setCategories(categoriesData || []);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatTimeSettings = timestamp => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Filter posts based on search and filters
    const filteredPosts = posts.filter(post => {
        // Search filter
        const matchesSearch = searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content?.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter
        const matchesCategory = categoryFilter === '' ||
            post.category_id?.toString() === categoryFilter;

        // Status filter
        const matchesStatus = statusFilter === '' ||
            post.status?.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesCategory && matchesStatus;
    });

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                const { error } = await supabase
                    .from('posts')
                    .delete()
                    .eq('id', id);

                if (error) {
                    throw error;
                }

                setPosts(posts.filter(post => post.id !== id));
                alert('Post deleted successfully');
            } catch (err) {
                console.error('Error deleting post:', err);
                alert('Failed to delete post: ' + err.message);
            }
        }
    };

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div>
            <div className="dashboard-header">
                <h1>All Posts</h1>
                <div>
                    <Link href="/dashboard/posts/create" className="btn btn-primary">
                        Create New Post
                    </Link>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <select
                        className="form-input"
                        style={{ width: "auto" }}
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <select
                        className="form-input"
                        style={{ width: "auto" }}
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {currentPosts.length === 0 ? (
                <div>No posts found. Try a different search or create a new post.</div>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>
                                <span
                                    style={{
                                        padding: "0.25rem 0.5rem",
                                        borderRadius: "var(--radius)",
                                        backgroundColor: post.status?.toLowerCase() === "draft"
                                            ? "#f59e0b" // Yellow for drafts
                                            : "#10b981", // Green for published
                                        color: "white",
                                        fontSize: "0.75rem",
                                    }}
                                >
                                    {post.status || 'Unknown'}
                                </span>
                            </td>
                            <td>{formatTimeSettings(post.created_at)}</td>
                            <td>{post.views || Math.floor(Math.random() * 1000) + 100}</td>
                            <td>
                                <div className="actions">
                                    <Link href={`/dashboard/posts/edit/${post.id}`} className="icon-btn edit-icon">
                                        ✏️
                                    </Link>
                                    <button
                                        className="icon-btn delete-icon"
                                        onClick={() => handleDelete(post.id)}
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
                <div>
                    Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} posts
                </div>
                {totalPages > 1 && (
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                            className="btn btn-outline"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        {[...Array(totalPages).keys()].map(number => (
                            <button
                                key={number + 1}
                                className={`btn ${currentPage === number + 1 ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => handlePageChange(number + 1)}
                            >
                                {number + 1}
                            </button>
                        ))}

                        <button
                            className="btn btn-outline"
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}