import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import StoreProvider from "./StoreProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
export const MonaSans = localFont({
  src: './fonts/Mona-Sans.woff2',
  display: 'swap',
  weight: "100 900",
  variable: '--font-mona-sans',
})



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          //className={`${monaSans.variable}`}
          className={`${MonaSans.className}`}
        >
          <Header />
          {children}
          <hr className='my-[20px]' />
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
