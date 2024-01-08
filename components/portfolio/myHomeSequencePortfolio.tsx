import React, { useState } from "react";
import { Document, Page } from "react-pdf";

type props = {
  language: boolean,
}

export default function Portfolio({language}:props) {
  const [prefix, setPrefix] = useState('https://sonjuhy.github.io/Portfolio');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoaded = ({}) => setNumPages(numPages);

  return (
    <div className="max-w-4xl mx-auto mt-16 antialiased">
      <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
              <div className="lg:px-4 lg:mt-12 ">
                {language && (
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    MyHome 진행 과정
                  </h1>
                )}
                {!language && (
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    MyHome Process
                  </h1>
                )}
                  <div className="mt-6 text-gray-800 dark:text-white">
                    {language && (
                      <div>
                      <p className="mb-4">
                        개인 프로젝트인 MyHome Project를 진행 및 리팩토링하며 업그레이드를 한 과정을 담은 포트폴리오입니다.
                      </p>
                      <p className="mb-4">
                        개발 과정을 통하여 얻은 에러 및 해결 방안, 그리고 깨달은 점 등을 담았습니다.
                      </p>
                      <p className="mb-4">
                        더 자세한 내용과 과정은 포트폴리오를 클릭하셔서 확인하실 수 있습니다. 감사합니다.
                      </p>
                  </div>
                    )}
                    {!language && (
                      <div>
                      <p className="mb-4">
                        This is a portfolio that contains the process of progressing and refactoring and upgrading my personal project, the MyHome Project.
                      </p>
                      <p className="mb-4">
                        It contains errors, solutions, and realizations obtained through the development process.
                      </p>
                      <p className="mb-4">
                        You can click on the portfolio for more details and process, thank you.
                      </p>
                  </div>
                    )}
                </div>
              </div>
              <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                  <img
                      alt="profile"
                      src={`${prefix}/image/sequence.png`}
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