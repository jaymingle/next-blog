import React from 'react';

const CreateCategoryForm = () => {
    return (
        <div>
            <form className="form" style={{ maxWidth: "600px" }}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name" className="form-input" placeholder="Category name" />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" className="form-input" placeholder="category-slug" />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea id="description" className="form-input" rows={4} placeholder="Category description"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="parent" className="form-label">
                        Parent Category (Optional)
                    </label>
                    <select id="parent" className="form-input">
                        <option value="">None</option>
                        <option value="technology">Technology</option>
                        <option value="design">Design</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Category
                </button>
            </form>
        </div>
    );
};

export default CreateCategoryForm;