import React from 'react';
import '../styles.css';

const blogPosts = [
    { id: 1, title: 'First Blog Post', date: '2023-01-01', summary: 'Summary of the first blog post.' },
    { id: 2, title: 'Second Blog Post', date: '2023-02-01', summary: 'Summary of the second blog post.' },
    // Add more blog posts here
];

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <h2>Blog</h2>
            {blogPosts.map(post => (
                <div key={post.id} className="blog-item">
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                    <p>{post.summary}</p>
                </div>
            ))}
        </section>
    );
};

export default Blog;
