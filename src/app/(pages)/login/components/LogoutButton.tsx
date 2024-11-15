"use client"

import { signOut } from "next-auth/react"
import { FaSignOutAlt } from "react-icons/fa"

export function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
        >
            Sair
        </button>
    )
}

export function LogoutDashboard() {
    return (
        <button
            onClick={() => signOut()}
            className="flex w-full gap-2 text-lg items-center p-2 rounded-md hover:bg-gray-700"
        >
            <FaSignOutAlt size={24}/> Sair
        </button>
    )
}
