import React from "react"

import PortfolioContext from '../../context/context'
import { useContext } from 'react'
import Head from "next/head";

type props = {
    prefix: any,
}

export default function Projects({prefix}:props) {
    
    return (
        <div className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                            MyHome Project Ver 2.0
                        </h1>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            <p className="mb-4">
                                It is an Android mystery game using AI based on image detection. When proceeding with the story, the necessary clues are acquired through photography and transmission.
                                I&apos;ve added the web to my approach compared to existing projects, implemented the backend completely, and refactored Android.
                            </p>
                            <p className="mb-4">
                                Please enjoy my project Portfolio to click this Component.
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                        <img
                            alt="profile"
                            src={`${prefix}/../../image/MyHome2.0_title_image.png`}
                            width={250}
                            height={250}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}