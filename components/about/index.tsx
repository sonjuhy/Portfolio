import React, { useEffect, useState } from "react";

import SkillCard from "./skillCard";
import CareerCard from "./careerCard";
import { useAppSelector } from "@/context/redux/hooks";
import { Typography, Divider } from "@mui/material";

export default function About() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type);

  return (
    <div className="container px-4 mx-auto">
      <div>
        <div
          style={
            smallMode
              ? { width: "100%" }
              : { width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }
          }
        >
          <div>
            <div>
              {language && (
                <div>
                  <Typography
                    color={darkMode ? "#fff" : "#000"}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <strong>
                      한번 시도로 안되면 두번 세번 시도하는 AI 엔지니어입니다.
                    </strong>
                  </Typography>
                  <Typography color={darkMode ? "#fff" : "#000"}>
                    전공 분야인 AI를 넘어, 다양한 기술 스택을 탐구하고 내 것으로 만드는 과정을 즐깁니다.
                  </Typography>
                  <br />
                  <Typography color={darkMode ? "#fff" : "#000"}>
                    제가 배우고 기록하며 개발한 결과물들을 이곳에서 확인해 보세요.
                  </Typography>
                </div>
              )}
              {!language && (
                <div>
                  <Typography color={darkMode ? "#fff" : "#000"}>
                    <strong>
                      An AI Engineer who finds solutions through persistence and relentless iteration.
                    </strong>
                  </Typography>
                  <Typography color={darkMode ? "#fff" : "#000"}>
                    Beyond my core expertise in AI, I thrive on exploring diverse tech stacks and mastering new challenges.
                  </Typography>
                  <br />
                  <Typography color={darkMode ? "#fff" : "#000"}>
                    I invite you to explore the projects and insights I have built through continuous learning and documentation.
                  </Typography>
                </div>
              )}
            </div>
          </div>
          <br />
          <Divider variant="middle" />
          <br />
          <h3 className="text-1xl font-bold  lg:text-3xl  ">Skill</h3>
          <div id="skill_container">
            <SkillCard />
          </div>
          <br />
          <Divider variant="middle" />
          <br />
          <h3 className="text-1xl font-bold  lg:text-3xl  ">
            Career & Education
          </h3>
          <CareerCard />
        </div>
      </div>
    </div>
  );
}
