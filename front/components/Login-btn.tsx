"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function LoginBtn() {
    const { data: session } = useSession();
    if (session) {
        return (
            <button
                onClick={() => signOut()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
        );
    } else {
        return (
            <button
                onClick={() => signIn()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Login
            </button>
        );
    }
}