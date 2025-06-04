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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
