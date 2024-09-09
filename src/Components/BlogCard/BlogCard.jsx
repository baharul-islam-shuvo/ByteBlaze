import { Link } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import PropTypes from 'prop-types';
import { MdDeleteSweep } from "react-icons/md";
const BlogCard = ({ blog, deletable,handleDelete }) => {
    const { cover_image, title, description, created_at, id } = blog;
    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="rounded max-w-sm mx-auto h-full group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline bg-gray-100 dark:bg-gray-50 hidden sm:block">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="text-gray-900 p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(created_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && <div onClick={() => handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-2 -right-2 text-secondary group-hover:text-primary"><MdDeleteSweep size={20} className="text-secondary group-hover:text-primary"></MdDeleteSweep></div>}
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default BlogCard;