import Home from "@/components/Home";
import Head from "next/head";
import React from "react";

const Main = () => {
  const imageUrl = "/images/png/favicon.png";
  const content = "Secop – kibertəhlükəsizlik, veb və mobil tətbiqlər üzrə ağıllı və təhlükəsiz texnoloji həllər təqdim edən yerli B2B texnologiya şirkətidir."
  return (
    <main>
      <Head>
        <title>Secop</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="az" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="secop, secop.az, kibertəhlükəsizlik, cyber security, veb və mobil tətbiqlər, təhlükəsiz texnoloji"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={content} />
        <meta property="og:url" content={`https://secop.az`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Secop.az" />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary" /> x``
        <meta name="twitter:title" content="Secop.az" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <link rel="canonical" href={`https://secop.az`} />
      </Head>
      <Home />
    </main>
  );
};

export default Main;
