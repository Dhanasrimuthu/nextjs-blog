import '../styles/globals.css'
import Layout from '../component/layout/layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width , inital-scale=1'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
