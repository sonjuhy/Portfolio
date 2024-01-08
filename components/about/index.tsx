import React from "react"

import SkillCard from './skillCard';
import CareerCard from "./careerCard";

type props = {
    language: boolean,
}
export default function About({language}:props) {

    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 " style={{width:'100%'}}>
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  ">
                        About.
                    </h1>
                    <br/>
                    <h3 className="text-1xl font-bold text-gray-900 lg:text-3xl  ">
                        Skill
                    </h3>
                    <SkillCard language={language}/>
                    <br/>
                    <h3 className="text-1xl font-bold text-gray-900 lg:text-3xl  ">
                        Career & Education
                    </h3>
                    <CareerCard language={language}/>
                </div>
            </div>
        </div>
    )
}