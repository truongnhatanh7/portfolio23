import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@layouts/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
