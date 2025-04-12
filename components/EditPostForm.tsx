import React from 'react';

const EditPostForm = () => {
    return (
        <div>
            <form className="form" style={{ maxWidth: "100%" }}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        defaultValue="The Complete Guide to Modern Web Development"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" className="form-input" defaultValue="complete-guide-modern-web-development" />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select id="category" className="form-input" defaultValue="web-development">
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
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <img
                            src="/placeholder.svg?height=100&width=200&text=Current+Image"
                            alt="Current Featured Image"
                            style={{ width: "200px", height: "100px", objectFit: "cover", borderRadius: "var(--radius)" }}
                        />
                        <input type="file" id="featured-image" className="form-input" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="excerpt" className="form-label">
                        Excerpt
                    </label>
                    <textarea
                        id="excerpt"
                        className="form-input"
                        rows={3}
                        defaultValue="Discover the latest tools, frameworks, and best practices for building modern web applications in 2023."
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="form-input form-textarea"
                        defaultValue="The landscape of web development is constantly evolving, with new tools, frameworks, and best practices emerging regularly. Staying up-to-date with these changes is crucial for developers who want to build modern, efficient, and user-friendly web applications."
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tags" className="form-label">
                        Tags
                    </label>
                    <input
                        type="text"
                        id="tags"
                        className="form-input"
                        defaultValue="web development, javascript, react, next.js"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status" className="form-label">
                        Status
                    </label>
                    <select id="status" className="form-input" defaultValue="published">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button type="submit" className="btn btn-primary">
                        Update Post
                    </button>
                    <button type="button" className="btn btn-outline">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPostForm;