import EditPostForm from "@/components/EditPostForm";

export default function EditPost({ params }: { params: { id: string } }) {
    return (
        <div>
            <div className="dashboard-header">
                <h1>Edit Post</h1>
            </div>

            <EditPostForm/>
        </div>
    )
}
