import React from "react";
import { Col, Row } from "react-bootstrap";

type props = {
    language: boolean,
}

export default function SkillCard({language}:props) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" style={{marginBottom:'1rem'}}>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-cyan-500 bg-blueGray-600 "
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {!language && ('Available')}
                {language && ('사용 가능')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" style={{marginBottom:'1rem'}}>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {!language && ('Experienced')}
                {language && ('사용 경험')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" style={{marginBottom:'1rem'}}>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {!language && ('Document Reference')}
                {language && ('문서 참조시 가능')}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" style={{marginBottom:'1rem'}}>
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-cyan-500 bg-blueGray-600"
                    : "text-blueGray-600 bg-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {!language && ('IDE')}
                {language && ('개발환경')}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="grid grid-cols-2   text-left">
                        <div>
                            <p>⦁ JAVA</p>
                            <p>⦁ Ubuntu</p>
                            <p>⦁ Spring JPA</p>
                            <p>⦁ MQTT(Mosquitto)</p>
                            <p>⦁ Android(JAVA)</p>
                        </div>
                        <div>
                            <p>⦁ Spring Boot</p>
                            <p>⦁ Nginx</p>
                            <p>⦁ MySQL</p>
                            <p>⦁ Git</p>
                        </div>
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className="grid grid-cols-2   text-left">
                        <div>
                            <p>⦁ Python</p>
                            <p>⦁ WebRTC</p>
                            <p>⦁ Kafka</p>
                            <p>⦁ Docker</p>
                            <p>⦁ Jenkins</p>
                            <p>⦁ MongoDB</p>
                            <p>⦁ Eureka</p>
                        </div>
                        <div>
                            <p>⦁ Socket I/O</p>
                            <p>⦁ Spring Cloud GateWay</p>
                            <p>⦁ Spring Security</p>
                            <p>⦁ React.js</p>
                            <p>⦁ NextJS</p>
                            <p>⦁ JWT</p>
                        </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className="grid grid-cols-2   text-left">
                        <div>
                            <p>⦁ React Native</p>
                            <p>⦁ Yolo V5</p>
                        </div>
                        <div>
                            <p>⦁ JUnit</p>
                            <p>⦁ Vue.js</p>
                        </div>
                    </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <div className="grid grid-cols-2   text-left">
                        <div>
                            <p>⦁ Eclipse</p>
                            <p>⦁ Android Studio</p>
                            <p>⦁ MySQL WorkBench</p>
                            <p>⦁ MobaXterm</p>
                        </div>
                        <div>
                            <p>⦁ IntelliJ</p>
                            <p>⦁ Visual Studio Code</p>
                            <p>⦁ PyCharm</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};