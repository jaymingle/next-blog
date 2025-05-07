import Link from "next/link"
import {supabase} from "@/utils/supabase";

export default async function Page() {

    const {data : posts} = await supabase.from('posts').select('*');

    const formatTimeSettings = timestamp => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }


    return (
        <div>
            <div className="dashboard-header">
                <h1>All Posts</h1>
                <div>
                    <Link href="/dashboard/posts/create" className="btn btn-primary">
                        Create New Post
                    </Link>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <select className="form-input" style={{ width: "auto" }}>
                        <option>All Categories</option>
                        <option>Web Development</option>
                        <option>Design</option>
                        <option>Technology</option>
                    </select>
                    <select className="form-input" style={{ width: "auto" }}>
                        <option>All Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="form-input" placeholder="Search posts..." />
                </div>
            </div>

            {/*<h1>Display Posts</h1>*/}
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>
                <span
                    style={{
                        padding: "0.25rem 0.5rem",
                        borderRadius: "var(--radius)",
                        backgroundColor: post.status === "Draft" ? "#f59e0b" : "var(--secondary)",
                        color: "white",
                        fontSize: "0.75rem",
                    }}
                >
                  {post.status}
                </span>
                        </td>
                        <td>{formatTimeSettings(post.created_at)}</td>
                        <td>{Math.floor(Math.random() * 1000) + 100}</td>
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

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
                <div>Showing 1-10 of 24 posts</div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button className="btn btn-outline">Previous</button>
                    <button className="btn btn-primary">1</button>
                    <button className="btn btn-outline">2</button>
                    <button className="btn btn-outline">3</button>
                    <button className="btn btn-outline">Next</button>
                </div>
            </div>
        </div>
    )
}

