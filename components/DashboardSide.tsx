import React from 'react';
import Link from "next/link";

const DashboardSide = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Link href="/">ModernBlog</Link>
            </div>
            <nav className="sidebar-nav">
                <Link href="/dashboard" className="sidebar-link active">
                    <span>📊</span> Dashboard
                </Link>
                <Link href="/dashboard/posts" className="sidebar-link">
                    <span>📝</span> Posts
                </Link>
                <Link href="/dashboard/categories" className="sidebar-link">
                    <span>🏷️</span> Categories
                </Link>
                <Link href="/dashboard/posts/create" className="sidebar-link">
                    <span>✨</span> New Post
                </Link>
                <Link href="/dashboard/categories/create" className="sidebar-link">
                    <span>➕</span> New Category
                </Link>
                <div style={{ marginTop: "auto" }}>
                    <Link href="/" className="sidebar-link">
                        <span>🚪</span> Sign Out
                    </Link>
                </div>
            </nav>
        </aside>
    );
};

export default DashboardSide;