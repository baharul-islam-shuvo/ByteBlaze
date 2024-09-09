import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utilities";
import BlogCard from "../Components/BlogCard/BlogCard";
import EmptyState from "../Components/EmptyState/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }, []);
    const handleDelete = (id) => {
        deleteBlog(id)
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }

    if (blogs.length < 1) {
        return (
          <EmptyState
            message='No Bookmarks Found'
            address='/blogs'
            label='Browse Blogs'
          />
        )}
    return (
        <div className="grid px-4 sm:px-8 lg:12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;



// const { blogs, setBlogs } = useState([]);
    
//     useEffect(() => {
//         const storedBlogs = getBlogs()
//         setBlogs(storedBlogs)
//     }, []);