import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="relative max-w-4xl px-4 pt-0 pb-6 mx-auto my-0 font-normal transition-colors text-zinc-800 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 overflow-wrap: break-word">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
