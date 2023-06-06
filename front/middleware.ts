import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const token = await getToken({req})
        if (!token) {
            return NextResponse.rewrite(new URL("/auth/signin", req.url));
        }
        if (token.user.role == "student") {
            return NextResponse.rewrite(new URL(`/students/${token.user.username}`, req.url));
        }
    },
    {
        callbacks: {
            authorized: ({token}) =>  !!token,
        },
        secret: process.env.SECRET,
    }
)