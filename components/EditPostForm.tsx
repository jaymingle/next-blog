'use client'
import React, {useState, useEffect} from 'react';
import {supabase} from "@/utils/supabase";

const EditPostForm = ({postID}) => {
    const [postData, setPostData] = useState({
        title: '',
        slug: '',
        category: '',
        imageURL: '',
        excerpt: '',
        content: '',
        tags: '',
        status: 'draft' // Set a default value to prevent uncontrolled to controlled warning
    });

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const {data, error} = await supabase.from('posts').select('*').eq('id', postID).single();

                if(error) {
                    console.error("Error fetching post:", error);
                    setError("Failed to load post data");
                    return;
                }

                if(data) {
                    setPostData({
                        title: data.title || '',
                        slug: data.slug || '',
                        category: data.category_id || '',
                        imageURL: data.image_url || '',
                        excerpt: data.excerpt || '',
                        content: data.content || '',
                        tags: Array.isArray(data.tags) ? data.tags.join(', ') : data.tags || '',
                        status: data.status || 'draft'
                    });
                }
            } catch (error) {
                console.error("Error in fetchPostData:", error);
                setError("An error occurred while fetching post data");
            }
        };

        const fetchCategories = async () => {
            try {
                const {data, error} = await supabase.from('categories').select('*');

                if(error) {
                    console.error("Error fetching categories:", error);
                    setError("Failed to load categories");
                    return;
                }

                if(data) {
                    setCategories(data);
                }
            } catch (error) {
                console.error("Error in fetchCategories:", error);
                setError("An error occurred while fetching categories");
            } finally {
                setLoading(false);
            }
        };

        setLoading(true);
        setError(null);

        // Always fetch categories
        fetchCategories();

        if(postID) {
            fetchPostData();
        } else {
            setLoading(false);
        }
    }, [postID]);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setPostData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccess(false);

        try {
            // Prepare the data for submission
            const postToUpdate = {
                title: postData.title,
                slug: postData.slug,
                category_id: postData.category,
                image_url: postData.imageURL,
                excerpt: postData.excerpt,
                content: postData.content,
                tags: postData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
                status: postData.status,
                updated_at: new Date()
            };

            // Submit to Supabase
            const {data, error} = await supabase
                .from('posts')
                .update(postToUpdate)
                .eq('id', postID);

            if (error) {
                throw error;
            }

            setSuccess(true);
            console.log("Post updated successfully:", data);
        } catch (error) {
            console.error("Error updating post:", error);
            setError("Failed to update post: " + error.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit Post {postID}</h1>
            {error && (
                <div style={{ padding: "10px", backgroundColor: "#ffeeee", color: "#cc0000", marginBottom: "15px", borderRadius: "4px" }}>
                    {error}
                </div>
            )}
            {success && (
                <div style={{ padding: "10px", backgroundColor: "#eeffee", color: "#00cc00", marginBottom: "15px", borderRadius: "4px" }}>
                    Post updated successfully!
                </div>
            )}
            <form className="form" style={{ maxWidth: "100%" }} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        value={postData.title}
                        onChange={handleChange}
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
                        value={postData.slug}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        id="category"
                        value={postData.category}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="">Select a category</option>
                        {categories && categories.length > 0 && categories.map((category) => (
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
                        className="form-input"
                        value={postData.imageURL || ''}
                        onChange={handleChange}
                        placeholder="Enter Image URL"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="excerpt" className="form-label">
                        Excerpt
                    </label>
                    <textarea
                        id="excerpt"
                        className="form-input"
                        rows={3}
                        value={postData.excerpt || ''}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        id="content"
                        className="form-input form-textarea"
                        value={postData.content || ''}
                        onChange={handleChange}
                        rows={10}
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
                        value={postData.tags || ''}
                        onChange={handleChange}
                        placeholder="Separate tags with commas"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status" className="form-label">
                        Status
                    </label>
                    <select
                        id="status"
                        className="form-input"
                        value={postData.status || 'draft'}
                        onChange={handleChange}
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}
                    >
                        {submitting ? "Updating..." : "Update Post"}
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPostForm;