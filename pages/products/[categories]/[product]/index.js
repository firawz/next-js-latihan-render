import React, { Fragment } from 'react';
import Layout from '../../../../src/components/layout';
import { DEFAULT_SEO, getSeoData } from '../../../../src/utils';

export default function Caterories({ SEO, data }) {
    return (
        <div className="container">
            <Fragment>
                <Layout seoData={SEO}>
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
                                <tr>
                                    <td>{data?.title}</td>
                                    <td>{data?.price}</td>
                                    <td>{data?.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Fragment>
                </Layout>
            </Fragment>
        </div>
    );
}

export async function getStaticPaths() {
    // console.log(categories);
    const getCategories = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories`
    );
    const categories = await getCategories.json();
    const products = [];
    categories.map(category => {
        category.products.map(product => {
            [...products, product.slug];
            // products.push(product.slug);
        });
    });
    const paths = products.map(product => ({
        params: { product },
    }));
    // console.log('Ini pathss', paths);
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    console.log(
        params.product,
        'INI PARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMs'
    );
    const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/${params.product}`
    );
    const data = await resp.json();
    // console.log('INI CURRENT', current);
    // const data = category.products;
    // console.log(data.products);
    const SEO = await getSeoData({ id: data.id });
    // const data = [];
    // const SEO = { ...DEFAULT_SEO };
    return { props: { data, SEO } };
}
