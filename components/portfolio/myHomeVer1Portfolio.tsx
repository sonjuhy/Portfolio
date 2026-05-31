import PortfolioContext from "@/context/context";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";

const textHan = `IoT 프로젝트 버전 1에 대한 설명입니다.`;
const textEng = `About IoT Project Version 1`;

const MainComponent = () => {
  const { prefix } = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        padding: "2rem",
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
        style={smallMode
          ? { height: "auto", width: "100%" }
          : { height: "25vh", width: "20vw" }}
      >
        <Link href="https://sonjuhy.github.io/MyHomeVer1" target="_blank">
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
                    ? { height: "100%", width: "100%" }
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
                    src={`${prefix}/image/MyHomeVer1.png`}
                    width="100%"
                    height="auto"
                    style={
                      smallMode
                        ? {
                            borderRadius: "15px",
                            objectFit: "cover",
                            width: "100%",
                          }
                        : {
                            borderRadius: "15px",
                            objectFit: "cover",
                            transform: hover ? "scale(1.1)" : "scale(1.0)",
                            transition: "transform 0.3s ease",
                          }
                    }
                  />
                </div>
                <Box sx={{ margin: "1rem" }}>
                  {language ? (
                    <div>
                      <Typography fontWeight={"bold"}>MyHome Ver 1</Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        IoT 프로젝트 버전 1에 대한 설명입니다.
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography fontWeight={"bold"}>MyHome Ver 1</Typography>
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
    </div>
  );
};
export default MainComponent;
