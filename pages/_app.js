import { Fragment } from 'react';
import '../styles/globals.css';
import global from '../styles/global';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <title>Frontend</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
            </Head>
            <Component {...pageProps} />
            <style jsx global>
                {global}
            </style>
        </Fragment>
    );
}

export default MyApp;
