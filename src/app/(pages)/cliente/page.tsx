"use client"

import { useSession } from "next-auth/react"

export default function Client() {
    const { data: session } = useSession()

    return(
        <div className="pt-52 text-center text-2xl font-bold text-red-600">
            Pagina client Server
        
        
        
        {session && (
            <div className="top-28 border border-red-700 rounded-sm">
                {JSON.stringify(session, null, 2)}
            </div>
        )}



        </div>
    )
}