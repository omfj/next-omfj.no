import Head from 'next/head';

const SEO = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="John Doe" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
    )
}

export default SEO;