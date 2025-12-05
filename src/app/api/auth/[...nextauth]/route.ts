import { loginWithGoogle } from "@/lib/firebase/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

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

                if (email === "ap@gmail.com" && password === "12345") {
                    return {
                        id: "1",
                        fullname: "Aprillia Wulan",
                        email: "apr@gmail.com",
                        role: "member",
                    };
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
        })
    ],

    callbacks: {
        async jwt({ token, user , account, profile} : any) {
            if (user) {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            if(account?.provider ==="google"){
                const data = {
                    fullname:user.name,
                    email: user.email,
                    type: 'google',
                };
             await loginWithGoogle(data, (result:{status: boolean, data: any}) => {
                if (result.status){
                token.email = result.data.email;
                token.fullname = result.data.fullname;
                token.role = result.data.role;
             }
             });
             
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
