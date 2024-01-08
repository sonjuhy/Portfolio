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
    <div className="flex flex-wrap">
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    {language && (
                      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        프로젝트 포트폴리오
                      </h1>
                    )}
                    {!language && (
                      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        project portfolio
                      </h1>
                    )}
                    <div className="mt-6 text-gray-800 dark:text-white">
                      {language && (
                        <div>
                          <p className="mb-4">
                            해당 포트폴리오에는 저에 대한 소개 및 스킬, 여러 개인 혹은 팀 프로젝트까지 다양한 면이 담겨 있습니다.
                          </p>
                          <p className="mb-4">
                              각 프로젝트에 대한 코드 및 깃허브를 보시고 싶으시면 Home-Projects 메뉴로 이동 부탁드립니다.
                          </p>
                          <p className="mb-4">
                            더 자세한 내용과 코드는 포트폴리오를 클릭하셔서 확인하실 수 있습니다. 감사합니다.
                          </p>
                        </div>
                      )}
                      {!language && (
                        <div>
                          <p className="mb-4">
                            The portfolio contains many aspects, including introductions and skills, and individual or team projects.
                          </p>
                          <p className="mb-4">
                            If you want to see codes and github for each project, please go to the Home-Projects menu.
                          </p>
                          <p className="mb-4">
                            You can click on the portfolio for more details and codes, thank you.
                          </p>
                        </div>
                      )}
                  </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10" style={{margin:'auto'}}>
                    <img
                        alt="profile"
                        src={`${prefix}/image/portfolio.png`}
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};