import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {SessionProvider} from "next-auth/react"
import {ReactNode} from "react";
import {NextAuthProvider} from "./providers";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <NextAuthProvider>
            {/* <TwitterNavbar /> */}
            {children}
        </NextAuthProvider>
        </body>
        </html>
    );
}
