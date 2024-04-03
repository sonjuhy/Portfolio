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

const MainComponent = () => {
  const prefix = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);
  const fontSize = smallMode ? 18 : 32;

  const [selected, setSelected] = useState("about");
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(languageType); // false : eng, true : kor
  return <div></div>;
};
export default MainComponent;
