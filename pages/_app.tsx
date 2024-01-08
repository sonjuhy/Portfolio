import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PortfolioProvider } from '@/context/context'
import { prefix } from '@/config/config'

import 'tailwindcss/tailwind.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'

import 'react-notion-x/src/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-white' style={{height:'100vh'}}>
    <PortfolioProvider value={{prefix}}>
      <Component {...pageProps} />
      <Footer/>
    </PortfolioProvider>
    </div>
}
