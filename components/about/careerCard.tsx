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
      {/* <div className="flex flex-wrap" style={{ marginTop: "1rem" }}>
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded  ">
            <div className="px-4 py-5 flex-auto   text-left">
              {language && (
                <div>
                  <p className="mb-4 text-lg">
                    <strong>창원대학교 졸업</strong>
                  </p>
                  <p className="mb-4 font-light">2015.03 ~ 2021.08</p>
                  <p className="mb-4">⦁ 컴퓨터 공학과 졸업.</p>
                  <p className="mb-4">
                    ⦁ 졸업작품으로 실시간 위치기반 버스광고 시스템 구현.
                  </p>
                </div>
              )}
              {!language && (
                <div>
                  <p className="mb-4 text-lg">
                    <strong>Graduated from Changwon University</strong>
                  </p>
                  <p className="mb-4 font-light">2015.03 ~ 2021.08</p>
                  <p className="mb-4">⦁ A graduate in computer engineering.</p>
                  <p className="mb-4">
                    ⦁ Real-time location-based bus advertising system is
                    implemented as a graduation work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
