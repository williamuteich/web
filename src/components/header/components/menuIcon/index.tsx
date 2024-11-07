"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaHeadset, FaUserAlt } from "react-icons/fa"


export function Atendimento() {
  return (
  <NavigationMenu className="md:flex gap-4 mr-4 hidden">
    <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
      <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
      <NavigationMenuTrigger className="flex active:bg-slate-900 p-0 hover:bg-slate-900 items-center gap-1 bg-transparent hover:text-white">
            <div className="flex gap-2">
              <FaUserAlt className="h-6 w-6" />
              <span className="text-sm text-slate-300">Entrar</span>
              <span className="text-xs font-light text-slate-300">ou</span>
              <span className="font-medium text-slate-300">Cadastrar</span>
            </div>
          </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gray-800 text-slate-300 rounded-md shadow-lg w-full">
              <NavigationMenuLink className="block py-2 text-sm hover:bg-white bg-white w-96">
              <nav className="flex flex-col gap-4 pt-1 pl-4 pr-4">
                <div>
                  <h6 className="text-slate-700 font-bold">Atendimento  no Whatssapp</h6>
                  <span className="text-slate-700 font-bold">(51) 99868-2733</span>
                </div>
              </nav>
              </NavigationMenuLink>
            </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuList className="focus:bg-blue-700 hover:bg-blue-700">
      <NavigationMenuItem className="focus:bg-slate-900 hover:bg-slate-900 active:bg-slate-900">
      <NavigationMenuTrigger className="flex active:bg-slate-900 p-0 hover:bg-slate-900 items-center gap-1 bg-transparent hover:text-white">
        <div className="flex gap-2 justify-center items-center">
            <FaHeadset className="h-6 w-6" />
            <div className="flex flex-col justify-center items-center">
              <span className="text-sm text-slate-300">Central de</span>
              <span className="text-xs font-light text-slate-300">Atendimento</span>
            </div>
        </div>
          </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gray-800 text-slate-300 rounded-md shadow-lg w-full">
              <NavigationMenuLink className="block py-2 text-sm hover:bg-white bg-white w-96">
                <nav className="flex flex-col gap-4 pt-1 pl-4 pr-4">
                  <div>
                    <h6 className="text-slate-700 font-bold">Entrar ou criar</h6>
                    <span className="text-slate-700 font-bold">Criar</span>
                  </div>
                </nav>
              </NavigationMenuLink>
            </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  )
}
