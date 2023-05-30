import {DefaultSession} from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user?: {
          role?: string

        } & DefaultSession['user']
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        name?: string
        role?: string
        accessToken?: string
    }
}