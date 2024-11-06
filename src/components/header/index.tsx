import Link from "next/link";
import Submenu from "./components/submenu";
import { FaFacebook, FaInstagram, FaTwitter, FaUserAlt, FaSearch } from "react-icons/fa";
import { BiMenu } from 'react-icons/bi';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { CgMenuMotion } from "react-icons/cg";


const linkMenu = [
    {name: "Inicio", link: "/"},
    {name: "Loja", link: "shop"},
    {name: "Eletrônicos", link: "/categories/electronics"},
    {name: "Moda", link: "/categories/fashion"},
    {name: "Casa & Jardim", link: "/categories/home-garden"},
    {name: "Contato", link: "contact"},
]


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
                            
                            <div className="w-full flex  sm:gap-4 justify-end">
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
                                <div className="flex justify-center items-center md:hidden">
                                <Sheet>
                                    <SheetTrigger>
                                        <BiMenu size={24} />
                                        <span className='sr-only'>abrir / fechar menu</span>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>
                                                <div className="flex absolute top-0 -left-[1px] w-[101%] items-center gap-4 py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-300 ease-in-out">
                                                    <Link href="#" className="flex bg-gray-900 rounded-full items-center justify-center p-3 shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out">
                                                        <CgMenuMotion size={18} className=" text-white transition-transform duration-200 ease-in-out" />
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
                                                {linkMenu.map(({name, link}) => (
                                                    <Link className="p-2 pl-4 text-gray-500 font-serif border-b-[1px] border-gray-300 hover:border hover:rounded  text-lg text-start hover:text-white hover:bg-gray-900 w-full" key={name} href={link}>
                                                        {name}
                                                    </Link>
                                                ))}
                                            </nav>
                                            <div className="absolute bottom-0 w-[101%] left-[-1px] flex justify-center items-center gap-6 py-6 px-8 bg-white  transition-all duration-300 ease-in-out">
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
            </header>
            <Submenu />
        </>
    );
}
