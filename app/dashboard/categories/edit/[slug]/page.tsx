import EditCategoryForm from "@/components/EditCategoryForm";

export default function EditCategory({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h3>Params ID: {params.slug}</h3>

            <div className="dashboard-header">
                <h1>Edit Category</h1>
            </div>

        <EditCategoryForm categoryID={params.slug}/>
        </div>
    )
}
