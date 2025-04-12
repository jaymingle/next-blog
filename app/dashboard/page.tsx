import Link from "next/link"

export default function Dashboard() {
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
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>24</p>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
                    <h3>Total Categories</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>8</p>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
                    <h3>Total Views</h3>
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>12.5K</p>
                </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <h2>Recent Posts</h2>
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
                    {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i}>
                            <td>The Complete Guide to Modern Web Development</td>
                            <td>Web Development</td>
                            <td>April 11, 2023</td>
                            <td>
                  <span
                      style={{
                          padding: "0.25rem 0.5rem",
                          borderRadius: "var(--radius)",
                          backgroundColor: "var(--secondary)",
                          color: "white",
                          fontSize: "0.75rem",
                      }}
                  >
                    Published
                  </span>
                            </td>
                            <td>
                                <div className="actions">
                                    <Link href={`/dashboard/posts/edit/${i}`} className="icon-btn edit-icon">
                                        ✏️
                                    </Link>
                                    <button className="icon-btn delete-icon">🗑️</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Recent Categories</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Posts</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[1, 2, 3].map((i) => (
                        <tr key={i}>
                            <td>Web Development</td>
                            <td>12</td>
                            <td>April 5, 2023</td>
                            <td>
                                <div className="actions">
                                    <Link href={`/dashboard/categories/edit/${i}`} className="icon-btn edit-icon">
                                        ✏️
                                    </Link>
                                    <button className="icon-btn delete-icon">🗑️</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
