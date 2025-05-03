'use client'

import React, {useEffect, useState} from 'react';
import {supabase} from "@/utils/supabase";

const EditCategoryForm = ({categoryID}:{categoryID:string}) => {

    const [categoryData, setCategoryData] = useState({
        name: '',
        slug: '',
        description: ''
    })

    useEffect(() => {

        const fetchCategoryData = async () => {
            const {data, error} = await supabase.from('categories').select('*').eq('id', categoryID).single();

            if(error){
                throw error;
            }

            if(data){
                setCategoryData({
                    name: data.name,
                    slug: data.slug,
                    description: data.description
                })
            }
        }

        if(categoryID){
            fetchCategoryData();
        }


    }, [categoryID])

    const handleChange = (e) => {
        const {id, value} = e.target;
        setCategoryData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const {data, error} = await supabase.from('categories').update(categoryData).eq('id', categoryID);

        if(error){
            throw error;
        }

        alert('Category Updated Succesfully!')
    }

    return (
        <div>
            <form className="form" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name" value={categoryData.name} onChange={handleChange} className="form-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input type="text" id="slug" value={categoryData.slug} onChange={handleChange} className="form-input"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="form-input"
                        rows={4}
                        value={categoryData.description}
                        onChange={handleChange}
                    ></textarea>
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