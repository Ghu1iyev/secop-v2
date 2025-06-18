"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/global.scss";
import "../styles/mantine.scss";
import "../styles/swiper.scss";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/context/LanguageProvider";
import ReactToastify from "@/components/ToastContainer";
import Image from "next/image";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
       <div className="absolute overflow-hidden right-0 top-0">
         <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Image
            alt="vector"
            fill
            src="/Clip path group.svg"
              className="animate-spin-slow"
          />
        </div>
       </div>
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            <MantineProvider>
              <Header />
              {children}
              <Footer />
              <ReactToastify />
            </MantineProvider>
          </QueryClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
