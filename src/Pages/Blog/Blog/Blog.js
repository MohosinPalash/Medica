import React, { useEffect, useState } from 'react';
import blogs from '../../../AllData/blogs.json'
import SingleBlog from '../../Shared/SingleBlog/SingleBlog';
const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        setBlog(blogs);
        console.log(blogs);
    }, [blog]);

    return (
        <div>
            <h1 className="heading">NEWS & EVENTS</h1>
            <div className="blog-container">
                {
                    blog.map(blog => <SingleBlog blog={blog}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;