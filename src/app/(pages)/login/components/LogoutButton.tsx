"use client"

import { signOut } from "next-auth/react"
import { FaSignOutAlt } from "react-icons/fa"

export function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="px-4 p-1 flex items-center gap-2 text-slate-800 hover:text-white focus:text-white rounded-md transition duration-200"
        >
            <FaSignOutAlt size={16}/> Sair
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
