import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(){
  return (
    <Html>
      <Head>
                <title> Pablo Ciruelos Front End Developer</title>
                <meta name='Description' content='Pablo ciruelos website' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }
}
export default MyDocument;