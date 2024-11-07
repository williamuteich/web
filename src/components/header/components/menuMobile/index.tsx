import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiMenu } from 'react-icons/bi';
import { CgMenuMotion } from "react-icons/cg";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const linkMenu = [
    {name: "Inicio", link: "/"},
    {name: "Loja", link: "shop"},
    {name: "Eletrônicos", link: "/categories/electronics"},
    {name: "Moda", link: "/categories/fashion"},
    {name: "Casa & Jardim", link: "/categories/home-garden"},
    {name: "Contato", link: "contact"},
];

export default function MenuMobile() {
    return (
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
    )
}