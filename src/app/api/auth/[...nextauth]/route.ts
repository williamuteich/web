import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/login", 
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_API}/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (res.ok && data.user) {
          console.log("vai", data.user)
          return {
            token: data.user.token,
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            active: data.user.active,
          };
        }

        return null;
      }
    }),
  ],
  callbacks: {
    async session({session, token, user,}){
      session.user = { ...session.user, id: user.id } as {
        id: string,
        name: string,
        email: string
      }

      return session
    }
  }
});

export { handler as GET, handler as POST };
