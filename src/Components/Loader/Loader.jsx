import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]"><ScaleLoader size={100} color="pink"></ScaleLoader></div>
    );
};

export default Loader;