import { useAppSelector } from "@/context/redux/hooks";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Grid, Stack, Tab, Typography, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function SkillCard() {
  const [value, setValue] = useState("Available");
  const panelContainerRef = useRef(null);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{ maxWidth: "90vw" }}>
      <TabContext value={value}>
        <Stack
          direction={smallMode ? "row" : "column"}
          style={{ width: "100%", justifyContent: "left" }}
        >
          <TabList
            onChange={handleChange}
            centered
            orientation={smallMode ? "vertical" : "horizontal"}
          >
            <Tab
              label={languageType ? "사용 가능" : "Available"}
              value={"Available"}
            />
            <Tab
              label={languageType ? "사용 경험" : "Experienced"}
              value={"Experienced"}
            />
            <Tab
              label={languageType ? "문서 참조시 가능" : "Document reference"}
              value={"Document reference"}
              wrapped
            />
            <Tab label={languageType ? "개발환경" : "ide"} value={"ide"} />
          </TabList>

          <div id="tabPanelContainer">
            <TabPanel value="Available">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ JAVA
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Ubuntu
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Spring JPA
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ MQTT(Mosquitto)
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Android(JAVA)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Spring Boot
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Nginx
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ MySQL
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Git
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
            <TabPanel value="Experienced">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Python
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ WebRTC
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Kafka
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Docker
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Jenkins
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ MongoDB
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Eureka
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Socket I/O
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Spring Cloud GateWay
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Spring Security
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ React.js
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ NextJS
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ JWT
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
            <TabPanel value="Document reference">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ React Native
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Yolo V5
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ JUnit
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Vue.js
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
            <TabPanel value="ide">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Eclipse
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Android Studio
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ MySQL WorkBench
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ MobaXterm
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ IntelliJ
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Visual Studio Code
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ PyCharm
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
          </div>
        </Stack>
      </TabContext>

      {/* <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ marginBottom: "1rem" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-cyan-500 bg-blueGray-600 "
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {!languageType && "Available"}
                {languageType && "사용 가능"}
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ marginBottom: "1rem" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {!languageType && "Experienced"}
                {languageType && "사용 경험"}
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ marginBottom: "1rem" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {!languageType && "Document Reference"}
                {languageType && "문서 참조시 가능"}
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ marginBottom: "1rem" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {!languageType && "IDE"}
                {languageType && "개발환경"}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-2   text-left">
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ JAVA</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Ubuntu</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Spring JPA</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ MQTT(Mosquitto)</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Android(JAVA)</Typography>
                    </div>
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Spring Boot</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Nginx</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ MySQL</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Git</Typography>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid grid-cols-2   text-left">
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Python</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ WebRTC</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Kafka</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Docker</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Jenkins</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ MongoDB</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Eureka</Typography>
                    </div>
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Socket I/O</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Spring Cloud GateWay</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Spring Security</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ React.js</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ NextJS</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ JWT</Typography>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="grid grid-cols-2   text-left">
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ React Native</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Yolo V5</Typography>
                    </div>
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ JUnit</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Vue.js</Typography>
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="grid grid-cols-2   text-left">
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Eclipse</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Android Studio</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ MySQL WorkBench</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ MobaXterm</Typography>
                    </div>
                    <div>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ IntelliJ</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ Visual Studio Code</Typography>
                      <Typography
                  fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                >⦁ PyCharm</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
