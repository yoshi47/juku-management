import {withAuth} from "next-auth/middleware"
import {getToken} from "next-auth/jwt"
import {NextRequest, NextResponse} from "next/server";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    async function middleware(req: NextRequest) {
        const token = await getToken({req})
        if (token.user.role == "student") {
            return NextResponse.rewrite(new URL(`/students/${token.user.username}`, req.url));
        }
    },
    {
        callbacks: {
            authorized: ({token}) => {
                // verify token and return a boolean
                return token ? true : null;
            },
        },
        secret: process.env.SECRET,
    }
)