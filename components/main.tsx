import PortfolioContext from "@/context/context";
import { changeLanguageMode } from "@/context/redux/feature/languageType/languageSlice";
import { changeNum } from "@/context/redux/feature/pageSize/pageSlice";
import { useAppDispatch, useAppSelector } from "@/context/redux/hooks";
import { Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import About from "./about";
import Project from "./projects";

const MainComponent = () => {
  const prefix = useContext(PortfolioContext);
  const dispatch = useAppDispatch();
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const languageType = useAppSelector((state) => state.language.type);

  const [selected, setSelected] = useState("projects");
  const [language, setLanguage] = useState(false); // false : eng, true : kor

  const changeLanguage = () => {
    dispatch(changeLanguageMode(!languageType));
  };

  const changePageNumber = (num: number) => {
    dispatch(changeNum(num));
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: smallMode ? "100%" : "75%",
      }}
    >
      <div className="max-w-4xl mx-auto mt-16 antialiased">
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
      </div>
    </Paper>
  );
};

export default MainComponent;
