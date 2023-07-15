import React from "react"

type props = {
    prefix: string,
    language: boolean,
}

export default function Projects({prefix, language}: props) {
    return (
        <div className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                            MyHome Project Ver 1.0
                        </h1>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            {language && (
                                <div>
                                    <p className="mb-4">
                                        오래된 집을 스마트홈으로 업그레이드 하는 프로젝트입니다.
                                        IoT 서비스, 클라우드, 날씨 정보 제공, 공지사항 등 기능을 모바일(안드로이드)에서 사용 할 수 있도록 하는 프로젝트입니다.
                                        이 프로젝트는 개인 프로젝트입니다.
                                    </p>
                                    <p className="mb-4">
                                        안드로이드, IoT 펌웨어(ESP8266), 백엔드(파이썬 & PHP)를 담당하였습니다.
                                    </p>
                                    <p className="mb-4">
                                        클릭하여 해당 리포지토리로 이동하여 프로젝트를 즐겨주시기 바랍니다.
                                    </p>
                                </div>
                            )}
                            {!language && (
                                <div>
                                    <p className="mb-4">
                                        Upgrade MyHome Service to smart Home.
                                        Provide Iot, Cloud, Weather Info, Notice etc... on Mobile(Android)
                                        This project is a private project.
                                    </p>
                                    <p className="mb-4">
                                        Here, I was in charge of Android, Iot firmware(ESP8266), Back-end(python & PHP)
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
                            src={`${prefix}/image/MyhomeIcon.png`}
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