import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Nav = ({ children, seoData, isNoIndex }) => {
    const [helloText, setHelloText] = useState('World');
    const handleTextBayu = () => {
        setHelloText('Kobar');
    };
    const handleTextHasan = () => {
        setHelloText('Arafat');
    };

    const { asPath: canonicalPath } = useRouter();
    const canonicalUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

    console.log('canonicalPath', canonicalPath);

    return (
        <Fragment>
            <Head>
                {/* SEO Begin  */}
                <title>{`${seoData?.title}`}</title>
                {isNoIndex && <meta name="robots" content="noindex" />}
                <meta name="description" content={seoData?.description} />
                <meta name="author" content={seoData?.author} />
                {/* SEO End */}

                {/* Open Graph Start  */}
                <meta property="og:type" content={seoData?.openGraph.type} />
                <meta
                    property="og:locale"
                    content={seoData?.openGraph.locale}
                />
                <meta property="og:url" content={seoData?.openGraph.url} />
                <meta property="og:title" content={seoData?.openGraph.title} />
                <meta
                    property="og:description"
                    content={seoData?.openGraph.description}
                />
                <meta property="og:image" content={seoData?.openGraph.image} />
                <meta
                    property="og:site_name"
                    content={seoData?.openGraph.site_name}
                />
                {/* Open Graph End */}

                {/* Twitter Card Info Start */}
                <meta name="twitter:card" content={seoData?.twitter.card} />
                <meta name="twitter:site" content={seoData?.twitter.site} />
                <meta name="twitter:title" content={seoData?.twitter.title} />
                <meta
                    name="twitter:description"
                    content={seoData?.twitter.description}
                />
                <meta name="twitter:image" content={seoData?.twitter.image} />
                {/* Twitter Card Info End */}

                {/* canical */}
                <link
                    rel="canonical"
                    href={`${canonicalUrl}${canonicalPath}`}
                />
            </Head>
            <div className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link href="/products" passHref>
                        <a className="navbar-brand ">Products</a>
                    </Link>
                </div>
            </div>
            <h2 className="title">
                Hai kamu yg jomblo ini product aku biar kamu makin keren
            </h2>

            {children}
            <style jsx>
                {`
                    .container {
                        background-color: #282c34;
                        color: white;
                        text-align: center;
                        min-height: 100vh;
                        margin-top: -30px;
                        padding: 30px;
                    }

                    .btn {
                        border: 1px solid white;
                        background-color: #61dafb;
                        width: 100px;
                        color: white;
                        border-radius: 4px;
                        margin: 10px;
                        padding: 12px;
                        font-weight: bold;
                    }

                    .btn:focus {
                        outline: none;
                        border: 2px solid #f89900;
                    }

                    .btn:hover {
                        cursor: pointer;
                        background-color: #f89900;
                    }

                    table {
                        font-family: arial, sans-serif;
                        border-collapse: collapse;
                        width: 100%;
                    }

                    td,
                    th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }
                `}
            </style>
        </Fragment>
    );
};

export default Nav;
