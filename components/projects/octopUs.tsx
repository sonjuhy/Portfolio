import React from "react"

type props = {
    prefix: string,
    language: boolean,
}

export default function Projects({prefix, language}:props) {
    
    return (
        <div className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                            Octop-US
                        </h1>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            {language && (
                                <div>
                                    <p className="mb-4">
                                        WebRTC를 사용한 웹 마피아 게임입니다. 시민인 문어와 마피아인 오징어간 추리게임입니다.
                                        이 프로젝트는 삼성 청년 SW 아카데미 공통 프로젝트입니다.
                                    </p>
                                    <p className="mb-4">
                                        Spring Boot 기반 백엔드, 웹(React) 중 유저와 미니게임 일부 그리고 AWS 서버 설정 및 OpenVidu 설정을 담당하였습니다.
                                    </p>
                                    <p className="mb-4">
                                        클릭하여 해당 리포지토리로 이동하여 프로젝트를 즐겨주시기 바랍니다.
                                    </p>
                                </div>
                            )}
                            {!language && (
                                <div>
                                    <p className="mb-4">
                                        It is a video chat-based web mafia game using WebRTC.It&apos;s a mystery game between a citizen octopus and a mafia squid.
                                        It is a project conducted as a common project of Samsung Youth SW Academy.
                                    </p>
                                    <p className="mb-4">
                                        Here, I was in charge of spring boot-based backend, user and mini-game using React, and server setting using AWS with OpenVidu.
                                    </p>
                                    <p className="mb-4">
                                        Please enjoy my project to click this Component.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                        <img
                            alt="profile"
                            src={`${prefix}/image/octopus.jpg`}
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