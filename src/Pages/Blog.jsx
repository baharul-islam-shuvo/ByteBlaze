import { useState } from 'react';
import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from '../utilities';

const Blog = () => {
    const handleBookmark = blog =>{
        saveBlog(blog);
    }
    const [tabIndex, setTabIndex] = useState(0);
    const navigation = useNavigation();
    const blog = useLoaderData();
    if (navigation.state === 'loading') return <Loader></Loader>
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 bg-transparent text-black dark:bg-transparent dark:text-gray-100">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{blog.title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600 dark:text-gray-600">
                        <p className="text-sm">{blog.reading_time_minutes} mins read • {new Date(blog.published_at).toLocaleDateString()}</p>

                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{blog.comments_count} comments • {blog.public_reactions_count} views</p>
                    </div>

                    {/* TABS */}

                    <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-white dark:bg-white text-white dark:text-white">
                        <Link to=''
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? `border border-b-0` : 'border-b'} rounded-t-lg border-gray-200 dark:border-gray-200 text-black dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to={`author`}
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? `border border-b-0` : 'border-b'} rounded-t-lg border-gray-200 dark:border-gray-200 text-black dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        {/* bookmark */}
                        <div onClick={() => handleBookmark(blog)} className='bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden'>
                            <MdBookmarkAdd size={20} className='text-secondary'></MdBookmarkAdd>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </article>
        </div>
    );
};

export default Blog;