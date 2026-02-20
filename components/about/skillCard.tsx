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
                        ⦁ Python
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Ubuntu
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ SQLAlchemy
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ PyTorch
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ YOLO V11
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Fast-API
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Docker
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
                        ⦁ JAVA
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Spring Boot
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Kafka
                      </Typography>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Nginx
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
                        ⦁ OpenVINO
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
                        ⦁ OnnxRuntime
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
                        ⦁ TensorRT
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                      <Typography
                        fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.5}
                      >
                        ⦁ Flask
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
                        ⦁ Visual Studio Code
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
                        ⦁ Antigravity
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
    </div>
  );
}
