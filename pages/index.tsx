import Image from 'next/image'
import { Inter } from 'next/font/google'
import PortfolioContext from '@/context/context'
import { useContext, useState } from 'react'
import Head from 'next/head'

import About from './about'
import Project from '../components/projects'

import ThemeSwitch from '@/modules/themeSwitch'
import { Button } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {prefix} = useContext(PortfolioContext);
  const [selected, setSelected] = useState('main');
  console.log(prefix);
  return (
    <div className='bg-white dark:bg-black'>
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
          <Button variant='link' onClick={()=>setSelected('main')} className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}>
              SonJuHy
          </Button>
          <div>
            <Button variant='link' onClick={()=>setSelected('main')} className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} style={{marginRight:'1rem'}}>
                about 
            </Button>
            <Button variant='link' onClick={()=>setSelected('projects')} className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} style={{marginRight:'1rem'}}>
                projects 
            </Button>
            <ThemeSwitch/>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        {selected === 'main' && (
          <About/>
        )}
        {selected === 'projects' && (
          <Project prefix={prefix}/>
        )}
        <br/>
      </div>
      <br/>
    </div>
  )
}
