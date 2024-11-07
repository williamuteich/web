import Link from "next/link";
import Submenu from "./components/submenu";
import { FaFacebook, FaInstagram, FaTwitter, FaUserAlt, FaSearch, FaHeadset } from "react-icons/fa";
import { BiMenu } from 'react-icons/bi';

import { AiOutlineShoppingCart } from "react-icons/ai"; 
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuMotion } from "react-icons/cg";
import { Atendimento } from "./components/menuIcon";

// Menu de links
const linkMenu = [
    {name: "Inicio", link: "/"},
    {name: "Loja", link: "shop"},
    {name: "Eletrônicos", link: "/categories/electronics"},
    {name: "Moda", link: "/categories/fashion"},
    {name: "Casa & Jardim", link: "/categories/home-garden"},
    {name: "Contato", link: "contact"},
];

export default function Header() {
    
    const cartItems = 3;

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

                                    
                                    <Link href="/support" className="text-gray-300 hidden  hover:text-white md:flex items-center gap-2 ">
                                        <FaHeadset className="h-6 w-6" />
                                        <div className="flex flex-col gap-0">
                                            <p className="hidden md:block text-sm leading-4">Central de<br/>Atendimento</p>
                                        </div>
                                    </Link>

                                    <Link href="/cart" className="relative text-gray-300 hover:text-white">
                                        <AiOutlineShoppingCart className="h-6 w-6" />
                                        {cartItems > 0 && (
                                            <span className="absolute -top-4 -right-3 bg-red-500 text-white text-xs p-1 pl-2 pr-2 rounded-full flex items-center justify-center">
                                                {cartItems}
                                            </span>
                                        )}
                                    </Link>

                                    
                                </div>

                                {/* Menu Mobile */}
                                <div className="flex ml-4 justify-center items-center md:hidden">
                                    <Sheet>
                                        <SheetTrigger>
                                            <BiMenu size={24} />
                                            <span className="sr-only">Abrir / Fechar Menu</span>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>
                                                    <div className="flex absolute top-0 -left-[1px] w-[101%] items-center gap-4 py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-300 ease-in-out">
                                                        <Link href="#" className="flex bg-gray-900 rounded-full items-center justify-center p-3 shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out">
                                                            <CgMenuMotion size={18} className="text-white transition-transform duration-200 ease-in-out" />
                                                            <span className="sr-only">Menu</span>
                                                        </Link>
                                                        <p className="text-white font-medium text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out">William</p>
                                                        <p className="ml-auto underline text-gray-300 font-medium text-sm cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out">Sair</p>
                                                    </div>
                                                </SheetTitle>
                                                <SheetDescription>
                                                    <span className="sr-only">Menu mobile</span>
                                                </SheetDescription>
                                                <nav className="flex flex-col items-start pt-16">
                                                    {linkMenu.map(({ name, link }) => (
                                                        <Link
                                                            key={name}
                                                            className="p-2 pl-4 text-gray-500 font-serif border-b-[1px] border-gray-300 hover:border hover:rounded text-lg text-start hover:text-white hover:bg-gray-900 w-full"
                                                            href={link}
                                                        >
                                                            {name}
                                                        </Link>
                                                    ))}
                                                </nav>
                                                <div className="absolute bottom-0 w-[101%] left-[-1px] flex justify-center items-center gap-6 py-6 px-8 bg-white transition-all duration-300 ease-in-out">
                                                    {/* Redes Sociais no Menu Mobile (se necessário) */}
                                                    <div className="flex gap-2">
                                                        <Link href="https://www.facebook.com" target="_blank" className="flex items-center justify-center p-3 rounded-full shadow-md bg-gray-100 hover:bg-blue-500 transition-all duration-300 ease-in-out">
                                                            <FaFacebook className="text-xl text-blue-600 hover:text-white" />
                                                        </Link>
                                                        <Link href="https://www.instagram.com" target="_blank" className="flex items-center justify-center p-3 rounded-full shadow-md bg-gray-100 hover:bg-pink-500 transition-all duration-300 ease-in-out">
                                                            <FaInstagram className="text-xl text-pink-600 hover:text-white" />
                                                        </Link>
                                                        <Link href="https://www.twitter.com" target="_blank" className="flex items-center justify-center p-3 rounded-full shadow-md bg-gray-100 hover:bg-blue-400 transition-all duration-300 ease-in-out">
                                                            <FaTwitter className="text-xl text-blue-400 hover:text-white" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Submenu />
        </header>
    );
}
