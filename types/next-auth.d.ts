import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            role?: string 
            codigoJWT?: string
        }
    }
    interface User {
        role: string | undefined
        codigoJWT?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: string | undefined
        codigoJWT?: string
    }   
}
