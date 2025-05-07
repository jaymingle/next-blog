import EditPostForm from "@/components/EditPostForm";

export default function EditPost({ params }: { params: { slug: string } }) {
    return (
        <div>
            <div className="dashboard-header">
                <h1>Edit Post Ghana</h1>
            </div>

            <EditPostForm postID={params.slug}/>
        </div>
    )
}
