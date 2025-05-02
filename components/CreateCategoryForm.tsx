'use client'
import React, {useState} from 'react';
import {supabase} from "@/utils/supabase";

const CreateCategoryForm = () => {

    const [categoryData, setCategoryData] = useState({
        name: '',
        slug: '',
        description: ''
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        setCategoryData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const {data, error} = await supabase.from('categories').insert(categoryData);

        if(error){
            throw error;
        }

        if (data){
            setCategoryData({
                name: '',
                slug: '',
                description: ''
            })
        }
    }

    return (
        <div>
            <form className="form" style={{ maxWidth: "600px" }} onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name" value={categoryData.name} onChange={handleChange} className="form-input" placeholder="Category name" />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" value={categoryData.slug} onChange={handleChange} className="form-input" placeholder="category-slug" />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea id="description" value={categoryData.description} onChange={handleChange} className="form-input" rows={4} placeholder="Category description"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Category
                </button>
            </form>
        </div>
    );
};

export default CreateCategoryForm;