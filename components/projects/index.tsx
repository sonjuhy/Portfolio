import React from "react"

import PortfolioContext from '../../context/context'
import { useContext } from 'react'

import MyHomeVer1 from './myhomeVer1'
import MyHomeVer2 from './myhomeVer2'
import OctopUs from './octopUs'
import Detective from './detective'
import Gagesajang from './gagesajang'
import Link from "next/link";

type props = {
    prefix: string,
    language: boolean,
}

export default function Projects({prefix, language}:props) {
    return (
        <div>
            <div className="max-w-4xl mx-auto mt-16 antialiased">
                <div className="container px-4 mx-auto">
                    <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                        <div className="lg:px-4 lg:mt-12 ">
                            {language && (
                                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                                    안녕하세요. 환영합니다!
                                </h1>
                            )}
                            {!language && (
                                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                                    Hello. Welcome!
                                </h1>
                            )}
                            <div className="mt-6 text-gray-800 dark:text-white">
                                {language && (
                                    <div>
                                        <p className="mb-4">
                                            제가 개발한 프로젝트를 소개하는 페이지 입니다.
                                            프로젝트를 클릭시, 해당 프로젝트의 깃허브로 이동합니다.
                                        </p>
                                        <p className="mb-4">
                                            제 프로젝트 포토폴리오를 즐겨주시기 바랍니다.
                                        </p>
                                    </div>
                                )}
                                {!language && (
                                    <div>
                                        <p className="mb-4">
                                            This page is introduced to you about my projects.
                                            Click on each project to navigate to its GitHub repository.
                                        </p>
                                        <p className="mb-4">
                                            Please enjoy my project Portfolio.
                                        </p>
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="https://github.com/sonjuhy/MyHome_Open">
                    <MyHomeVer1 prefix={prefix} language={language}/>
                </Link>
                <Link href="https://github.com/sonjuhy/MyHomeSpring">
                    <MyHomeVer2 prefix={prefix} language={language}/>
                </Link>
                <Link href="https://github.com/sonjuhy/GaGeSaJang">
                    <Gagesajang prefix={prefix} language={language}/>
                </Link>
                <Link href="https://github.com/sonjuhy/Octop-Us">
                    <OctopUs prefix={prefix} language={language}/>
                </Link>
                <Link href="https://github.com/sonjuhy/Detective">
                    <Detective prefix={prefix} language={language}/>
                </Link>
            </div>
        </div>
    )
}