import React from "react"

import PortfolioContext from '../../context/context'
import { useContext } from 'react'
import Head from "next/head";

export default function Projects() {
    const prefix = useContext(PortfolioContext);
    return (
        <div className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="container px-4 mx-auto">
                <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                    <div className="lg:px-4 lg:mt-12 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                            GAGE-SAJANG
                        </h1>
                        <div className="mt-6 text-gray-800 dark:text-white">
                            <p className="mb-4">
                                It is a data analysis website for those who are preparing to start a business in Seoul. Based on the data provided by Seoul Public Data, it provides comparative analysis data according to the selected industry and location. It also provides fourth-quarter forecast data using multiple regression of the entered data.
                                It is a project conducted as a autonomy project of Samsung Youth SW Academy.
                            </p>
                            <p className="mb-4">
                                Here, I was in charge of spring boot-based backend, design and implementation of MSA using spring cloud gateway & eureka, and using two AWS Servers, independent service operation and automated CI/CD environment using MSA structure.
                            </p>
                            <p className="mb-4">
                                Please enjoy my project Portfolio.
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                        <img
                            alt="profile"
                            src={`${prefix}/../../image/gagesajang.png`}
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