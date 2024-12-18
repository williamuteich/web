import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const auth: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "username", type: "text", placeholder: "Seu Nome" },
        email: { label: "E-mail", type: "email", placeholder: "Seu E-mail" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {

        try {
          const response = await fetch(`${process.env.NEXT_API}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: credentials?.name, 
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (response.ok) {
            const data = await response.json();

            const user = data.user;

            if (user) {

              const role = user.permissao ? user.permissao.nome : 'default';

              return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: role,
                codigoJWT: user.token,
              } as User; 
            }
          }

          return null; 
        } catch (error) {
          console.error("Erro ao autenticar com a API:", error);
          return null; 
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge:  2 * 60 * 60, // I intended this cookie to have a 4 hour expiration, but it has a 14.4 seconds expiration instead!
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user";
        token.codigoJWT = user.codigoJWT || "";
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role;
        session.user.codigoJWT = token.codigoJWT;
      }
      return session;
    },
  },
};
