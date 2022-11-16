import '../styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from '@next/font/local'

const optima = localFont({
  src: '../public/fonts/Optima.woff',
  variable: "--font-optima"
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${optima.variable} font-header`}>
      <Component {...pageProps} />
    </main>

  )
}
