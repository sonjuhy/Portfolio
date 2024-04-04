import { useAppSelector } from "@/context/redux/hooks";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

import DefaultPortfolio from "./defaultPortfolio";
import MyHomeSequencePortfolio from "./myHomeSequencePortfolio";
import MyHomeVer1Portfolio from "./myHomeVer1Portfolio";
import MyHomeVer2Portfolio from "./myHomeVer2Portfolio";

const MainComponent = () => {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);
  return (
    <div>
      <div
        style={
          smallMode
            ? { width: "100%" }
            : { width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }
        }
      >
        <div style={{ padding: smallMode ? "1.5rem" : "2rem" }}>
          {language && (
            <div>
              <Typography
                fontWeight={"bold"}
                fontSize={smallMode ? 15 : 20}
                style={{ marginBottom: "0.5rem" }}
              >
                저의 포트폴리오를 소개하는 페이지 입니다.
              </Typography>
              <Typography fontSize={smallMode ? 13 : 16}>
                ▪ 포트폴리오를 클릭시, 해당 사이트로 이동합니다.
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
                This page is introduced to you about my portfolios.
              </Typography>
              <Typography fontSize={smallMode ? 13 : 16}>
                ▪ Click on each portfolio to navigate to its web site.
              </Typography>
            </div>
          )}
        </div>

        <br />
        <Divider variant="middle" />

        <div
          id="content_container"
          style={{ transition: "width 0.5s, height: 0.5s" }}
        >
          {smallMode ? (
            <div style={{ marginBottom: "4rem" }}>
              <DefaultPortfolio />
              <MyHomeSequencePortfolio />
              <MyHomeVer1Portfolio />
              <MyHomeVer2Portfolio />
            </div>
          ) : (
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <DefaultPortfolio />
                <MyHomeVer1Portfolio />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <MyHomeSequencePortfolio />
                <MyHomeVer2Portfolio />
              </Grid>
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
