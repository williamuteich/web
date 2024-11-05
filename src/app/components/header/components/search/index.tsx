import { FaFacebook, FaInstagram, FaTwitter, FaUserAlt, FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Search() {
    return(
        <div className="w-full flex gap-4 justify-end">
            <div className="relative w-full hidden md:flex">
                <input
                    type="text"
                    placeholder="Procurar..."
                    className="px-4 py-2 w-full bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-0 top-0 px-3 py-2 text-gray-300 hover:text-white">
                    <FaSearch className="h-6 w-6" />
                </button>
            </div>
            <div className="flex items-center ">
                <div className="gap-2 hidden md:flex">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaFacebook className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaInstagram className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaTwitter className="h-6 w-6" />
                    </Link>
                </div>
                <Link href="/login" className="text-gray-300 flex justify-center items-center gap-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <FaUserAlt className="h-6 w-6" />
                    <p>Login</p>
                </Link>
            </div>

            <div className="flex justify-center items-center">
                <FaBars className="h-6 w-6 text-gray-300 hover:text-white" />
            </div>
        </div>
    )
}