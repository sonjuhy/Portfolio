import PortfolioContext from "@/context/context";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import DefaultPortfolio from "./defaultPortfolio";
import MyHomeSequencePortfolio from "./myHomeSequencePortfolio";
import MyHomeVer1Portfolio from "./myHomeVer1Portfolio";
import MyHomeVer2Portfolio from "./myHomeVer2Portfolio";

const MainComponent = () => {
  const prefix = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const [selected, setSelected] = useState("about");
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(languageType); // false : eng, true : kor
  return (
    <div>
      <div
        style={
          smallMode
            ? { width: "100%" }
            : { width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }
        }
      >
        <Typography>Title</Typography>
        <br />
        <Divider variant="middle" />
        {smallMode ? (
          <></>
        ) : (
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <DefaultPortfolio language={language} /> */}
              <MyHomeVer1Portfolio />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <MyHomeSequencePortfolio language={language} /> */}
              <MyHomeVer2Portfolio />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};
export default MainComponent;
