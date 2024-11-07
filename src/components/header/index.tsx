import Link from "next/link";
import Submenu from "./components/submenu";
import {  FaSearch } from "react-icons/fa";

import { Atendimento } from "./components/menuLinks";
import Carrinho from "./components/carrinho";
import MenuMobile from "./components/menuMobile";

export default function Header() {

    return (
        <header className="fixed w-full z-50">
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex gap-4 items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold">Ecommerce</Link>
                        </div>

                        <div className="flex items-center space-x-4 ml-auto w-full">
                            <div className="w-full flex gap-0 md:gap-4 justify-end">
                                <div className="relative justify-center items-center w-full hidden md:flex">
                                    <input
                                        type="text"
                                        placeholder="Procurar..."
                                        className="px-4 py-2 h-10 w-full bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="absolute right-0 top-0 px-3 py-2 text-gray-300 hover:text-white">
                                        <FaSearch className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-2 4">
                                    <Atendimento />
                                    <Carrinho />
                                </div>

                                <MenuMobile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Submenu />
        </header>
    );
}
