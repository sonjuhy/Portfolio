import React from "react"

import PortfolioContext from '../../context/context'
import { useContext } from 'react'
type props = {
    language: boolean,
}
export default function About({language}:props) {
    const prefix = useContext(PortfolioContext);
    return (
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
                                    한번 시도로 안되면 두번 세번 시도하는 백엔드 개발자입니다.
                                    컴퓨터 공학과를 전공하였으며, 백엔드 뿐만 아니라 여러 분야 또한 배우고 도전하는것을 좋아합니다.
                                </p>
                                <p className="mb-4">
                                    그동안 제가 배우고 개발한 내용들을 즐겁게 둘러보는 시간이 되시길 바랍니다.
                                </p>
                            </div>
                        )}
                        {!language && (
                            <div>
                            <p className="mb-4">
                                I&apos;m a back-end developer who tries twice or three times to achieve results if it doesn&apos;t work out once.
                                I majored in computer engineering&apos; and I like to learn various fields as well as backend.
                            </p>
                            <p className="mb-4">
                                I hope it will be a time to check what kind of things I have developed and studied.
                            </p>
                        </div>
                        )}
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
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