"use client";

import { JetBrains_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  varaiable: "--font-jetbrainMono",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        {pathname !== "/" && (
          <>
            <Header />
            <StairTransition />
          </>
        )}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
