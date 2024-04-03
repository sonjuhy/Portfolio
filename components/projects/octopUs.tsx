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

const textHan = `WebRTC를 사용한 웹 마피아 게임입니다. 시민인 문어와
마피아인 오징어간 추리게임입니다. 이 프로젝트는 삼성 청년
SW 아카데미 공통 프로젝트입니다.`;

const textEng = `It is a video chat-based web mafia game using
WebRTC.It&apos;s a mystery game between a citizen octopus
and a mafia squid. It is a project conducted as a common
project of Samsung Youth SW Academy.`;

export default function Projects() {
  const [hover, setHover] = useState(false);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.smallMode);
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
        <Link href="https://github.com/sonjuhy/Octop-Us" target="_blank">
          <Tooltip
            title={language ? `${textHan}` : `${textEng}`}
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
                    src={`${prefix}/image/octopus.jpg`}
                    width="100%"
                    // height={250}
                    height="inherit"
                    style={{
                      objectFit: "cover",
                      scale: hover ? "1.1" : "1.0",
                      transition: "0.3s",
                    }}
                  />
                </div>
                <Box sx={{ margin: "1rem" }}>
                  <Typography>Team ▪ 2022.06 ~ 2022.08</Typography>
                  <Typography
                    fontSize={fontSize}
                    fontWeight={"bold"}
                    color={hover ? "#27f" : "#000"}
                  >
                    Octop-US
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
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl ">
              Octop-US
            </h1>
            <div className="mt-6 text-gray-800 ">
              {language && (
                <div>
                  <p className="mb-4">
                    WebRTC를 사용한 웹 마피아 게임입니다. 시민인 문어와 마피아인
                    오징어간 추리게임입니다. 이 프로젝트는 삼성 청년 SW 아카데미
                    공통 프로젝트입니다.
                  </p>
                  <p className="mb-4">
                    Spring Boot 기반 백엔드, 웹(React) 중 유저와 미니게임 일부
                    그리고 AWS 서버 설정 및 OpenVidu 설정을 담당하였습니다.
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
                    It is a video chat-based web mafia game using
                    WebRTC.It&apos;s a mystery game between a citizen octopus
                    and a mafia squid. It is a project conducted as a common
                    project of Samsung Youth SW Academy.
                  </p>
                  <p className="mb-4">
                    Here, I was in charge of spring boot-based backend, user and
                    mini-game using React, and server setting using AWS with
                    OpenVidu.
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
              src={`${prefix}/image/octopus.jpg`}
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
