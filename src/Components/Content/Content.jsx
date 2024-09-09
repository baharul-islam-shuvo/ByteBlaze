import { useLoaderData } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, tags, body_html } = blog;
    return (
        <div className="mx-auto h-full group rounded p-2 border border-opacity-30 bg-white dark:bg-gray-50 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                    {tags.map(tag => (
                        <a key={tag} className="px-3 py-1 rounded-sm hover:underline bg-default-400 dark:bg-default-600 text-gray-900 dark:text-gray-50">#{tag}</a>
                    ))}

                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;