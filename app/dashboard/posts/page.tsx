import Link from "next/link"
import {supabase} from "@/utils/supabase";

export default function Page() {

    const {data : posts} = supabase.from('posts').select('*');

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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={i}>
                        <td>The Complete Guide to Modern Web Development</td>
                        <td>Web Development</td>
                        <td>
                <span
                    style={{
                        padding: "0.25rem 0.5rem",
                        borderRadius: "var(--radius)",
                        backgroundColor: i % 3 === 0 ? "#f59e0b" : "var(--secondary)",
                        color: "white",
                        fontSize: "0.75rem",
                    }}
                >
                  {i % 3 === 0 ? "Draft" : "Published"}
                </span>
                        </td>
                        <td>April {i + 1}, 2023</td>
                        <td>{Math.floor(Math.random() * 1000) + 100}</td>
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

