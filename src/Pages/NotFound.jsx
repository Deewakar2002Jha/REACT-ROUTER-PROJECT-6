import { Link } from "react-router-dom";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/10 ring-1 ring-indigo-500/20">
                        <FileQuestion className="h-10 w-10 text-indigo-400" />
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-white">
                    404
                </h1>

                {/* Text */}
                <h2 className="mt-4 text-2xl font-bold text-white">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-slate-400">
                    Sorry, the page you are looking for doesn't exist or has been
                    moved to another location.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="mt-8 inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;