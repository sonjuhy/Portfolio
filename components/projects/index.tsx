import React from "react";

import PortfolioContext from "../../context/context";
import { useContext } from "react";

import MyHomeVer1 from "./myhomeVer1";
import MyHomeVer2 from "./myhomeVer2";
import OctopUs from "./octopUs";
import Detective from "./detective";
import Gagesajang from "./gagesajang";
import Study from "./study";
import Link from "next/link";
import { useAppSelector } from "@/context/redux/hooks";
import { Box, Divider, Grid, Typography } from "@mui/material";

/**
 *
 * like blog page
 */
export default function Projects() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);

  const { prefix } = useContext(PortfolioContext);
  return (
    <div>
      <div
        style={
          smallMode
            ? { width: "100%", paddingLeft: "2rem", paddingRight: "2rem" }
            : { width: "100%", paddingLeft: "2rem", paddingRight: "2rem" }
        }
      >
        {language && (
          <div>
            <Typography
              fontWeight={"bold"}
              fontSize={smallMode ? 15 : 20}
              style={{ marginBottom: "0.5rem" }}
            >
              제가 개발한 프로젝트를 소개하는 페이지 입니다.
            </Typography>
            <Typography fontSize={smallMode ? 13 : 16}>
              ▪ 프로젝트를 클릭시, 해당 프로젝트의 깃허브로 이동합니다.
            </Typography>
          </div>
        )}
        {!language && (
          <div>
            <Typography
              fontWeight={"bold"}
              fontSize={smallMode ? 16 : 20}
              style={{ marginBottom: "0.5rem" }}
            >
              This page is introduced to you about my projects.
            </Typography>
            <Typography fontSize={smallMode ? 13 : 16}>
              ▪ Click on each project to navigate to its GitHub repository.
            </Typography>
          </div>
        )}
      </div>
      <br />
      <Divider variant="middle" />
      {smallMode ? (
        <Box>
          <MyHomeVer1 />
          <MyHomeVer2 />
          <Gagesajang />
          <OctopUs />
          <Detective />
          <Study />
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MyHomeVer1 />
            <Gagesajang />
            <Detective />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MyHomeVer2 />
            <OctopUs />
            <Study />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
