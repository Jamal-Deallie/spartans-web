import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <link
        href='font/human-bold.woff'
        as='font'
        type='font/woff'
        crossOrigin="anonymous"
      />
        <link rel='stylesheet' href='https://use.typekit.net/chx5skx.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
