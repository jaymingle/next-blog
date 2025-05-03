"use client"

import React, {useState, useEffect} from 'react';
import {supabase} from "@/utils/supabase";

const CreatePostForm = () => {

    const [categories, setCategories] = useState([]);

    const [postData, setPostData] = useState({
        title: '',
        slug: '',
        category: '',
        imageURL: '',
        excerpt: '',
        content: '',
        tags: '',
        status: 'Draft'
    })

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const {data: categories, error} = await supabase.from('categories').select('*');
                if(error){
                    throw error;
                }
                setCategories(categories || [])
            }catch(e){
                console.error('Error fetching data: ', e)
            }
        }

        fetchCategories();
    }, [])

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            // Convert tags string to array
            const tagsArray = postData.tags ? postData.tags.split(',').map(tag => tag.trim()) : [];

            // Format data for database
            const dbData = {
                title: postData.title,
                slug: postData.slug,
                category_id: postData.category,
                image_url: postData.imageURL,
                excerpt: postData.excerpt,
                content: postData.content,
                tags: tagsArray,
                status: postData.status
            };

            const {data, error} = await supabase.from('posts').insert(dbData);

            if(error){
                throw error;
            }else{
                setPostData({
                    title: '',
                    slug: '',
                    category: '',
                    imageURL: '',
                    excerpt: '',
                    content: '',
                    tags: '',
                    status: 'Draft'
                })
                alert('Post created successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating post');
        }
    }

    const changeHandler = (e) => {
        const {id, value} = e.target;
        setPostData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    return (
        <div>
            <form className="form" style={{ maxWidth: "100%" }} onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        placeholder="Post title"
                        onChange={changeHandler}
                        value={postData.title}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="slug" className="form-label">
                        Slug
                    </label>
                    <input
                        type="text"
                        id="slug"
                        className="form-input"
                        placeholder="post-slug"
                        onChange={changeHandler}
                        value={postData.slug}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        id="category"
                        className="form-input"
                        onChange={changeHandler}
                        value={postData.category}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="imageURL" className="form-label">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageURL"
                        onChange={changeHandler}
                        value={postData.imageURL}
                        className="form-input"
                        placeholder="Enter Image URL"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="excerpt" className="form-label">
                        Excerpt
                    </label>
                    <textarea
                        id="excerpt"
                        onChange={changeHandler}
                        value={postData.excerpt}
                        className="form-input"
                        rows={3}
                        placeholder="Brief description of the post"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="form-input form-textarea"
                        placeholder="Write your post content here..."
                        onChange={changeHandler}
                        value={postData.content}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tags" className="form-label">
                        Tags
                    </label>
                    <input
                        type="text"
                        onChange={changeHandler}
                        value={postData.tags}
                        id="tags"
                        className="form-input"
                        placeholder="Enter tags separated by commas"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status" className="form-label">
                        Status
                    </label>
                    <select
                        id="status"
                        onChange={changeHandler}
                        value={postData.status}
                        className="form-input"
                    >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                    </select>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button type="submit" className="btn btn-primary">
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostForm;