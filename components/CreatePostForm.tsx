import React from 'react';

const CreatePostForm = () => {
    return (
        <div>
            <form className="form" style={{ maxWidth: "100%" }}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input type="text" id="title" className="form-input" placeholder="Post title" />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" className="form-input" placeholder="post-slug" />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select id="category" className="form-input">
                        <option value="">Select a category</option>
                        <option value="web-development">Web Development</option>
                        <option value="design">Design</option>
                        <option value="technology">Technology</option>
                        <option value="programming">Programming</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="featured-image" className="form-label">
                        Featured Image
                    </label>
                    <input type="file" id="featured-image" className="form-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="excerpt" className="form-label">
                        Excerpt
                    </label>
                    <textarea id="excerpt" className="form-input" rows={3} placeholder="Brief description of the post"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="form-input form-textarea"
                        placeholder="Write your post content here..."
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tags" className="form-label">
                        Tags
                    </label>
                    <input type="text" id="tags" className="form-input" placeholder="Enter tags separated by commas" />
                </div>

                <div className="form-group">
                    <label htmlFor="status" className="form-label">
                        Status
                    </label>
                    <select id="status" className="form-input">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button type="submit" className="btn btn-primary">
                        Create Post
                    </button>
                    <button type="button" className="btn btn-outline">
                        Save as Draft
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostForm;