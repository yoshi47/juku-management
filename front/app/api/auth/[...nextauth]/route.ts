import { UserInfo } from "@/@types/types"
import jwt from "jsonwebtoken"
import NextAuth, {AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const SECRET: string = process.env.NEXTAUTH_SECRET

export const authOptions: AuthOptions = ({
// const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "next-auth",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.HOST}/api/token/`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(credentials),
                });

                const data = await res.json();
                const user = jwt.verify(data.access, SECRET) as UserInfo;
                if (res.ok && user) {
                    return {...data, user};
                } else {
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user, account}) {
            if (account) {
                token.user = {...user.user}
                token.accessToken = user.access
                token.refreshToken = user.refresh
            }
            return token
        },
        async session({session, token}) {
            if (token) {
                session.user = {...token.user}
                session.accessToken = token.accessToken
                session.refreshToken = token.refreshToken
            }
            return session
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        },
    },
})

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
