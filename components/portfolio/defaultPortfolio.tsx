import PortfolioContext from "@/context/context";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";

const textHan = `저에 대한 소개 및 스킬, 여러 프로젝트를 소개합니다.`;
const textEng = `Introductions and skills, and individual or team projects.`;

export default function Portfolio() {
  const { prefix } = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
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
        <Link href={`${prefix}/portfolio-default`} target="_blank">
          <Tooltip
            title={smallMode ? "" : language ? `${textHan}` : `${textEng}`}
            arrow
            placement="right"
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
                    src={`${prefix}/image/portfolio.png`}
                    width="95%"
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
                <div style={{ margin: "1rem", width: "90%" }}>
                  {language ? (
                    <div>
                      <Typography fontWeight={"bold"}>
                        프로젝트 모음 포트폴리오
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {textHan}
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography fontWeight={"bold"}>
                        Projects Portfolio
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {textEng}
                      </Typography>
                    </div>
                  )}
                </div>
              </Box>
            </Box>
          </Tooltip>
        </Link>
      </div>
      {/*       
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    {language && (
                      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        프로젝트 포트폴리오
                      </h1>
                    )}
                    {!language && (
                      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        project portfolio
                      </h1>
                    )}
                    <div className="mt-6 text-gray-800 dark:text-white">
                      {language && (
                        <div>
                          <p className="mb-4">
                            해당 포트폴리오에는 저에 대한 소개 및 스킬, 여러 개인 혹은 팀 프로젝트까지 다양한 면이 담겨 있습니다.
                          </p>
                          <p className="mb-4">
                              각 프로젝트에 대한 코드 및 깃허브를 보시고 싶으시면 Home-Projects 메뉴로 이동 부탁드립니다.
                          </p>
                          <p className="mb-4">
                            더 자세한 내용과 코드는 포트폴리오를 클릭하셔서 확인하실 수 있습니다. 감사합니다.
                          </p>
                        </div>
                      )}
                      {!language && (
                        <div>
                          <p className="mb-4">
                            The portfolio contains many aspects, including introductions and skills, and individual or team projects.
                          </p>
                          <p className="mb-4">
                            If you want to see codes and github for each project, please go to the Home-Projects menu.
                          </p>
                          <p className="mb-4">
                            You can click on the portfolio for more details and codes, thank you.
                          </p>
                        </div>
                      )}
                  </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                    <img
                        alt="profile"
                        src={`${prefix}/image/portfolio.png`}
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
      </div> */}
    </div>
  );
}
