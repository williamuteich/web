import { Button } from "@/components/ui/button"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; 

import { FaUserAlt, FaSignInAlt, FaUserPlus, FaHeart, FaList } from "react-icons/fa"; 
import Link from "next/link";

interface MenuContaProps {
    isLoggedIn: boolean;
}

export default function MenuConta({isLoggedIn}: MenuContaProps) {
    return (
        <NavigationMenu className="md:flex gap-4 mr-4 hidden">

            {/* Caso o usuário esteja logado */}
            {isLoggedIn ? (
                <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
                    <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
                        <NavigationMenuTrigger className="flex items-center active:bg-slate-900 p-0 hover:bg-slate-900  gap-1 bg-transparent hover:text-white">
                            <div className="flex gap-2 justify-center items-center">
                                <FaUserAlt className="h-6 w-6" />
                                <span className="font-bold text-slate-300">Minha Conta</span>
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-gray-800 text-slate-300 rounded-md shadow-lg w-full">
                            <nav className="flex flex-col gap-2 pt-1 pl-4 pr-4 py-2 text-sm hover:bg-white bg-white w-72">
                                <div className="pb-2 pr-4 pl-4">
                                    <h6 className="text-slate-700 font-bold text-lg">Conta do Usuário</h6>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <Link href="/perfil" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2 hover:bg-slate-300 rounded-md">
                                            <FaUserAlt size={24} className="text-slate-700" />
                                            Perfil
                                        </Link>
                                        <Link href="/desejos" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2 hover:bg-slate-300 rounded-md">
                                            <FaHeart size={24} className="text-slate-700" />
                                            Meus Desejos
                                        </Link>
                                        <Link href="/pedidos" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2 hover:bg-slate-300 rounded-md">
                                            <FaList size={24} className="text-slate-700" />
                                            Meus Pedidos
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>

            ): (


                <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
                    <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
                        <NavigationMenuTrigger className="flex items-center active:bg-slate-900 p-0 hover:bg-slate-900  gap-1 bg-transparent hover:text-white">
                            <div className="flex gap-2 justify-center items-center">
                                <FaUserAlt className="h-6 w-6" />
                                <div className="flex flex-col justify-start items-start leading-3">
                                    <span className="text-sm text-slate-300 font-bold">Entrar</span>
                                    <span className="font-medium text-slate-300"><span className="text-xs font-light text-slate-300 mr-2">ou</span>Cadastrar</span>
                                </div>
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-gray-800 text-slate-300 rounded-md shadow-lg w-full">
                            <nav className="flex flex-col gap-2 pt-1 pl-4 pr-4 py-2 text-sm hover:bg-white bg-white w-72">
                            <div className="pb-2 pr-4 pl-4">
                                <h6 className="text-slate-700 font-bold text-lg">Entrar ou Criar Conta</h6>
                                <div className="flex flex-col gap-0 mt-2">
                                <Link href="/login" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2  hover:bg-slate-300 rounded-md">
                                    <FaSignInAlt size={24} className="text-slate-700" />
                                    Entrar
                                </Link>
                                <Link href="/cadastro" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2 hover:bg-slate-300 rounded-md">
                                    <FaUserPlus size={24} className="text-slate-700" />
                                    Criar uma Conta
                                </Link>
                                </div>
                            </div>
                            </nav>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            )}    

        </NavigationMenu>
    );
}