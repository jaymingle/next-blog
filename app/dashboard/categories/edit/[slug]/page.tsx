import EditCategoryForm from "@/components/EditCategoryForm";

export default function EditCategory({ params }: { params: { slug: string } }) {
    return (
        <div>

            <div className="dashboard-header">
                <h1>Edit Category</h1>
            </div>

        <EditCategoryForm categoryID={params.slug}/>
        </div>
    )
}
