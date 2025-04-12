import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>ModernBlog</h3>
                            <p>A modern blog platform for sharing ideas and stories.</p>
                        </div>
                        <div className="footer-column">
                            <h3>Links</h3>
                            <div className="footer-links">
                                <Link href="/">Home</Link>
                                <Link href="/blog">Blog</Link>
                                <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="footer-column">
                            <h3>Legal</h3>
                            <div className="footer-links">
                                <Link href="#">Privacy Policy</Link>
                                <Link href="#">Terms of Service</Link>
                                <Link href="#">Cookie Policy</Link>
                            </div>
                        </div>
                        <div className="footer-column">
                            <h3>Follow Us</h3>
                            <div className="footer-links">
                                <Link href="#">Twitter</Link>
                                <Link href="#">Facebook</Link>
                                <Link href="#">Instagram</Link>
                                <Link href="#">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} ModernBlog. All rights reserved.</p>
                    </div>
                </div>
            </footer>
);
};
export default Footer;