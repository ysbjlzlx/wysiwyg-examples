import type {Metadata} from "next";
import localFont from "next/font/local";
import React, {FC} from "react";

import {cn} from "@/lib/utils";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "wysiwyg-examples"
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: FC<Readonly<Props>> = ({children}) => {
    return (
        <html lang="zh">
        <body className={cn([geistSans.variable, geistMono.variable, 'antialiased'])}>
        {children}
        </body>
        </html>
    );
}
export default RootLayout;