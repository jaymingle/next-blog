import Link from "next/link"
import {supabase} from "@/utils/supabase";

export const dynamic = 'force-dynamic'; // Disable caching for this route

export default async function Categories() {

    const { data: categories } = await supabase.from('categories').select('*');

    const formatTimeSettings = timestamp => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }

    return (
        <div>
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
                    <th>Created</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((category, id) => (
                    <tr key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>{category.description}</td>
                        <td>{formatTimeSettings(category.created_at)}</td>
                        <td>
                            <div className="actions">
                                <Link href={`/dashboard/categories/edit/${id + 1}`} className="icon-btn edit-icon">
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
