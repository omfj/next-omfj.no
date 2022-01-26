import '../styles/globals.css'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
