import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Table Masters Brand Guideline",
    description: "PingPong Tournament Mini Brand Guideline",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` font-sans antialiased bg-[#020c2f] text-white`}
            >
                {children}
            </body>
        </html>
    );
}

