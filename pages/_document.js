import { NextSeo } from "next-seo";
import { Html, Head, Main, NextScript } from "next/document";

const additionalLinkTags = [
  {
    rel: "icon",
    href: "/favicon.ico",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default function Document() {
  return (
    <Html>
      <Head>
        <NextSeo
          title="Anforcom 2022"
          additionalLinkTags={additionalLinkTags}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}