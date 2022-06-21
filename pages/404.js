import Layout from "../components/Layout";
import Link from 'next/link'


const custom404 = () => {
  return (
  <Layout>
      <div className="text-center">
      <h1>404</h1>
      <p>Error</p>
      <Link  href="/">
      <a>go back please</a>
      </Link>
      </div>
  </Layout>
  )
};

export default custom404;
