import Link from "next/link"
import Image from "next/image"

export default function Blog() {
    return (
        <main>
            <section className="hero" style={{ backgroundColor: "var(--muted)" }}>
                <div className="container">
                    <h1 className="hero-title">Blog</h1>
                    <p className="hero-subtitle">
                        Explore our collection of articles on web development, design, and technology.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                        <div>
                            <h2>All Articles</h2>
                        </div>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <select className="form-input" style={{ width: "auto" }}>
                                <option>Most Recent</option>
                                <option>Most Popular</option>
                                <option>Oldest First</option>
                            </select>
                            <input type="text" className="form-input" placeholder="Search articles..." style={{ width: "auto" }} />
                        </div>
                    </div>

                    <div className="grid grid-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Link href={`/blog/article-${i}`} key={i} className="card">
                                <Image
                                    src={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                                    alt={`Article ${i}`}
                                    width={400}
                                    height={200}
                                    className="card-image"
                                />
                                <div className="card-content">
                                    <h3 className="card-title">The Complete Guide to Modern Web Development</h3>
                                    <div className="card-meta">
                                        <span>April 11, 2023</span>
                                        <span>•</span>
                                        <span>8 min read</span>
                                    </div>
                                    <p>
                                        Discover the latest tools, frameworks, and best practices for building modern web applications in
                                        2023.
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <a href="#" className="btn btn-outline">
                                Previous
                            </a>
                            <a href="#" className="btn btn-primary">
                                1
                            </a>
                            <a href="#" className="btn btn-outline">
                                2
                            </a>
                            <a href="#" className="btn btn-outline">
                                3
                            </a>
                            <a href="#" className="btn btn-outline">
                                Next
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
