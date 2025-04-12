export default function Contact() {
    return (
        <main>
            <section className="hero" style={{ backgroundColor: "var(--muted)" }}>
                <div className="container">
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-subtitle">Have questions or feedback? We'd love to hear from you.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: "start" }}>
                        <div>
                            <h2>Get in Touch</h2>
                            <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>

                            <div style={{ marginTop: "2rem" }}>
                                <h3>Contact Information</h3>
                                <p>
                                    <strong>Email:</strong> hello@modernblog.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> +1 (555) 123-4567
                                </p>
                                <p>
                                    <strong>Address:</strong> 123 Blog Street, San Francisco, CA 94107
                                </p>
                            </div>

                            <div style={{ marginTop: "2rem" }}>
                                <h3>Office Hours</h3>
                                <p>
                                    <strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM
                                </p>
                                <p>
                                    <strong>Saturday-Sunday:</strong> Closed
                                </p>
                            </div>
                        </div>

                        <div>
                            <form className="form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input type="text" id="name" className="form-input" placeholder="Your name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" id="email" className="form-input" placeholder="Your email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">
                                        Subject
                                    </label>
                                    <input type="text" id="subject" className="form-input" placeholder="Subject" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea id="message" className="form-input form-textarea" placeholder="Your message"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: "var(--muted)" }}>
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <h3>How do I create an account?</h3>
                            <p>
                                You can create an account by clicking on the "Sign Up" button in the top right corner of the page and
                                following the instructions.
                            </p>
                        </div>

                        <div style={{ marginBottom: "2rem" }}>
                            <h3>Is it free to publish articles?</h3>
                            <p>
                                Yes, publishing articles on ModernBlog is completely free. We believe in providing a platform for
                                everyone to share their ideas.
                            </p>
                        </div>

                        <div style={{ marginBottom: "2rem" }}>
                            <h3>How do I submit an article?</h3>
                            <p>
                                After creating an account, you can submit an article by going to your dashboard and clicking on the
                                "Create Post" button.
                            </p>
                        </div>

                        <div>
                            <h3>Can I monetize my content?</h3>
                            <p>
                                We're currently working on monetization features that will allow writers to earn from their content.
                                Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
