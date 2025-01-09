import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/utils/Provider";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  title: "TechTalk",
  description:
    "A social platform for developers to share knowledge and connect with other developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider
          clientId={
            "553164720977-7i4dh52dbimn0q3j1jr7s4vbaapi2gkn.apps.googleusercontent.com"
          }
        >
          <ThemeProvider attribute="class">
            <main className="min-h-screen flex flex-col justify-between">
              <Provider>
                <Suspense fallback={<Spinner />}>{children}</Suspense>
              </Provider>
            </main>
          </ThemeProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
