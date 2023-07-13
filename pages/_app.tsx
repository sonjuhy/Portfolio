import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PortfolioProvider } from '@/context/context'
import { prefix } from '@/config/config'

import 'tailwindcss/tailwind.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <PortfolioProvider value={{prefix}}>
    <ThemeProvider attribute='class' enableSystem={false}>
      {/* <Navigation/> */}
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
    </PortfolioProvider>
}
