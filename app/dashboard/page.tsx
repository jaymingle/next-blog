'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalPosts: 0,
        totalCategories: 0,
        totalViews: 0
    });
    const [recentPosts, setRecentPosts] = useState([]);
    const [recentCategories, setRecentCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                setLoading(true);

                // Fetch post count
                const { count: postCount, error: postError } = await supabase
                    .from('posts')
                    .select('*', { count: 'exact', head: true });

                if (postError) throw postError;

                // Fetch category count
                const { count: categoryCount, error: categoryError } = await supabase
                    .from('categories')
                    .select('*', { count: 'exact', head: true });

                if (categoryError) throw categoryError;

                // Fetch 5 most recent posts
                const { data: posts, error: recentPostsError } = await supabase
                    .from('posts')
                    .select(`
                        *,
                        categories(name)
                    `)
                    .order('created_at', { ascending: false })
                    .limit(5);

                if (recentPostsError) throw recentPostsError;

                // Fetch 3 most recent categories
                const { data: categories, error: recentCategoriesError } = await supabase
                    .from('categories')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(3);

                if (recentCategoriesError) throw recentCategoriesError;

                // Calculate total views (you might want to store this in the database later)
                const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);

                // Set all the state values
                setStats({
                    totalPosts: postCount || 0,
                    totalCategories: categoryCount || 0,
                    totalViews: totalViews || 0
                });

                setRecentPosts(posts || []);
                setRecentCategories(categories || []);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchDashboardData();
    }, []);

    const formatTimeSettings = timestamp => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    return (
        <div>
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div>
                    <Link href="/dashboard/posts/create" className="btn btn-primary">
                        Create New Post
                    </Link>
                </div>
            </div>

            <div className="grid grid-3" style={{ marginBottom: "2rem" }}>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
                    <h3>Total Posts</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{stats.totalPosts}</p>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
                    <h3>Total Categories</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{stats.totalCategories}</p>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
                    <h3>Total Views</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        {stats.totalViews > 1000
                            ? `${(stats.totalViews / 1000).toFixed(1)}K`
                            : stats.totalViews}
                    </p>
                </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <h2>Recent Posts</h2>
                {recentPosts.length === 0 ? (
                    <p>No posts found. Create your first post!</p>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.categories ? post.categories.name : 'Uncategorized'}</td>
                                <td>{formatTimeSettings(post.created_at)}</td>
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
                                <td>
                                    <div className="actions">
                                        <Link href={`/dashboard/posts/edit/${post.id}`} className="icon-btn edit-icon">
                                            ✏️
                                        </Link>
                                        <button className="icon-btn delete-icon">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                <div style={{ marginTop: "1rem" }}>
                    <Link href="/dashboard/posts" className="btn btn-outline">
                        View All Posts
                    </Link>
                </div>
            </div>

            <div>
                <h2>Recent Categories</h2>
                {recentCategories.length === 0 ? (
                    <p>No categories found. Create your first category!</p>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentCategories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>{category.description || 'No description'}</td>
                                <td>{formatTimeSettings(category.created_at)}</td>
                                <td>
                                    <div className="actions">
                                        <Link href={`/dashboard/categories/edit/${category.id}`} className="icon-btn edit-icon">
                                            ✏️
                                        </Link>
                                        <button className="icon-btn delete-icon">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                <div style={{ marginTop: "1rem" }}>
                    <Link href="/dashboard/categories" className="btn btn-outline">
                        View All Categories
                    </Link>
                </div>
            </div>
        </div>
    );
}