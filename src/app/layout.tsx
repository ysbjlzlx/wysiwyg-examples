import type {Metadata} from "next";
import localFont from "next/font/local";
import React from "react";

import {cn} from "@/lib/utils";
// 👇 import the providers
import { Providers } from './providers';

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

const RootLayout = ({children}:{
    children: React.ReactNode
}) => {
    return (
        <html lang="zh">
        <body className={cn([geistSans.variable, geistMono.variable, 'antialiased'])}>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
export default RootLayout;