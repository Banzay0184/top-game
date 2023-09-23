import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans&family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta name="keywords" content="games"></meta>
      <title>Top games</title>
      <meta name="description" content="Games description"></meta>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
