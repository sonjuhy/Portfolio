import React, { useState } from "react";
import { useAppSelector } from "@/context/redux/hooks";
import { Typography, Divider, Paper, Box, Grid, Tabs, Tab, Collapse } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import TerminalIcon from "@mui/icons-material/Terminal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ArchitectureItem {
  component: string;
  titleKo: string;
  titleEn: string;
  techKo: string;
  techEn: string;
  featuresKo: string[];
  featuresEn: string[];
  color: string;
  icon: React.ReactNode;
}

interface PhilosophyItem {
  concept: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  pointsKo: string[];
  pointsEn: string[];
  color: string;
}

// 원본 명세 텍스트: 컴포넌트 외부에 정의하여 렌더링마다 재생성 방지
const rawInfraText = `================================================================================
[Visionic Studio Specification (ai_infra.md)]
================================================================================
1. Installation / 설치 방법
--------------------------------------------------------------------------------
# 기본 클라이언트 설치
$ pip install visionic-studio

# Nexus 서버 기능 포함 설치
$ pip install "visionic-studio[server]"

# PyTorch 지원 포함 설치
$ pip install "visionic-studio[torch]"

2. Environment Setup / 환경 설정
--------------------------------------------------------------------------------
$ cp .env.example .env

3. Quickstart / 퀵스타트
--------------------------------------------------------------------------------
# 모델 정의 (experiments/my_model.py)
from visionic_ai import VisionicBase

class MyModel(VisionicBase):
    def build_model(self):
        # 모델 아키텍처 정의
        pass

    def get_dataloaders(self):
        # 데이터 로더 반환
        pass

    def training_step(self, batch, model):
        # 손실 계산 로직
        pass

# 학습 실행
$ visionic run experiments/my_model.py

4. Core Architecture Specs / 핵심 아키텍처 사양
--------------------------------------------------------------------------------
- Client Framework (Visionic AI): Python 3.12+, VisionicBase API, VisionicTrainer Engine
- Central Server (MLOps Nexus): FastAPI endpoints, tmux process management, DuckDB logger, Slack notifier
================================================================================`;

export default function InfraTimeline() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type); // true: KOR, false: ENG

  const [activeTab, setActiveTab] = useState(0);
  const [showRawData, setShowRawData] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const toggleRawData = () => {
    setShowRawData(!showRawData);
  };

  // 탭 1: 시스템 아키텍처 데이터
  const architectureData: ArchitectureItem[] = [
    {
      component: "Visionic AI",
      titleKo: "클라이언트 프레임워크 (Framework)",
      titleEn: "Client-side AI Framework",
      techKo: "Python 3.12+ | PyTorch Support",
      techEn: "Python 3.12+ | PyTorch Support",
      featuresKo: [
        "VisionicBase: 데이터 로더, 옵티마이저, 학습 스텝 정의를 강제하는 엄격한 추상 인터페이스",
        "VisionicTrainer: GPU 리소스 및 학습 메트릭을 실시간으로 수집하는 프레임워크 핵심 엔진",
        "CLI 비동기 구동: 'visionic run' 명령을 사용해 복잡한 설정 없이 원스크립트 학습 구동 지원"
      ],
      featuresEn: [
        "VisionicBase: Abstract interface enforcing loaders, optimizer, and training steps",
        "VisionicTrainer: Lightweight training engine capturing live GPU and accuracy metrics",
        "CLI Automation: Instantly run and push custom experiments via 'visionic run' CLI"
      ],
      color: "#3b82f6",
      icon: <TerminalIcon />
    },
    {
      component: "MLOps Nexus",
      titleKo: "중앙 관리 서버 (Server)",
      titleEn: "Central Management Server",
      techKo: "FastAPI | DuckDB | tmux integration",
      techEn: "FastAPI | DuckDB | tmux integration",
      featuresKo: [
        "Process Supervisor: 백그라운드 학습 세션을 원격 서버에 tmux 환경으로 비동기 생성 및 통제",
        "Metric Receiver: FastAPI를 통한 학습 통계 및 시스템 리소스 로그 비동기 수집 적재",
        "DuckDB 시계열 로그: DuckDB 임베디드 데이터베이스를 사용한 경량 및 초고속 대용량 데이터 로깅",
        "Slack 알림 봇: OOM, Loss Spike 등의 학습 오류 감지 시 개발자 슬랙 채널 즉시 웹훅 알림"
      ],
      featuresEn: [
        "Process Supervisor: Generates and controls background tmux sessions automatically",
        "Metric Receiver: API endpoint receiving system resource metrics asynchronously via FastAPI",
        "DuckDB Time-Series: Ultra-fast embedded log storage capable of high-throughput log queries",
        "Slack Slackbot integration: Instant warning webhooks on OOM errors and sudden loss spikes"
      ],
      color: "#10b981",
      icon: <SettingsIcon />
    }
  ];

  // 탭 2: 설계 철학 및 로드맵 데이터
  const philosophyData: PhilosophyItem[] = [
    {
      concept: "Separation of Concerns",
      titleKo: "관심사의 분리 (Separation of Concerns)",
      titleEn: "Separation of Concerns",
      summaryKo: "모델 설계 비즈니스 로직과 학습/로깅 인프라 코드를 완벽하게 물리적 분리합니다.",
      summaryEn: "Keeps model architecture code strictly independent of underlying telemetry and cluster logs.",
      pointsKo: [
        "사용자가 작성하는 모델 아키텍처 코드에 GPU 로깅, 서버 전송, DB 적재 등의 하위 코드를 배제",
        "하이퍼파라미터 튜닝 및 아키텍처 개량 사항에 대해서만 명확하고 순수한 Git 히스토리 유지 가능"
      ],
      pointsEn: [
        "Users focus purely on the neural network design without worrying about DB writes or servers",
        "Keeps git changelogs completely clean and focused on model-architectural evolution"
      ],
      color: "#8b5cf6"
    },
    {
      concept: "Inversion of Control",
      titleKo: "제어의 역전 (Inversion of Control)",
      titleEn: "Inversion of Control",
      summaryKo: "프레임워크가 모델 학습 루프 전체의 제어권을 갖는 템플릿 메서드 패턴을 적용합니다.",
      summaryEn: "Applies the template method pattern so the framework orchestrates the loop executions.",
      pointsKo: [
        "사용자가 직접 Epoch 루프를 작성하여 발생하는 인덱싱 에러, GPU 메모리 릭 등 휴먼 에러 원천 차단",
        "프레임워크 엔진이 적절한 주기마다 사용자의 build_model, training_step을 후크(Hook) 호출"
      ],
      pointsEn: [
        "Avoids human errors like indexing issues or GPU memory leaks from custom epoch loops",
        "The trainer handles execution phases, calling build_model and training_step hooks deterministically"
      ],
      color: "#ec4899"
    },
    {
      concept: "Lightweight Monitoring",
      titleKo: "1인 운영 최적화 비동기 모니터링",
      titleEn: "One-Man MLOps Optimization",
      summaryKo: "최소한의 컴퓨팅 리소스로 대규모 학습 로그를 비동기식으로 원격 실시간 모니터링합니다.",
      summaryEn: "Monitors massive training runs asynchronously with minimal infrastructure costs.",
      pointsKo: [
        "FastAPI와 DuckDB의 시너지로 고가의 MLOps 인프라 솔루션 없이 로컬 PC에서도 초경량 서버 구동",
        "Slack 푸시 알림 연동을 통해 모니터링 대시보드를 계속 쳐다보지 않아도 실시간 문제 상황 파악"
      ],
      pointsEn: [
        "Lightweight server starts instantly anywhere without heavy SaaS or cloud database costs",
        "Maintains persistent process supervision through tmux, allowing restarts even on connection drops"
      ],
      color: "#06b6d4"
    }
  ];

  const roadmapData = {
    titleKo: "🚀 개발 로드맵 (Roadmap)",
    titleEn: "🚀 Future Roadmap",
    phasesKo: [
      "Phase 1 (v0.1.0): 단일 노드 및 단일 GPU 기반 핵심 학습 파이프라인 안정화 (현재 완료)",
      "Phase 2.1: 상세 Slack 모니터링 페이로드 개량 및 학습 정지/재개 인터랙티브 버튼 적용",
      "Phase 2.2: Executor 레이어 추상화를 통한 macOS, WSL2 등 클라이언트 분산 배포 지원 확장",
      "Phase 2.3: 모델 성능 요약 카드 및 실험 메타데이터의 간편한 PDF/HTML 내보내기(Export) 기능"
    ],
    phasesEn: [
      "Phase 1 (v0.1.0): Single-node, single-GPU core training pipeline stabilization (Completed)",
      "Phase 2.1: Add interactive Slack button attachments for stopping/resuming active runs remotely",
      "Phase 2.2: Extend multi-platform execution via Executor abstraction to support macOS and WSL2",
      "Phase 2.3: Generate auto-packaged model cards and export experiment details to static layouts"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="container px-4 mx-auto">
      <Box sx={{ width: "100%", padding: smallMode ? "0.5rem" : "1rem" }}>
        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: darkMode ? "#fff" : "#1a1a1a",
              fontSize: smallMode ? "1.4rem" : "2.0rem",
              mb: 0.5,
              fontFamily: "'Outfit', 'Noto Sans KR', sans-serif",
            }}
          >
            Visionic Studio MLOps Infrastructure
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: darkMode ? "#a0a0a0" : "#666",
              fontSize: smallMode ? "0.85rem" : "0.95rem",
              lineHeight: 1.4,
            }}
          >
            {language
              ? "학습 자동화 클라이언트 프레임워크와 비동기 중앙 MLOps 서버 모니터링 시스템의 핵심 아키텍처입니다."
              : "The core system architecture and decoupling of the client-side training engine and central telemetry monitoring."}
          </Typography>
        </Box>

        {/* 탭 인터페이스 */}
        <Box sx={{ borderBottom: 1, borderColor: darkMode ? "#333" : "#e5e7eb", mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="infra tabs"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 'bold',
                fontFamily: "'Outfit', 'Noto Sans KR', sans-serif",
                color: darkMode ? "#888" : "#555",
                fontSize: smallMode ? "0.85rem" : "1.0rem",
              },
              '& .Mui-selected': {
                color: darkMode ? "#fff" : "#3b82f6",
              }
            }}
          >
            <Tab label={language ? "시스템 아키텍처" : "System Architecture"} />
            <Tab label={language ? "설계 철학 & 로드맵" : "Philosophy & Roadmap"} />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="arch-tab"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
            >
              {/* 시스템 아키텍처 */}
              <Grid container spacing={3}>
                {architectureData.map((item, index) => {
                  const borderTheme = {
                    borderColor: item.color,
                    boxShadow: darkMode
                      ? `0 4px 20px 0 rgba(0, 0, 0, 0.5), 0 0 1px 1px ${item.color}33`
                      : `0 8px 30px 0 rgba(233, 236, 245, 0.5), 0 0 1px 1px ${item.color}22`,
                  };

                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <motion.div variants={itemVariants} style={{ height: "100%" }}>
                        <Paper
                          elevation={2}
                          sx={{
                            borderRadius: "20px",
                            p: smallMode ? 2.5 : 3.5,
                            borderTop: `6px solid ${item.color}`,
                            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: darkMode
                                ? `0 12px 30px 0 rgba(0,0,0,0.6), 0 0 3px 2px ${item.color}55`
                                : `0 16px 40px 0 rgba(200, 210, 230, 0.6), 0 0 3px 2px ${item.color}44`,
                            },
                            ...borderTheme,
                          }}
                        >
                          <Box>
                            {/* Component Name and Icon */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                              <Box
                                sx={{
                                  color: item.color,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  p: 0.8,
                                  borderRadius: "10px",
                                  backgroundColor: `${item.color}15`,
                                }}
                              >
                                {item.icon}
                              </Box>
                              <Typography variant="h5" fontWeight="bold" sx={{ color: item.color, fontFamily: "'Outfit', sans-serif" }}>
                                {item.component}
                              </Typography>
                            </Box>

                            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: darkMode ? "#fff" : "#111", mb: 0.5 }}>
                              {language ? item.titleKo : item.titleEn}
                            </Typography>
                            <Typography variant="caption" sx={{ color: darkMode ? "#aaa" : "#666", fontStyle: "italic", display: "block", mb: 2 }}>
                              ⚙️ {language ? item.techKo : item.techEn}
                            </Typography>

                            <Divider sx={{ my: 1.5, borderColor: darkMode ? "#333" : "#eee" }} />

                            {/* Features list */}
                            <Box sx={{ pl: 0.5 }}>
                              {(language ? item.featuresKo : item.featuresEn).map((text, idx) => (
                                <Typography
                                  key={idx}
                                  variant="body2"
                                  sx={{
                                    color: darkMode ? "#d1d5db" : "#374151",
                                    lineHeight: 1.5,
                                    fontSize: "0.85rem",
                                    mb: 1.2,
                                    display: "flex",
                                    alignItems: "flex-start",
                                    '&::before': {
                                      content: '"•"',
                                      marginRight: '8px',
                                      flexShrink: 0,
                                      color: item.color
                                    }
                                  }}
                                >
                                  {text}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="phil-tab"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
            >
              {/* 설계 철학 및 로드맵 */}
              <Grid container spacing={3}>
                {philosophyData.map((item, index) => {
                  const borderTheme = {
                    borderColor: item.color,
                    boxShadow: darkMode
                      ? `0 4px 20px 0 rgba(0, 0, 0, 0.5), 0 0 1px 1px ${item.color}33`
                      : `0 8px 30px 0 rgba(233, 236, 245, 0.5), 0 0 1px 1px ${item.color}22`,
                  };

                  return (
                    <Grid item xs={12} key={index}>
                      <motion.div variants={itemVariants}>
                        <Paper
                          elevation={2}
                          sx={{
                            borderRadius: "20px",
                            p: smallMode ? 2.5 : 3.5,
                            borderLeft: `6px solid ${item.color}`,
                            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: darkMode
                                ? `0 12px 30px 0 rgba(0,0,0,0.6), 0 0 3px 2px ${item.color}55`
                                : `0 16px 40px 0 rgba(200, 210, 230, 0.6), 0 0 3px 2px ${item.color}44`,
                            },
                            ...borderTheme,
                          }}
                        >
                          <Typography variant="h6" fontWeight="bold" sx={{ color: item.color, mb: 0.5, fontFamily: "'Outfit', sans-serif" }}>
                            {language ? item.titleKo : item.titleEn}
                          </Typography>
                          <Typography variant="body1" sx={{ color: darkMode ? "#eee" : "#111", mb: 2, fontWeight: 500, fontSize: "0.95rem" }}>
                            {language ? item.summaryKo : item.summaryEn}
                          </Typography>

                          <Divider sx={{ my: 1.5, borderColor: darkMode ? "#333" : "#eee" }} />

                          <Box sx={{ pl: 0.5 }}>
                            {(language ? item.pointsKo : item.pointsEn).map((text, idx) => (
                              <Typography
                                key={idx}
                                variant="body2"
                                sx={{
                                  color: darkMode ? "#d1d5db" : "#4b5563",
                                  lineHeight: 1.5,
                                  fontSize: "0.85rem",
                                  mb: 1,
                                  display: "flex",
                                  alignItems: "flex-start",
                                  '&::before': {
                                    content: '"•"',
                                    marginRight: '8px',
                                    flexShrink: 0,
                                    color: item.color
                                  }
                                }}
                              >
                                {text}
                              </Typography>
                            ))}
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  );
                })}

                {/* 로드맵 카드 */}
                <Grid item xs={12}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={2}
                      sx={{
                        borderRadius: "20px",
                        p: smallMode ? 2.5 : 3.5,
                        borderLeft: `6px solid #6b7280`, // Gray
                        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
                        borderColor: "#6b7280",
                        boxShadow: darkMode
                          ? "0 4px 20px 0 rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255,255,255,0.05)"
                          : "0 8px 30px 0 rgba(233, 236, 245, 0.5), 0 0 1px 1px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold" sx={{ color: "#6b7280", mb: 2, fontFamily: "'Outfit', sans-serif", display: "flex", alignItems: "center", gap: 1 }}>
                        <TimelineIcon /> {language ? roadmapData.titleKo : roadmapData.titleEn}
                      </Typography>

                      <Box sx={{ pl: 0.5 }}>
                        {(language ? roadmapData.phasesKo : roadmapData.phasesEn).map((text, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: darkMode ? "#d1d5db" : "#374151",
                              lineHeight: 1.5,
                              fontSize: "0.85rem",
                              mb: 1.2,
                              display: "flex",
                              alignItems: "flex-start",
                              '&::before': {
                                content: '"•"',
                                marginRight: '8px',
                                flexShrink: 0,
                                color: "#6b7280"
                              }
                            }}
                          >
                            {text}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info (Specification Collapse) */}
        <Box
          sx={{
            mt: 4,
            mb: 2,
            p: 2.5,
            borderRadius: "20px",
            backgroundColor: darkMode ? "#252525" : "#f9fafb",
            border: `1px dashed ${darkMode ? "#444" : "#ddd"}`,
            textAlign: "center",
          }}
        >
          <Box 
            onClick={toggleRawData}
            sx={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 0.5,
              cursor: "pointer", 
              userSelect: "none",
              color: darkMode ? "#90caf9" : "#1976d2",
              '&:hover': {
                textDecoration: "underline"
              }
            }}
          >
            <Typography variant="body2" fontWeight="medium">
              {language
                ? "💡 모든 데이터는 본 저장소의 ai_infra.md 상세 명세서를 기반으로 신뢰성 있게 도출되었습니다. (클릭하여 원본 명세 데이터 보기)"
                : "💡 All architectural patterns are extracted directly from ai_infra.md. (Click to view raw specifications)"}
            </Typography>
            {showRawData ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </Box>

          <Collapse in={showRawData} sx={{ mt: 2 }}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: "12px",
                backgroundColor: darkMode ? "#0f0f0f" : "#f1f3f5",
                border: `1px solid ${darkMode ? "#292929" : "#e2e8f0"}`,
                textAlign: "left",
                overflowX: "auto"
              }}
            >
              <pre
                style={{
                  margin: 0,
                  fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
                  fontSize: smallMode ? "0.7rem" : "0.8rem",
                  color: darkMode ? "#e2e8f0" : "#1e293b",
                  lineHeight: 1.45,
                  whiteSpace: "pre-wrap",
                }}
              >
                {rawInfraText}
              </pre>
            </Paper>
          </Collapse>
        </Box>
      </Box>
    </div>
  );
}
