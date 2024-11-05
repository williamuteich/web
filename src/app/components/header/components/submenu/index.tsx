import Link from "next/link";

export default function Submenu() {
    return(
        <nav className="bg-gray-800 text-white hidden md:flex">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-6 py-3">
                    <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Inicio
                    </Link>
                    <Link href="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Loja
                    </Link>
                    <Link href="/categories/electronics" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Eletrônicos
                    </Link>
                    <Link href="/categories/fashion" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Moda
                    </Link>
                    <Link href="/categories/home-garden" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Casa & Jardim
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    )
}