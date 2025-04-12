import Image from "next/image"
import Link from "next/link"

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <main>
            <article className="container" style={{ maxWidth: "800px", padding: "4rem 1rem" }}>
                <div style={{ marginBottom: "2rem" }}>
                    <Link
                        href="/blog"
                        className="btn btn-outline"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                    >
                        ← Back to Blog
                    </Link>
                </div>

                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>The Complete Guide to Modern Web Development</h1>

                <div className="card-meta" style={{ marginBottom: "2rem" }}>
                    <span>Published on April 11, 2023</span>
                    <span>•</span>
                    <span>8 min read</span>
                    <span>•</span>
                    <span>Web Development</span>
                </div>

                <Image
                    src={`/placeholder.svg?height=400&width=800&text=Featured+Image`}
                    alt="Featured Image"
                    width={800}
                    height={400}
                    style={{ borderRadius: "var(--radius)", marginBottom: "2rem", width: "100%", height: "auto" }}
                />

                <div className="blog-content" style={{ lineHeight: "1.8" }}>
                    <p>
                        The landscape of web development is constantly evolving, with new tools, frameworks, and best practices
                        emerging regularly. Staying up-to-date with these changes is crucial for developers who want to build
                        modern, efficient, and user-friendly web applications.
                    </p>

                    <h2>The Foundation: HTML, CSS, and JavaScript</h2>
                    <p>
                        Despite all the advancements in web development, the core technologies remain the same: HTML for structure,
                        CSS for styling, and JavaScript for interactivity. However, how we use these technologies has evolved
                        significantly.
                    </p>
                    <p>
                        Modern HTML5 provides semantic elements like &lt;header&gt;, &lt;footer&gt;, and &lt;article&gt; that make
                        our code more readable and accessible. CSS has evolved with features like Flexbox and Grid, making complex
                        layouts easier to implement. And JavaScript has transformed from a simple scripting language to a powerful
                        programming language capable of building complex applications.
                    </p>

                    <h2>Modern Frontend Frameworks</h2>
                    <p>
                        Frontend frameworks like React, Vue, and Angular have revolutionized how we build web applications. These
                        frameworks provide a structured way to build complex UIs, manage state, and handle user interactions.
                    </p>
                    <p>
                        React, developed by Facebook, has become particularly popular due to its component-based architecture and
                        virtual DOM, which optimizes rendering performance. Next.js, built on top of React, adds features like
                        server-side rendering, static site generation, and API routes, making it a powerful framework for building
                        full-stack applications.
                    </p>

                    <h2>CSS Approaches</h2>
                    <p>
                        Modern CSS approaches like CSS Modules, CSS-in-JS, and utility-first frameworks like Tailwind CSS have
                        changed how we style our applications. These approaches help manage CSS at scale, prevent class name
                        collisions, and improve maintainability.
                    </p>

                    <h2>Backend Development</h2>
                    <p>
                        On the backend, Node.js has enabled JavaScript to run on the server, allowing developers to use the same
                        language throughout their stack. Express.js, a minimal and flexible Node.js framework, is commonly used to
                        build APIs and web applications.
                    </p>
                    <p>
                        For database interactions, ORMs (Object-Relational Mappers) like Prisma and TypeORM provide a type-safe way
                        to interact with databases, reducing the risk of runtime errors.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                        Modern web development is a vast and exciting field with endless possibilities. By understanding the core
                        technologies and keeping up with modern tools and frameworks, developers can build powerful, efficient, and
                        user-friendly web applications.
                    </p>
                    <p>
                        Remember, the best technology stack depends on your specific requirements and constraints. Always choose the
                        tools that best fit your project's needs, rather than following trends blindly.
                    </p>
                </div>

                <div
                    style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}
                >
                    <h3>About the Author</h3>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <Image
                            src="/placeholder.svg?height=80&width=80&text=Author"
                            alt="Author"
                            width={80}
                            height={80}
                            style={{ borderRadius: "50%" }}
                        />
                        <div>
                            <h4 style={{ margin: "0 0 0.5rem 0" }}>Jane Doe</h4>
                            <p style={{ margin: 0 }}>
                                Jane is a senior web developer with over 10 years of experience in building modern web applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "3rem" }}>
                    <h3>Related Articles</h3>
                    <div className="grid grid-3">
                        {[1, 2, 3].map((i) => (
                            <Link href={`/blog/related-${i}`} key={i} className="card">
                                <Image
                                    src={`/placeholder.svg?height=150&width=300&text=Related+${i}`}
                                    alt={`Related Article ${i}`}
                                    width={300}
                                    height={150}
                                    className="card-image"
                                />
                                <div className="card-content">
                                    <h3 className="card-title">Getting Started with React Hooks</h3>
                                    <div className="card-meta">
                                        <span>April 5, 2023</span>
                                        <span>•</span>
                                        <span>5 min read</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    )
}
