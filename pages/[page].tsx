import { GetStaticPaths, GetStaticProps } from "next";
import PortfolioContext from "@/context/context";

import Head from "next/head";
import React from "react";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

import "react-notion-x/src/styles.css";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Modal } from "react-notion-x/build/third-party/modal";
import { NotionRenderer } from "react-notion-x";
import Image from "next/image";
import Link from "next/link";

import notion from "@/modules/notion";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import { changeLanguageMode } from "@/context/redux/feature/languageType/languageSlice";
import { changeDarkMode } from "@/context/redux/feature/pageSize/pageSlice";

const DynamicPage = ({ result, page, recordMap }: any) => {
  const { prefix } = useContext(PortfolioContext);
  const [selected, setSelected] = useState("");

  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type);

  const dispatch = useAppDispatch();

  const changeLanguage = () => {
    dispatch(changeLanguageMode(!language));
  };
  const changeLocalDarkMode = () => {
    dispatch(changeDarkMode(!darkMode));
    // toggleDarkMode();
  };

  const myUrlPage = (pageId: string) => {
    return `${prefix}/${pageId.replace(/-/g, "")}`;
  };
  // 페이지 내용 렌더링
  return (
    <div>
      <Head>
        <title>Sonjuhy Portfolio</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <meta property="og:image" content={`${prefix}/profile.png`} />
        <meta property="og:title" content={"Sonjuhy Portfolio"} />
        <meta property="og:description" content="Development History Store" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 ">
        <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
          <Link
            href={"/Portfolio"}
            className={
              "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  " +
              (selected === "main" ? "text-sky-500" : "")
            }
          >
            <Typography>SonJuHy</Typography>
          </Link>
          <Stack direction={"row"}>
            <Link
              href={`${prefix}/`}
              className={
                "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  " +
                (selected === "main" ? "text-sky-500" : "")
              }
              style={{ marginRight: "1rem" }}
            >
              <Typography>Home</Typography>
            </Link>
            <Button
              variant="link"
              onClick={changeLanguage}
              className={
                "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  "
              }
              style={{ marginRight: "1rem" }}
            >
              <Typography>{language ? "한" : "ENG"}</Typography>
            </Button>
          </Stack>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="max-w-4xl mx-auto mt-16 antialiased">
          <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
              <div className="lg:px-4 lg:mt-12 ">
                {language && (
                  <h1 className="text-2xl font-bold lg:text-5xl">
                    환영합니다!
                  </h1>
                )}
                {!language && (
                  <h1 className="text-2xl font-bold lg:text-5xl">Welcome!</h1>
                )}
                <div className="mt-6 ">
                  {language && (
                    <div>
                      <div className="mb-4">
                        <p>
                          저의 개발 기록들을 모아둔 포트폴리오를 소개하는 페이지
                          입니다.
                        </p>
                        <p>
                          포트폴리오를 클릭시, 해당 포트폴리오가 표시됩니다.
                        </p>
                      </div>
                      <div className="mb-4">
                        <Typography>
                          제 포토폴리오를 즐겨주시기 바랍니다.
                        </Typography>
                      </div>
                      <div className="mb-4">
                        <Typography>
                          메인으로 다시 돌아오시려면 [홈으로] 혹은 상단의 HOME
                          을 클릭해주시기 바랍니다.
                        </Typography>
                      </div>
                    </div>
                  )}
                  {!language && (
                    <div>
                      <div className="mb-4">
                        <Typography>
                          This is a page that introduces the portfolio that
                          collects my development records.
                        </Typography>
                        <Typography>
                          When you click on a portfolio, that portfolio is
                          displayed.
                        </Typography>
                      </div>
                      <div className="mb-4">
                        <Typography>Please enjoy my Portfolio.</Typography>
                      </div>
                      <div className="mb-4">
                        <Typography>
                          To return to the main, please click [BACK TO MAIN] or
                          HOME on header.
                        </Typography>
                      </div>
                    </div>
                  )}
                  <br />
                </div>
              </div>
            </div>
            {/* {result && (
              <div>
                <Link
                  href={"/Portfolio/portfolio-default"}
                  className={
                    "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  "
                  }
                  style={{ marginRight: "1rem" }}
                >
                  <MainPortfolio />
                </Link>
                <Link
                  href={"/Portfolio/portfolio-sequence"}
                  className={
                    "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  "
                  }
                  style={{ marginRight: "1rem" }}
                >
                  <MyHomeSequencePortfolio />
                </Link>
              </div>
            )}
            {!result && (
              <div>
                <hr />
                <br />
                <Link
                  href={`${prefix}/portfolioPage`}
                  className={
                    "font-medium tracking-wider transition-colors   hover:text-sky-500 uppercase  "
                  }
                  style={{ marginRight: "1rem", marginLeft: "1rem" }}
                >
                  [Back to Main]
                </Link>
                <div>
                  <NotionRenderer
                    recordMap={recordMap}
                    fullPage={true}
                    mapPageUrl={myUrlPage}
                    darkMode={false}
                    disableHeader={true}
                    components={{
                      Collection,
                      Modal,
                      nextImage: Image,
                      nextLink: Link,
                    }}
                  />
                </div>
              </div>
            )} */}
            <Box>
              <hr />
              <br />
              <Button href={`${prefix}/`}>
                <Typography>
                  {language ? "[홈으로]" : "[Back to Main]"}
                </Typography>
              </Button>
              <div>
                <NotionRenderer
                  recordMap={recordMap}
                  fullPage={true}
                  mapPageUrl={myUrlPage}
                  darkMode={false}
                  disableHeader={true}
                  components={{
                    Collection,
                    Modal,
                    nextImage: Image,
                    nextLink: Link,
                  }}
                />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

// getStaticPaths: 동적으로 생성될 페이지 경로들을 미리 정의
export const getStaticPaths: GetStaticPaths = async () => {
  // 여기서는 간단한 예시로 두 가지 경로를 정의합니다.
  const paths = [
    { params: { page: "portfolioPage" } },
    { params: { page: "portfolio-sequence" } },
    { params: { page: "portfolio-default" } },
    { params: { page: "portfolio-MyHomeMain" } },
    { params: { page: "portfolio-MyHome1" } },
    { params: { page: "portfolio-MyHome2" } },
    { params: { page: "portfolio-OctopUs" } },
    { params: { page: "portfolio-Detective" } },
    { params: { page: "portfolio-GaGeSaJang" } },

    { params: { page: "9aad671fc8114bf69973bda9f94b7494" } },
    { params: { page: "7303e2567bde4f6d94e0b174e3deb57a" } },
    { params: { page: "c230ca2d119846c5b3f6874259808b6c" } },
    { params: { page: "b341349cf6394704ab3be7952b71a245" } },
    { params: { page: "81166bb238a44599b6d182fe456bec94" } },
    { params: { page: "d4a67bcc857744458356cc0fac192644" } },
    { params: { page: "b52d9f9451424c53b1ce110aee1defd7" } },
    { params: { page: "1984810d501c4e26828dc1b744b3a325" } },
  ];

  return {
    paths,
    fallback: false, // fallback이 false이면 정의되지 않은 경로로의 접근은 404로 처리
  };
};

// getStaticProps: 동적 페이지의 데이터를 미리 불러와서 페이지에 전달
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.slug를 이용하여 데이터를 불러옵니다.
  const page = params?.page as string;
  var pageNum: string = "";
  switch (page) {
    case "portfolio-default":
      pageNum = "9aad671fc8114bf69973bda9f94b7494";
      break;
    case "portfolio-MyHomeMain":
      pageNum = "7303e2567bde4f6d94e0b174e3deb57a";
      break;
    case "portfolio-MyHome1":
      pageNum = "c230ca2d119846c5b3f6874259808b6c";
      break;
    case "portfolio-MyHome2":
      pageNum = "b341349cf6394704ab3be7952b71a245";
      break;
    case "portfolio-OctopUs":
      pageNum = "81166bb238a44599b6d182fe456bec94";
      break;
    case "portfolio-Detective":
      pageNum = "d4a67bcc857744458356cc0fac192644";
      break;
    case "portfolio-GaGeSaJang":
      pageNum = "b52d9f9451424c53b1ce110aee1defd7";
      break;
    case "portfolio-sequence":
      pageNum = "1984810d501c4e26828dc1b744b3a325";
      break;
    default:
      pageNum = page;
      break;
  }

  // 여기에서 데이터를 불러와야 합니다.
  const result = page === "portfolioPage" ? true : false;
  var recordMap = null;
  if (!result) {
    recordMap = await notion.getPage(pageNum);
  }

  return {
    props: {
      result,
      page,
      recordMap,
    },
  };
};

export default DynamicPage;
