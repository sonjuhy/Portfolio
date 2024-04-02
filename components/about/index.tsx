import React from "react";

import SkillCard from "./skillCard";
import CareerCard from "./careerCard";
import { useAppSelector } from "@/context/redux/hooks";
import { Typography, Divider } from "@mui/material";

export default function About() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);
  return (
    <div className="container px-4 mx-auto">
      <div>
        <div
          style={
            smallMode
              ? { width: "100%" }
              : { width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }
          }
        >
          <div>
            <div className="mt-6 text-gray-800  ">
              {language && (
                <div>
                  <Typography className="mb-4">
                    한번 시도로 안되면 두번 세번 시도하는 백엔드 개발자입니다.
                    컴퓨터 공학과를 전공하였으며, 백엔드 뿐만 아니라 여러 분야
                    또한 배우고 도전하는것을 좋아합니다.
                  </Typography>
                  <br />
                  <Typography className="mb-4">
                    그동안 제가 배우고 개발한 내용들을 즐겁게 둘러보는 시간이
                    되시길 바랍니다.
                  </Typography>
                </div>
              )}
              {!language && (
                <div>
                  <Typography className="mb-4">
                    I&apos;m a back-end developer who tries twice or three times
                    to achieve results if it doesn&apos;t work out once. I
                    majored in computer engineering&apos; and I like to learn
                    various fields as well as backend.
                  </Typography>
                  <br />
                  <Typography className="mb-4">
                    I hope it will be a time to check what kind of things I have
                    developed and studied.
                  </Typography>
                </div>
              )}
            </div>
          </div>
          <br />
          <Divider variant="middle" />
          <br />
          <h3 className="text-1xl font-bold text-gray-900 lg:text-3xl  ">
            Skill
          </h3>
          <SkillCard />
          <br />
          <Divider variant="middle" />
          <br />
          <h3 className="text-1xl font-bold text-gray-900 lg:text-3xl  ">
            Career & Education
          </h3>
          <CareerCard />
        </div>
      </div>
    </div>
  );
}
