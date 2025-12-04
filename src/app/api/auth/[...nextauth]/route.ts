import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials) return null;

                const { email, password } = credentials;

                if (email === "apr@gmail.com" && password === "12345") {
                    return {
                        id: "1",
                        fullname: "Aprillia Wulan",
                        email: "apr@gmail.com",
                        role: "admin",
                    };
                }

                return null;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            session.user = {
                email: token.email,
                fullname: token.fullname,
                role: token.role,
            };
            return session;
        },
    },

    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
