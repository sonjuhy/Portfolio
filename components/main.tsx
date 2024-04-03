import PortfolioContext from "@/context/context";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import About from "./about";
import Project from "./projects";
import { AnimatePresence, motion } from "framer-motion";

import Portfolio from "@/components/portfolio/index";

const MainComponent = () => {
  const prefix = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const [selected, setSelected] = useState("about");
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(languageType); // false : eng, true : kor

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
    if (newValue === 0) {
      setSelected("about");
    } else if (newValue === 1) {
      setSelected("project");
    } else if (newValue === 2) {
      setSelected("portfolio");
    }
  };

  useEffect(() => {
    setLanguage(languageType);
  }, [languageType]);
  return (
    <Paper
      elevation={3}
      style={{
        // width: smallMode ? "100%" : "75%",
        maxWidth: "800px",
        minWidth: "50vw",
        borderRadius: "25px",
      }}
    >
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        <div style={{ position: "relative", padding: "1rem" }}>
          <Stack
            direction={"row"}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="overline"
              fontSize={fontSize * 1.5}
              style={{ marginLeft: "1rem" }}
              fontWeight={"bold"}
            >
              {selected}
            </Typography>
            {!smallMode && (
              <div
                style={{
                  padding: "1rem",
                }}
              >
                <Box
                  sx={{
                    typography: "body1",
                  }}
                >
                  <Tabs
                    value={page}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    role="navigation"
                  >
                    <Tab label="about" />
                    <Tab label="project" />
                    <Tab label="portfolio" />
                  </Tabs>
                </Box>
              </div>
            )}
          </Stack>
        </div>
      </div>
      {smallMode && (
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 5 }}
          elevation={3}
        >
          <BottomNavigation showLabels value={page} onChange={handleChange}>
            <BottomNavigationAction label="About" />
            <BottomNavigationAction label="Project" />
            <BottomNavigationAction label="Portfolio" />
          </BottomNavigation>
        </Paper>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* <div className="max-w-4xl mx-auto mt-16 antialiased">
        <div style={{ position: "relative" }}>
          {selected === "main" && (
            <div className="container px-4 mx-auto">
              <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                  {language && (
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  ">
                      환영합니다!
                    </h1>
                  )}
                  {!language && (
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  ">
                      Welcome!
                    </h1>
                  )}
                  <div className="mt-6 text-gray-800  ">
                    {language && (
                      <div>
                        <p className="mb-4">
                          한번 시도로 안되면 두번 세번 시도하는 백엔드
                          개발자입니다. 컴퓨터 공학과를 전공하였으며, 백엔드
                          뿐만 아니라 여러 분야 또한 배우고 도전하는것을
                          좋아합니다.
                        </p>
                        <p className="mb-4">
                          그동안 제가 배우고 개발한 내용들을 즐겁게 둘러보는
                          시간이 되시길 바랍니다.
                        </p>
                        <br />
                        <p className="mb-4">
                          If you want to see this site in English, press the
                          button at the top that says 한.
                        </p>
                      </div>
                    )}
                    {!language && (
                      <div>
                        <p className="mb-4">
                          I&apos;m a back-end developer who tries twice or three
                          times to achieve results if it doesn&apos;t work out
                          once. I majored in computer engineering&apos; and I
                          like to learn various fields as well as backend.
                        </p>
                        <p className="mb-4">
                          I hope it will be a time to check what kind of things
                          I have developed and studied.
                        </p>
                        <br />
                        <p className="mb-4">
                          만약 한글로 사이트를 보고싶으시다면, 상단에 ENG 이라고
                          적힌 버튼을 눌러주세요.
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
                    src={`${prefix}/../profile.png`}
                    width={250}
                    height={250}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
          {selected === "about" && <About language={language} />}
          {selected === "projects" && (
            <Project
              language={language}
              prefix={"https://sonjuhy.github.io/Portfolio"}
            />
          )}
          <br />
        </div>
        <br />
      </div> */}
          {selected === "main" && (
            <div className="container px-4 mx-auto">
              <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                  {/* {language && (
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  ">
                      환영합니다!
                    </h1>
                  )}
                  {!language && (
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl  ">
                      Welcome!
                    </h1>
                  )} */}
                  <div className="mt-6 text-gray-800  ">
                    {language && (
                      <div>
                        <p className="mb-4">
                          한번 시도로 안되면 두번 세번 시도하는 백엔드
                          개발자입니다. 컴퓨터 공학과를 전공하였으며, 백엔드
                          뿐만 아니라 여러 분야 또한 배우고 도전하는것을
                          좋아합니다.
                        </p>
                        <p className="mb-4">
                          그동안 제가 배우고 개발한 내용들을 즐겁게 둘러보는
                          시간이 되시길 바랍니다.
                        </p>
                        <br />
                        <p className="mb-4">
                          If you want to see this site in English, press the
                          button at the top that says 한.
                        </p>
                      </div>
                    )}
                    {!language && (
                      <div>
                        <p className="mb-4">
                          I&apos;m a back-end developer who tries twice or three
                          times to achieve results if it doesn&apos;t work out
                          once. I majored in computer engineering&apos; and I
                          like to learn various fields as well as backend.
                        </p>
                        <p className="mb-4">
                          I hope it will be a time to check what kind of things
                          I have developed and studied.
                        </p>
                        <br />
                        <p className="mb-4">
                          만약 한글로 사이트를 보고싶으시다면, 상단에 ENG 이라고
                          적힌 버튼을 눌러주세요.
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
                    src={`${prefix}/../profile.png`}
                    width={250}
                    height={250}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
          {selected === "about" && <About />}
          {selected === "project" && <Project />}
          {selected === "portfolio" && <Portfolio />}
          <br />
        </motion.div>
      </AnimatePresence>
    </Paper>
  );
};

export default MainComponent;
