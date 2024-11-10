"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return(
        <button className="bg-red-600 p-4" onClick={() => signOut()}>
            Sair
        </button>
    )
}