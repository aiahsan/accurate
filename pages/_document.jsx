import Document, { Html, Head, Main, NextScript } from 'next/document';

const title = 'Accurate | Financial transfer pricing made easy';
const description = 'The most powerful and comprehensive financial transfer pricing software platform';
const GOOGLE_ANALYTICS_ID = 'UA-213796548-1';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
            }}
          ></script>

          <meta name="description" content={description} />
          <meta property="og:title" content={title} key="title" />
          <link rel="icon" href="/favicon.ico" />
          <script src="jquery.min.js"></script>
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
