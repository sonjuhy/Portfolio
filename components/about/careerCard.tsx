import React from "react";

type props = {
    language: boolean,
}

export default function CareerCard({language}:props) {
  return (
    <>
      <div className="flex flex-wrap" style={{marginTop:'1rem'}}>
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:bg-black dark:shadow-white">
            <div className="px-4 py-5 flex-auto dark:text-white text-left">
                {language && (
                    <div>
                        <p className="mb-4 text-lg">
                            <strong>삼성 청년 SW 아카데미(SSAFY) 7기</strong>
                        </p>
                        <p className="mb-4 font-light">
                            2022.01 ~ 2022.12
                        </p>
                        <p className="mb-4">
                            ⦁ 1학기 Spring, Vue.js 학습.
                        </p>
                        <p className="mb-4">
                            ⦁ 2학기 팀 프로젝트 3회 진행 및 수상.
                        </p>
                        <p className="mb-4">
                            ⦁ 캠퍼스 대표 선정 및 전국 결선 입상.
                        </p>
                    </div>
                )}
                {!language && (
                    <div>
                        <p className="mb-4 text-lg">
                            <strong>SamSung SW Academy For Youth(SSAFY) 7th</strong>
                        </p>
                        <p className="mb-4 font-light">
                            2022.01 ~ 2022.12
                        </p>
                        <p className="mb-4">
                            ⦁ First Semester Study Spring, Vue.js
                        </p>
                        <p className="mb-4">
                            ⦁ Second Semester Team project progress and win 3 times.
                        </p>
                        <p className="mb-4">
                            ⦁ Selection of campus representatives and national finals.
                        </p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap" style={{marginTop:'1rem'}}>
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:bg-black dark:shadow-white">
            <div className="px-4 py-5 flex-auto dark:text-white text-left">
                {language && (
                    <div>
                        <p className="mb-4 text-lg">
                            <strong>창원대학교 졸업</strong>
                        </p>
                        <p className="mb-4 font-light">
                            2015.03 ~ 2021.08
                        </p>
                        <p className="mb-4">
                            ⦁ 컴퓨터 공학과 졸업.
                        </p>
                        <p className="mb-4">
                            ⦁ 졸업작품으로 실시간 위치기반 버스광고 시스템 구현.
                        </p>
                    </div>
                )}
                {!language && (
                    <div>
                        <p className="mb-4 text-lg">
                            <strong>Graduated from Changwon University</strong>
                        </p>
                        <p className="mb-4 font-light">
                            2015.03 ~ 2021.08
                        </p>
                        <p className="mb-4">
                            ⦁ A graduate in computer engineering.
                        </p>
                        <p className="mb-4">
                            ⦁ Real-time location-based bus advertising system is implemented as a graduation work.
                        </p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};