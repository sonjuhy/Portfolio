import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function Portfolio() {
  const [prefix, setPrefix] = useState('https://sonjuhy.github.io/Portfolio');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoaded = ({}) => setNumPages(numPages);

  return (
    <div className="max-w-4xl mx-auto mt-16 antialiased">
      <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
              <div className="lg:px-4 lg:mt-12 ">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    MyHome 진행 과정
                </h1>
                  <div className="mt-6 text-gray-800 dark:text-white">
                    <div>
                      <p className="mb-4">
                        저에 대한 소개 및 스킬셋 그리고 지금까지 진행한 개인 및 팀 프로젝트 기반한 포트폴리오 입니다.
                      </p>
                      <p className="mb-4">
                          각 프로젝트에 대한 코드 및 깃허브를 보시고 싶으시면 Projects 메뉴로 이동 부탁드립니다.
                      </p>
                      <p className="mb-4">
                          클릭하여 포트폴리오를 확인 부탁 드립니다.
                      </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                  <img
                      alt="profile"
                      src={`${prefix}/image/gagesajang.png`}
                      width={250}
                      height={250}
                      className="rounded-full"
                  />
              </div>
          </div>
      </div>
    </div>
  );
};