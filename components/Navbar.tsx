import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <Link href="/" className="logo">
                        ModernBlog
                    </Link>
                    <div className="nav-links">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                        <Link href="/login" className="btn btn-outline">
                            Login
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;