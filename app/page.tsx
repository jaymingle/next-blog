import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
      <main>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Welcome to ModernBlog</h1>
            <p className="hero-subtitle">A modern platform for sharing ideas, stories, and knowledge with the world.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <Link href="/blog" className="btn btn-primary">
                Explore Articles
              </Link>
              <Link href="/signup" className="btn btn-outline">
                Join Now
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Articles</h2>
            <div className="grid grid-3">
              {[1, 2, 3].map((i) => (
                  <Link href={`/blog/article-${i}`} key={i} className="card">
                    <Image
                        src={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                        alt={`Article ${i}`}
                        width={400}
                        height={200}
                        className="card-image"
                    />
                    <div className="card-content">
                      <h3 className="card-title">How to Master Web Development in 2023</h3>
                      <div className="card-meta">
                        <span>April 11, 2023</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                      <p>
                        Learn the essential skills and tools needed to become a proficient web developer in today's
                        fast-paced tech industry.
                      </p>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: "var(--muted)" }}>
          <div className="container">
            <h2 className="section-title">Why Choose ModernBlog</h2>
            <div className="grid grid-3">
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--primary)" }}>✨</div>
                <h3>Beautiful Design</h3>
                <p>Our platform is designed with modern aesthetics and user experience in mind.</p>
              </div>
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--primary)" }}>🚀</div>
                <h3>Lightning Fast</h3>
                <p>Built with Next.js for optimal performance and lightning-fast page loads.</p>
              </div>
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--primary)" }}>📱</div>
                <h3>Fully Responsive</h3>
                <p>Enjoy a seamless experience across all devices, from desktop to mobile.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="grid grid-4">
              {[1, 2, 3, 4].map((i) => (
                  <Link href={`/blog/latest-${i}`} key={i} className="card">
                    <Image
                        src={`/placeholder.svg?height=200&width=300&text=Latest+${i}`}
                        alt={`Latest ${i}`}
                        width={300}
                        height={200}
                        className="card-image"
                    />
                    <div className="card-content">
                      <h3 className="card-title">The Future of AI in Content Creation</h3>
                      <div className="card-meta">
                        <span>April 8, 2023</span>
                        <span>•</span>
                        <span>3 min read</span>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
  )
}
