import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const linkMenu = [
    {name: "Inicio", link: "/"},
    {name: "Loja", link: "shop"},
    {name: "Eletrônicos", link: "/categories/electronics"},
    {name: "Moda", link: "/categories/fashion"},
    {name: "Casa & Jardim", link: "/categories/home-garden"},
    {name: "Contato", link: "contact"},
]



export default function Submenu() {
    return(
        <div>
            <div className="relative w-full bg-gray-800 p-4 md:hidden">
                <input
                    type="text"
                    placeholder="Procurar..."
                    className="px-4 py-2 w-full bg-gray-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-4 top-4 px-3 py-2 text-gray-300 hover:text-white">
                    <FaSearch className="h-6 w-6" />
                </button>
            </div>



            <nav className="bg-gray-800 text-white hidden md:flex">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-6 py-3">
                        {linkMenu.map(({ name, link }) => (
                            <Link key={name} href={link} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}