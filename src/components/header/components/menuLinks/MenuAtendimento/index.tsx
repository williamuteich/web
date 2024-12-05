import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; 

import { FaHeadset, FaWhatsapp, FaEnvelope } from "react-icons/fa"; 
import Link from "next/link";
import ButtonFormulario from "../../buttonFormulario";

export default function MenuAtendimento() {
    return (
        <NavigationMenu className="md:flex gap-4 mr-4 hidden">
            <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
                <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
                    <NavigationMenuTrigger className="flex items-end active:bg-slate-900 p-0 hover:bg-slate-900 gap-1 bg-transparent hover:text-white">
                        <div className="flex gap-2 justify-center items-center">
                            <FaHeadset className="h-6 w-6" />
                            <div className="flex flex-col justify-center items-center ">
                                <p className="font-light text-slate-300 flex flex-col leading-4 items-start">Central de <span className="text-sm text-slate-300 font-bold">Atendimento</span></p>
                            </div>
                        </div>
                    </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-gray-800 text-slate-300 rounded-md shadow-lg w-full">
                            <nav className="flex flex-col gap-4 pt-1 pl-4 pr-4 py-2 text-sm hover:bg-white bg-white w-80">
                            <div className="border-b-[1px] pr-4 pl-4 pt-2 border-slate-500 rounded-sm pb-2">
                                <h6 className="text-slate-700 font-bold text-lg">Atendimento no WhatsApp</h6>
                                <Link
                                href="https://wa.me/5551998682733"  
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-700 font-medium text-lg flex items-center gap-2"
                                >
                                <FaWhatsapp className="text-green-500" />
                                (51) 99868-2733
                                </Link>
                            </div>

                            <div className="border-b-[1px] pr-4 pl-4 pt-2 border-slate-500 rounded-sm pb-2">
                                <h6 className="text-slate-700 font-bold text-lg">Fale Conosco</h6>
                                <Link
                                href="mailto:williamuteich14@gmail.com"
                                className="text-slate-700 font-medium text-lg flex items-center gap-2"
                                >
                                <FaEnvelope className="text-slate-700" />
                                williamuteich14@gmail.com
                                </Link>
                            </div>
                            <ButtonFormulario />

                            </nav>
                        
                        </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}