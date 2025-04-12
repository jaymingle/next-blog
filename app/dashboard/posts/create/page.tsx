import React from 'react';
import CreatePostForm from "@/components/CreatePostForm";

export default function CreatePost() {
    return (
        <div>
            <div className="dashboard-header">
                <h1>Create New Post</h1>
            </div>

            <CreatePostForm/>
        </div>
    )
}
