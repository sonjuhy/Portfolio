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
import { Grid, Typography } from "@mui/material";

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
            ? { width: "100%", paddingLeft: "1.5rem", paddingRight: "1.5rem" }
            : { width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }
        }
      >
        {language && (
          <div>
            <Typography>
              제가 개발한 프로젝트를 소개하는 페이지 입니다.
            </Typography>
            <Typography>
              프로젝트를 클릭시, 해당 프로젝트의 깃허브로 이동합니다.
            </Typography>
          </div>
        )}
        {!language && (
          <div>
            <Typography>
              This page is introduced to you about my projects. Click on each
              project to navigate to its GitHub repository.
            </Typography>
            <br />
            <Typography>Please enjoy my project Portfolio.</Typography>
          </div>
        )}
      </div>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Link href="https://github.com/sonjuhy/MyHomeVer1" target="_blank">
            <MyHomeVer1 />
          </Link>
          <Link href="https://github.com/sonjuhy/GaGeSaJang" target="_blank">
            <Gagesajang />
          </Link>
          <Link href="https://github.com/sonjuhy/Detective" target="_blank">
            <Detective />
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Link href="https://github.com/sonjuhy/MyHomeVer2" target="_blank">
            <MyHomeVer2 />
          </Link>
          <Link href="https://github.com/sonjuhy/Octop-Us" target="_blank">
            <OctopUs />
          </Link>
          <Link
            href="https://github.com/sonjuhy/CSPersonalStudy"
            target="_blank"
          >
            <Study />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
