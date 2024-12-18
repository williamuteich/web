import { FaHome, FaStore, FaLaptop, FaTshirt, FaEnvelope, FaWhatsapp, FaUserCircle, FaRegHeart } from "react-icons/fa";
import { BiMenu } from 'react-icons/bi';
import { getServerSession } from "next-auth";
import { auth as authOptions} from "@/lib/auth-config";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LogoutButton } from "@/app/(pages)/login/components/LogoutButton";
import ButtonFormulario from "../buttonFormulario";


const linkMenu = [
    { name: "Meu Perfil", link: "/shop", icon: <FaUserCircle /> },  
    { name: "Meus Pedidos", link: "/categories/electronics", icon: <FaLaptop /> }, 
    { name: "Desejos", link: "/categories/fashion", icon: <FaRegHeart /> }, 
    { name: "Rastrear Pedido", link: "/categories/home-garden", icon: <FaStore /> },
];

const linkCategories = [
    { name: "Inicio", link: "/", icon: <FaHome /> },
    { name: "Loja", link: "/#", icon: <FaStore /> },
    { name: "Eletrônicos", link: "/#", icon: <FaLaptop /> },
    { name: "Moda", link: "/#", icon: <FaTshirt /> },
    { name: "Casa & Jardim", link: "/#", icon: <FaHome /> },
    { name: "Contato", link: "/#", icon: <FaEnvelope /> },
];

const linkContatos = [
    { name: "WhatsApp", link: "https://wa.me/5551998682733", icon: <FaWhatsapp className="text-green-500" />, label: "(51) 99868-2733" },
    { name: "Fale Conosco", link: "mailto:williamuteich14@gmail.com", icon: <FaEnvelope className="text-slate-400" />, label: "williamuteich14@gmail.com" },
  ];
  

  interface User {
    name: string | null
    email: string | null;
    role: string | null;
  }
  
  interface Session {
    user?: User;
  }

export default async function MenuMobile() {
    const session = await getServerSession(authOptions) as Session;

    
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
                            <div className="flex absolute top-0 -left-[1px] w-[101%] items-center gap-2 py-4 px-6 bg-gradient-to-r bg-white border-b-[1px] border-slate-300 transition-all duration-300 ease-in-out">
                                <Link href="#" className="flex bg-gray-900 rounded-full items-center justify-center  hover:scale-110 transform transition-all duration-300 ease-in-out">
                                    <FaUserCircle size={42} className="text-white transition-transform duration-200 ease-in-out" />
                                    <span className="sr-only">Menu</span>
                                </Link>

                                {session ? (
                                    <div className=" flex justify-between items-center w-full">
                                        <p className="text-slate-900 font-medium text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out">{session?.user?.name || null}</p>
                                        <p className="ml-auto underline text-slate-900 font-medium text-sm cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out"><LogoutButton /></p>
                                    </div>

                                ) : (    

                                    <div className="flex flex-col justify-start items-start leading-4 pt-2">
                                        <h4 className="text-slate-900 font-semibold">Olá, visitante</h4>
                                        <div className="flex gap-[5px] justify-center items-center">
                                            <Link href="/login">
                                                <p className="text-base text-slate-700 hover:text-blue-900">Entrar</p>
                                            </Link>
                                            <p className="text-sm text-slate-700">ou</p>
                                            <Link href="/login">
                                                <p className="text-base text-slate-700 hover:text-blue-900">Cadastrar</p>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </SheetTitle>
                        <SheetDescription>
                            <span className="sr-only">Menu mobile</span>
                        </SheetDescription>
                        <nav className="flex flex-col items-start pt-16">

                            {session && (
                            <ul className="border-b pb-5 border-slate-300 border-spacing-[1px] w-full">
                                  <h2 className="text-lg text-start mb-2 text-slate-900 font-semibold">Minha Área</h2>
                                {linkMenu.map(({ name, link, icon }) => (
                                    <li key={name} className="p-2 pl-4 text-gray-900 font-serif hover:border hover:rounded text-sm text-start hover:text-white hover:bg-gray-900 w-full flex items-center gap-4">
                                        <Link href={link} className="flex items-center gap-2">
                                            <span className="text-xl text-slate-400">{icon}</span>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            )}
                            <ul className="border-b pb-5 mt-4 border-slate-300 border-spacing-[1px] w-full">
                                <h2 className="text-lg text-start mb-2 text-slate-900 font-semibold">Categorias</h2>
                                {linkCategories.map(({ name, link, icon }) => (
                                    <li key={name} className="p-2 pl-4 text-gray-900 font-serif hover:border hover:rounded text-sm text-start hover:text-white hover:bg-gray-900 w-full flex items-center gap-4">
                                        <Link className="flex gap-2" href={link}>
                                            <span className="text-xl text-slate-400">{icon}</span>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <ul className="border-b pb-5 mt-4 border-slate-300 border-spacing-[1px] w-full">
                                <h2 className="text-lg text-start mb-2 text-slate-900 font-semibold">Central de atendimento</h2>
                                {linkContatos.map(({ name, link, icon }) => (
                                    <li key={name} className="p-2 pl-4 text-gray-900 font-serif hover:border hover:rounded text-sm text-start hover:text-white hover:bg-gray-900 w-full flex items-center gap-4">
                                        <Link className="flex gap-2" href={link}>
                                            <span className="text-xl text-slate-400">{icon}</span>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                                <ButtonFormulario />
                            </ul>
                        </nav>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
