import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@layouts/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NANH</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
