import Link from "next/link"
import {supabase} from "@/utils/supabase";

export const dynamic = 'force-dynamic'; // Disable caching for this route

export default async function Categories() {

    const { data: categories } = await supabase.from('categories').select('*');

    return (
        <div>
            <div>
                <h1>FromDB Categories</h1>
                <ul>
                    {categories?.map(category =>
                        <li key={category.id}>{category.name}</li>)}
                </ul>

            </div>
            <div className="dashboard-header">
                <h1>All Categories</h1>
                <div>
                    <Link href="/dashboard/categories/create" className="btn btn-primary">
                        Create New Category
                    </Link>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                    <select className="form-input" style={{ width: "auto" }}>
                        <option>Sort by Name</option>
                        <option>Sort by Date</option>
                        <option>Sort by Posts</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="form-input" placeholder="Search categories..." />
                </div>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Description</th>
                    <th>Posts</th>
                    <th>Created</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {[
                    {
                        name: "Web Development",
                        slug: "web-development",
                        desc: "Articles about web development technologies and practices",
                        posts: 12,
                    },
                    { name: "Design", slug: "design", desc: "UI/UX design principles and trends", posts: 8 },
                    { name: "Technology", slug: "technology", desc: "Latest technology news and updates", posts: 15 },
                    { name: "Programming", slug: "programming", desc: "Programming languages and techniques", posts: 10 },
                    { name: "Career", slug: "career", desc: "Career advice for developers and designers", posts: 6 },
                    { name: "Tools", slug: "tools", desc: "Software tools and resources", posts: 9 },
                ].map((category, i) => (
                    <tr key={i}>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>{category.desc}</td>
                        <td>{category.posts}</td>
                        <td>April {i + 1}, 2023</td>
                        <td>
                            <div className="actions">
                                <Link href={`/dashboard/categories/edit/${i + 1}`} className="icon-btn edit-icon">
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
                <div>Showing all 6 categories</div>
            </div>
        </div>
    )
}
