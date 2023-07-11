import Image from 'next/image'
import { Inter } from 'next/font/google'
import PortfolioContext from '@/context/context'
import { useContext } from 'react'
import Head from 'next/head'
import About from './about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {prefix} = useContext(PortfolioContext);
  return (
    <div>
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </div>
    </div>
  )
}
