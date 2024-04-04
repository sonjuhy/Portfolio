import PortfolioContext from "@/context/context";
import { useAppSelector } from "@/context/redux/hooks";
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const textHan = `JAVA와 Spring 관련 기초 이론 및 실습 공부하는 저장소
입니다. 단순 구현이 아닌 심층있는 이해를 목표로 합니다. 이
프로젝트는 개인 CS 공부 프로젝트입니다.
탐구 및 이론 공부를 기반하여, 코드 및 라이브러리의 목적과
올바른 사용방법을 얻도록 노력합니다.`;

const textEng = `This is a repository for basic theory and practice related
to JAVA and Spring. Aiming for in-depth understanding, not
just implementation. This project is a personal CS study
project.
Based on inquiry and theory study, try to get the purpose
and correct use of code and library.`;

export default function Projects() {
  const [hover, setHover] = useState(false);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;
  const { prefix } = useContext(PortfolioContext);

  return (
    <div style={{ padding: "2rem" }}>
      <div
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        style={{ height: "45vh" }}
      >
        <Link href="https://github.com/sonjuhy/CSPersonalStudy" target="_blank">
          <Tooltip
            title={smallMode ? "" : language ? `${textHan}` : `${textEng}`}
            arrow
            placement="left"
          >
            <Paper
              elevation={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <Box
                sx={{ marginTop: "1rem", marginBottom: "1rem", height: "100%" }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "15px",
                    width: "100%",
                    height: "23vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="profile"
                    src={`${prefix}/image/study.jpg`}
                    width="100%"
                    height={250}
                    style={{
                      objectFit: "cover",
                      scale: hover ? "1.1" : "1.0",
                      transition: "0.3s",
                    }}
                  />
                </div>
                <Box sx={{ margin: "1rem" }}>
                  <Typography>Personal ▪ 2022.08 ~ 2022.10</Typography>
                  <Typography
                    fontSize={fontSize}
                    fontWeight={"bold"}
                    color={
                      hover
                        ? darkMode
                          ? "#59f"
                          : "#27f"
                        : darkMode
                        ? "#fff"
                        : "#000"
                    }
                  >
                    {language ? "기초 공부" : "Basic Study"}
                  </Typography>
                  <MainContainer>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                      style={smallMode ? { marginTop: "0.5rem" } : {}}
                    >
                      {language ? `${textHan}` : `${textEng}`}
                    </Typography>
                  </MainContainer>
                </Box>
              </Box>
            </Paper>
          </Tooltip>
        </Link>
      </div>
      {/* <div className="container px-4 mx-auto">
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:px-4 lg:mt-12 ">
            {language && (
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl ">
                기초 공부
              </h1>
            )}
            {!language && (
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl ">
                Basic Study
              </h1>
            )}
            <div className="mt-6 text-gray-800 ">
              {language && (
                <div>
                  <p className="mb-4">
                    JAVA와 Spring 관련 기초 이론 및 실습 공부하는 저장소 입니다.
                    단순 구현이 아닌 심층있는 이해를 목표로 합니다. 이
                    프로젝트는 개인 CS 공부 프로젝트입니다.
                  </p>
                  <p className="mb-4">
                    탐구 및 이론 공부를 기반하여, 코드 및 라이브러리의 목적과
                    올바른 사용방법을 얻도록 노력합니다.
                  </p>
                  <p className="mb-4">
                    클릭하여 해당 리포지토리로 이동하여 프로젝트를 즐겨주시기
                    바랍니다.
                  </p>
                </div>
              )}
              {!language && (
                <div>
                  <p className="mb-4">
                    This is a repository for basic theory and practice related
                    to JAVA and Spring. Aiming for in-depth understanding, not
                    just implementation. This project is a personal CS study
                    project.
                  </p>
                  <p className="mb-4">
                    Based on inquiry and theory study, try to get the purpose
                    and correct use of code and library.
                  </p>
                  <p className="mb-4">
                    Please enjoy my project to click this Component.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10"
            style={{ margin: "auto" }}
          >
            <img
              alt="profile"
              src={`${prefix}/image/study.jpg`}
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
