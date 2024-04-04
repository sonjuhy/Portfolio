import PortfolioContext from "@/context/context";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";

import Main from "../components/main";
import MainAside from "@/components/aside";

import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import {
  changeDarkMode,
  changeNum,
  changeSmallMode,
} from "@/context/redux/feature/pageSize/pageSlice";
import { changeLanguageMode } from "@/context/redux/feature/languageType/languageSlice";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh; /* 화면 전체 높이에 맞추기 위해 */
`;

const LeftComponent = styled.div`
  flex: 0 0 auto; /* 왼쪽 컴포넌트는 고정 크기를 유지 */
  overflow-y: auto; /* 오른쪽 컴포넌트가 넘칠 때 스크롤 가능하도록 */
`;

const RightComponent = styled.div`
  padding: 1rem;
  overflow-y: auto; /* 오른쪽 컴포넌트가 넘칠 때 스크롤 가능하도록 */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
interface IndexPageProps {
  toggleDarkMode: () => void;
}
export default function Home({ toggleDarkMode }: IndexPageProps) {
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const languageType = useAppSelector((state) => state.language.type);

  const { prefix } = useContext(PortfolioContext);
  const [selected, setSelected] = useState("projects");
  const [language, setLanguage] = useState(false); // false : eng, true : kor
  const [localDarkMode, setLocalDarkMode] = useState(darkMode);
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();

  const changeLanguage = () => {
    dispatch(changeLanguageMode(!languageType));
  };

  const changePageNumber = (num: number) => {
    dispatch(changeNum(num));
  };

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);
  useEffect(() => {
    setLocalDarkMode(theme.palette.mode === "dark" ? true : false);
  }, [theme.palette.mode]);
  useEffect(() => {
    const handleResize = () => {
      // 컨테이너의 너비를 감지하여 글자 크기 동적 조절
      const containerWidth =
        document.getElementById("main_container")?.offsetWidth;

      // 예시: 너비가 200px 이하일 때 글자 크기를 14로, 그 외에는 16으로 설정
      if (containerWidth && containerWidth <= 1024) {
        dispatch(changeSmallMode(true));
      } else {
        dispatch(changeSmallMode(false));
      }
    };
    // 초기 로드 시와 창 크기 변경 시에 이벤트 리스너 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="main_container"
      style={{
        height: "100%",
        width: "100%",
        background: !darkMode ? "#ffffff" : "#121212",
      }}
    >
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <meta property="og:image" content={`${prefix}/profile.png`} />
        <meta property="og:title" content={"Sonjuhy Portfolio"} />
        <meta property="og:description" content="Development History Store" />
        <meta property="og:type" content="website" />
        <meta name="color-scheme" content="light only" />

        <meta name="supported-color-schemes" content="light" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {smallMode ? (
          <div>
            <LeftComponent>
              <MainAside toggleDarkMode={toggleDarkMode} />
            </LeftComponent>
            <RightComponent style={{ minWidth: "100vw" }}>
              <Main />
            </RightComponent>
          </div>
        ) : (
          <MainContainer>
            <div>
              <MainAside toggleDarkMode={toggleDarkMode} />
            </div>
            <RightComponent style={{ minWidth: "55vw" }}>
              <Main />
            </RightComponent>
          </MainContainer>
        )}
      </div>
    </div>
  );
}
