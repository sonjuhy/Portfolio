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
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl ">
                            MyHome Project Ver 2.0
                        </h1>
                        <div className="mt-6 text-gray-800 ">
                            {language && (
                                <div>
                                    <p className="mb-4">
                                        기존 MyHome Project를 리팩토링 및 추가 하는 프로젝트입니다.
                                        IoT 서비스, 클라우드, 날씨 정보 제공, 공지사항 등 기능을 모바일(안드로이드)에서 뿐만 아니라 웹에서도 사용 할 수 있도록 하는 프로젝트입니다.
                                        백엔드 개편으로 보안과 성능 또한 향상시켰습니다.
                                        이 프로젝트는 개인 프로젝트입니다.
                                    </p>
                                    <p className="mb-4">
                                        안드로이드 리팩토링, IoT 펌웨어(ESP8266), 백엔드(Spring Boot & Django), 웹(NextJS)를 담당하였습니다.
                                    </p>
                                    <p className="mb-4">
                                        클릭하여 해당 리포지토리로 이동하여 프로젝트를 즐겨주시기 바랍니다.
                                    </p>
                                </div>
                            )}
                            {!language && (
                                <div>
                                    <p className="mb-4">
                                        A project to refactoring and add an existing MyHome Project.
                                        It is a project to make functions such as IoT services, cloud, weather information provision, and announcements available not only on mobile(Android) but also on the web.
                                        The backend revamp also improves security and performance.
                                        This project is a private project.
                                    </p>
                                    <p className="mb-4">
                                        Here, I was in charge of Android refactoring, Iot firmware(ESP8266) change, Back-end(Spring Boot & Django), Web(NextJS)
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
                            src={`${prefix}/image/MyHome2.0_title_image.png`}
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