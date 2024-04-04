import PortfolioContext from "@/context/context";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";

const textHan = `MyHome 진행 과정 중 발생한 문제와 해결을 담았습니다.`;
const textEng = `About IoT Project Version 1`;

export default function Portfolio() {
  const { prefix } = useContext(PortfolioContext);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        style={{ height: "25vh", width: "20vw" }}
      >
        <Link href={`${prefix}/portfolio-sequence`} target="_blank">
          <Tooltip
            title={smallMode ? "" : language ? `${textHan}` : `${textEng}`}
            arrow
            placement="left"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <Box
                sx={
                  smallMode
                    ? { height: "100%", width: "70vw" }
                    : { height: "100%", width: "16vw" }
                }
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt="profile"
                    src={`${prefix}/image/sequence.png`}
                    width="100%"
                    height="auto"
                    style={
                      smallMode
                        ? {
                            borderRadius: "15px",
                            objectFit: "cover",
                            minWidth: "70vw",
                          }
                        : {
                            borderRadius: "15px",
                            objectFit: "cover",
                            scale: hover ? "1.1" : "1.0",
                            transition: "0.3s",
                          }
                    }
                  />
                </div>
                <Box sx={{ margin: "1rem" }}>
                  {language ? (
                    <div>
                      <Typography fontWeight={"bold"}>
                        MyHome 진행과정
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        MyHome 진행 과정 중 발생한 문제와 해결을 담았습니다.
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography fontWeight={"bold"}>
                        MyHome Sequence
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        About IoT Project Version 1
                      </Typography>
                    </div>
                  )}
                </Box>
              </Box>
            </Box>
          </Tooltip>
        </Link>
      </div>
      {/*       
      <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
              <div className="lg:px-4 lg:mt-12 ">
                {language && (
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    MyHome 진행 과정
                  </h1>
                )}
                {!language && (
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    MyHome Process
                  </h1>
                )}
                  <div className="mt-6 text-gray-800 dark:text-white">
                    {language && (
                      <div>
                      <p className="mb-4">
                        개인 프로젝트인 MyHome Project를 진행 및 리팩토링하며 업그레이드를 한 과정을 담은 포트폴리오입니다.
                      </p>
                      <p className="mb-4">
                        개발 과정을 통하여 얻은 에러 및 해결 방안, 그리고 깨달은 점 등을 담았습니다.
                      </p>
                      <p className="mb-4">
                        더 자세한 내용과 과정은 포트폴리오를 클릭하셔서 확인하실 수 있습니다. 감사합니다.
                      </p>
                  </div>
                    )}
                    {!language && (
                      <div>
                      <p className="mb-4">
                        This is a portfolio that contains the process of progressing and refactoring and upgrading my personal project, the MyHome Project.
                      </p>
                      <p className="mb-4">
                        It contains errors, solutions, and realizations obtained through the development process.
                      </p>
                      <p className="mb-4">
                        You can click on the portfolio for more details and process, thank you.
                      </p>
                  </div>
                    )}
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                  <img
                      alt="profile"
                      src={`${prefix}/image/sequence.png`}
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
