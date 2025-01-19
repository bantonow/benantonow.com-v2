import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* or <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}