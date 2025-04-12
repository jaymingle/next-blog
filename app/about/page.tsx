import Image from "next/image"

export default function About() {
    return (
        <main>
            <section className="hero" style={{ backgroundColor: "var(--muted)" }}>
                <div className="container">
                    <h1 className="hero-title">About Us</h1>
                    <p className="hero-subtitle">Learn more about our mission, values, and the team behind ModernBlog.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: "center" }}>
                        <div>
                            <h2>Our Story</h2>
                            <p>
                                ModernBlog was founded in 2023 with a simple mission: to create a platform where writers and readers
                                could connect through meaningful content.
                            </p>
                            <p>
                                What started as a small project has grown into a vibrant community of writers, thinkers, and readers
                                from around the world. We believe in the power of words to inspire, educate, and transform.
                            </p>
                            <p>
                                Our platform is built on the principles of accessibility, quality, and community. We strive to make
                                publishing and consuming content as seamless and enjoyable as possible.
                            </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Image
                                src="/placeholder.svg?height=400&width=500&text=Our+Story"
                                alt="Our Story"
                                width={500}
                                height={400}
                                style={{ borderRadius: "var(--radius)", maxWidth: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: "var(--muted)" }}>
                <div className="container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="grid grid-3">
                        <div style={{ padding: "2rem", backgroundColor: "var(--background)", borderRadius: "var(--radius)" }}>
                            <h3>Quality</h3>
                            <p>
                                We believe in quality over quantity. Every piece of content on our platform is carefully crafted and
                                curated to provide value to our readers.
                            </p>
                        </div>
                        <div style={{ padding: "2rem", backgroundColor: "var(--background)", borderRadius: "var(--radius)" }}>
                            <h3>Accessibility</h3>
                            <p>
                                We are committed to making our platform accessible to everyone, regardless of their background,
                                abilities, or technical expertise.
                            </p>
                        </div>
                        <div style={{ padding: "2rem", backgroundColor: "var(--background)", borderRadius: "var(--radius)" }}>
                            <h3>Community</h3>
                            <p>
                                We foster a sense of community among our users, encouraging collaboration, feedback, and meaningful
                                interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="grid grid-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <Image
                                    src={`/placeholder.svg?height=200&width=200&text=Team+Member+${i}`}
                                    alt={`Team Member ${i}`}
                                    width={200}
                                    height={200}
                                    style={{ borderRadius: "50%", marginBottom: "1rem" }}
                                />
                                <h3>Jane Doe</h3>
                                <p style={{ color: "var(--muted-foreground)" }}>Co-Founder & CEO</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
