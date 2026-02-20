import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "@/context/redux/hooks";

export default function CareerCard() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  return (
    <>
      <div style={{ marginTop: "1.5rem" }}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
              fontWeight={"bolder"}
            >
              <Box marginBottom={"1.5rem"}>
                {languageType ? (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"에딘트 AI 개발팀 입사"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2024.07 ~ "}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 비전 AI (Object Detection, Classification) 모델 개발 및 개선."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 온 디바이스 AI 모델 경량화 및 최적화."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 온 프레미스 환경에서의 AI 모델 서빙 및 운영 솔루션 개발."}
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ MLOps 파이프라인 구축 및 자동화."}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"Joining the Edient AI Development Team."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2024.07 ~ "}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ Vision AI (Object Detection, Classification) model development and improvement."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {
                        "⦁ On-device AI model optimization(Quantization, fine-tuning) and improvement."
                      }
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {
                        "⦁ On-premise AI model serving and operation solution development."
                      }
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ MLOps pipeline construction and automation."}
                    </Typography>
                  </>
                )}
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
              fontWeight={"bolder"}
            >
              <Box marginBottom={"1.5rem"}>
                {languageType ? (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"삼성 청년 SW 아카데미(SSAFY) 7기"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2022.01 ~ 2022.12"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 1학기 Spring, Vue.js 학습."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 2학기 팀 프로젝트 3회 진행 및 수상."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 캠퍼스 대표 선정 및 전국 결선 입상."}
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 상위 30% 성적으로 수료."}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"SamSung SW Academy For Youth(SSAFY) 7th"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2022.01 ~ 2022.12"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ First Semester Study Spring, Vue.js."}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {
                        "⦁ Second Semester Team project progress and win 3 times."
                      }
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {
                        "⦁ Selection of campus representatives and national finals."
                      }
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ Completion with top 30% grade."}
                    </Typography>
                  </>
                )}
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent
              fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
              fontWeight={"bolder"}
            >
              <Box marginBottom={"1.5rem"}>
                {languageType ? (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"창원대학교 졸업"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2015.03 ~ 2021.08"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 컴퓨터 공학과 졸업."}
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ 졸업작품으로 실시간 위치기반 버스광고 시스템 구현."}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      style={{ fontWeight: "bolder", marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"Graduated from Changwon University"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.5rem" }}
                      fontSize={smallMode ? fontSize * 0.7 : fontSize * 0.4}
                    >
                      {"2015.03 ~ 2021.08"}
                    </Typography>
                    <Typography
                      style={{ marginBottom: "0.3rem" }}
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {"⦁ A graduate in computer engineering."}
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                    >
                      {
                        "⦁ Real-time location-based bus advertising system is implemented as a graduation work."
                      }
                    </Typography>
                  </>
                )}
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
