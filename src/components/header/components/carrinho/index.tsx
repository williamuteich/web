import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Carrinho() {

    const cartItems = 3;
    
    return(
        <Link href="/cart" className="relative text-gray-300 hover:text-white">
            <AiOutlineShoppingCart className="h-6 w-6" />
            {cartItems > 0 && (
                <span className="absolute -top-4 -right-3 bg-red-500 text-white text-xs p-1 pl-2 pr-2 rounded-full flex items-center justify-center">
                    {cartItems}
                </span>
            )}
        </Link>   
    )
}