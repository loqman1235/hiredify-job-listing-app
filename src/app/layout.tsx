import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/context/SessionProvider";
import { validateRequest } from "@/auth";

export const metadata: Metadata = {
  title: "Hiredify",
  description: "Job listing website",
};

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider value={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
