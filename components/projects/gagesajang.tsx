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
                        {language && (
                            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                                가게사장
                            </h1>
                        )}
                        {!language && (
                            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                                GaGe-SaJang
                            </h1>
                        )}
                        <div className="mt-6 text-gray-800 dark:text-white">
                            {language && (
                                <div>
                                    <p className="mb-4">
                                        서울에서 창업을 준비중인, 창업을 사신분들을 위해 데이터를 제공하는 웹사이트입니다. 
                                        서울시에서 제공하는 공공데이터를 기반하여, 선택한 업종과 위치에 따른 비교분석 데이터를 제공합니다. 
                                        또한 입력된 데이터를 다중 회귀분석을 사용하여 4분기 예측 데이터를 제공합니다.
                                        이 프로젝트는 삼성 청년 SW 아카데미 자율 프로젝트입니다.
                                    </p>
                                    <p className="mb-4">
                                        Spring Boot 기반 백엔드(유저 관련 기능), Spring Cloud GateWay & Eureka를 사용한 MSA 구조 설계 및 구현 및 2대의 AWS 서버를 사용하여 MSA 구조에 기반한 독립적인 서비스 운영과 자동 CI/CD를 담당하였습니다.
                                    </p>
                                    <p className="mb-4">
                                        클릭하여 해당 리포지토리로 이동하여 프로젝트를 즐겨주시기 바랍니다.
                                    </p>
                                </div>
                            )}
                            {!language && (
                                <div>
                                    <p className="mb-4">
                                        It is a data analysis website for those who are preparing to start a business in Seoul. Based on the data provided by Seoul Public Data, it provides comparative analysis data according to the selected industry and location. It also provides fourth-quarter forecast data using multiple regression of the entered data.
                                        It is a project conducted as a autonomy project of Samsung Youth SW Academy.
                                    </p>
                                    <p className="mb-4">
                                        Here, I was in charge of spring boot-based backend, design and implementation of MSA using spring cloud gateway & eureka, and using two AWS Servers, independent service operation and automated CI/CD environment using MSA structure.
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
                            src={`${prefix}/image/gagesajang.png`}
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