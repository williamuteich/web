"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaShoppingCart, FaSearch, FaUserAlt } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <header className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold">EcommerceLogo</Link>
                        </div>

                        <div className="flex items-center space-x-4 ml-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="absolute right-0 top-0 px-3 py-2 text-gray-300 hover:text-white">
                                    <FaSearch className="h-6 w-6" />
                                </button>
                            </div>
                            
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaFacebook className="h-6 w-6" />
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaInstagram className="h-6 w-6" />
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaTwitter className="h-6 w-6" />
                            </Link>

                            <Link href="/login" className="text-gray-300 flex justify-center items-center gap-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <FaUserAlt className="h-6 w-6" />
                                <p>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-6 py-3">
                        <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Inicio
                        </Link>
                        <Link href="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Loja
                        </Link>
                        <Link href="/categories/electronics" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Eletrônicos
                        </Link>
                        <Link href="/categories/fashion" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Moda
                        </Link>
                        <Link href="/categories/home-garden" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Casa & Jardim
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Contato
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
