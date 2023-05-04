import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="relative pt-0 pb-6 my-0 font-normal transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
