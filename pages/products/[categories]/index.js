import React, { Fragment } from 'react';
import Layout from '../../../src/components/layout';
import { DEFAULT_SEO, getSeoData } from '../../../src/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Caterories({ SEO, data }) {
    const router = useRouter();
    const currentPath = router.query.categories;

    return (
        <div className="container">
            <Fragment>
                <Layout seoData={SEO}>
                    {data?.length > 0 && (
                        <Fragment>
                            <h1>All Products</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(data => (
                                        <tr key={data.id}>
                                            <Link
                                                passHref
                                                href={`/products/${currentPath}/${data.slug}`}
                                            >
                                                <a>
                                                    <td>{data.title}</td>
                                                </a>
                                            </Link>
                                            <td>{data.price}</td>
                                            <td>{data.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Fragment>
                    )}
                </Layout>
            </Fragment>
        </div>
    );
}

export async function getStaticPaths() {
    const getCategories = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories`
    );
    const categories = await getCategories.json();
    const paths = categories.map(category => ({
        params: { categories: category.slug },
    }));

    return {
        // paths: [{ params: { categories: 'front' } }],
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${params.categories}`
    );
    const category = await resp.json();
    const data = category.products;
    // console.log(data.products);
    // const SEO = await getSeoData({ id: 1 });
    // const data = [];
    const SEO = { ...DEFAULT_SEO };
    return { props: { data, SEO } };
}
