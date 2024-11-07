"use client"

import { Button } from "@/components/ui/button"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; 
import Link from "next/link";
import { FaHeadset, FaUserAlt, FaWhatsapp, FaEnvelope, FaSignInAlt, FaUserPlus, FaPaperPlane } from "react-icons/fa"; 


export function Atendimento() {
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
                  //ao clicar abrir modal para enviar formulário de contato
                  <Button className="hover:bg-white bg-slate-800 hover:text-slate-900 border-[1px] text-white hover:border-slate-900 p-2">
                    <FaPaperPlane />
                    Enviar Mensagem
                  </Button>
                </nav>
            
            </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>



    <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
      <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
      <NavigationMenuTrigger className="flex items-end active:bg-slate-900 p-0 hover:bg-slate-900  gap-1 bg-transparent hover:text-white">
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
                      Minha Conta
                    </Link>
                    <Link href="/signup" className="flex p-2 pt-[5px] pb-[5px] text-slate-800 text-base items-center gap-2 hover:bg-slate-300 rounded-md">
                      <FaUserPlus size={24} className="text-slate-700" />
                      Criar uma Conta
                    </Link>
                  </div>
                </div>
              </nav>
            </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  )
}
