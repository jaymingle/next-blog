import React from 'react';

const EditCategoryForm = () => {
    return (
        <div>
            <form className="form" style={{ maxWidth: "600px" }}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name" className="form-input" defaultValue="Web Development" />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" className="form-input" defaultValue="web-development" />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="form-input"
                        rows={4}
                        defaultValue="Articles about web development technologies and practices"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="parent" className="form-label">
                        Parent Category (Optional)
                    </label>
                    <select id="parent" className="form-input" defaultValue="">
                        <option value="">None</option>
                        <option value="technology">Technology</option>
                        <option value="design">Design</option>
                    </select>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button type="submit" className="btn btn-primary">
                        Update Category
                    </button>
                    <button type="button" className="btn btn-outline">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditCategoryForm;