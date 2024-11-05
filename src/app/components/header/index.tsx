"use client";

import Link from "next/link";

import Submenu from "./components/submenu";
import Search from "./components/search";

export default function Header() {
    return (
        <>
            <header className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex gap-4 items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold">Ecommerce</Link>
                        </div>

                        <div className="flex items-center space-x-4 ml-auto w-full">
                            
                            <Search />
                            
                        </div>
                    </div>
                </div>
            </header>

            <Submenu />
        </>
    );
}
