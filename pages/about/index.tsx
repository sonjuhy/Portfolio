import React from "react"
import Image from "next/image"
import profile from "../../public/profile.png"

import PortfolioContext from '../../context/context'
import { useContext } from 'react'

export default function About() {
    const prefix = useContext(PortfolioContext);
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hello. Welcome!
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I&apos;m a back-end developer who tries twice or three times to achieve results if it doesn&apos;t work out once.
                            I majored in computer engineering&apos; and I like to learn various fields as well as backend.
                        </p>
                        <p className="mb-4">
                            I hope it will be a time to check what kind of things I have developed and studied.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <img
                        alt="profile"
                        src={`${prefix}/../profile.png`}
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}