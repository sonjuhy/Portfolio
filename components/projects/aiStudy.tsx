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
const textHan = `인공지능, 머신러닝, 딥러닝 등의 기초 개념부터 응용 실습까지
폭넓게 학습하며 내용을 정리하고 코드로 구현해보는 저장소입니다.
다양한 AI 모델의 원리를 이해하고 실제 적용 사례를 탐구합니다.`;

const textEng = `A repository covering a wide range of topics from fundamental concepts
to practical applications in AI, Machine Learning, and Deep Learning.
We aim to understand the principles of various AI models and explore practical use cases.`;

export default function AIStudy() {
  const [hover, setHover] = useState(false);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 13 : 18;
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
        <Link href="https://github.com/sonjuhy/AIStudy" target="_blank">
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
                sx={{ marginTop: "1rem", marginBottom: "1rem", height: "100%", width: "100%" }}
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
                    alt="AIStudy Thumbnail"
                    src={`${prefix}/image/aistudy.png`}
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover",
                      scale: hover ? "1.1" : "1.0",
                      transition: "0.3s",
                    }}
                  />
                </div>
                <Box sx={{ margin: "1rem" }}>
                  <Typography>Personal ▪ 2024.01 ~ Present</Typography>
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
                    {language ? "AI 탐구 및 실습" : "AI Study"}
                  </Typography>
                  <MainContainer>
                    <Typography
                      fontSize={smallMode ? 11 : 12}
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
    </div>
  );
}
