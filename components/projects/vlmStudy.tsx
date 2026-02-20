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
const textHan = `시각적 정보와 자연어를 결합한 Vision Language Model(VLM)에 대해 
심도있게 연구하고 실습하는 저장소입니다. 컴퓨터 비전과 NLP의 결합을 통한
차세대 AI 모델의 아키텍처와 활용 방안을 모색합니다.`;

const textEng = `A repository for in-depth research and practice on Vision Language Models (VLM),
which combine visual information and natural language. We explore the architecture and
applications of next-generation AI models through the intersection of CV and NLP.`;

export default function VLMStudy() {
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
        <Link href="https://github.com/sonjuhy/VLMStudy" target="_blank">
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
                    alt="VLMStudy Thumbnail"
                    src={`${prefix}/image/vlmstudy.png`}
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
                  <Typography>Personal ▪ 2024.03 ~ Present</Typography>
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
                    {language ? "VLM 연구 및 실습" : "VLM Study"}
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
