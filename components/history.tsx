import React, { useState } from "react";
import { useAppSelector } from "@/context/redux/hooks";
import { Typography, Divider, Paper, Box, Grid, Tabs, Tab, Collapse } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MemoryIcon from "@mui/icons-material/Memory";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BuildIcon from "@mui/icons-material/Build";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// 탭 1: 모델 아키텍처 진화 인터페이스
interface ModelVersionItem {
  version: string;
  titleKo: string;
  titleEn: string;
  changeKo: string;
  changeEn: string;
  params: string;
  latency: string;
  featuresKo: string[];
  featuresEn: string[];
  color: string;
}

// 탭 2: 학습 히스토리 인터페이스
interface TrainingItem {
  phase: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  problemKo: string[];
  problemEn: string[];
  solutionKo: string[];
  solutionEn: string[];
  resultKo: string[];
  resultEn: string[];
  icon: React.ReactNode;
  color: string;
  badgeKo: string;
  badgeEn: string;
}

export default function HistoryTimeline() {
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const language = useAppSelector((state) => state.language.type); // true: KOR, false: ENG

  // activeTab = 0: 모델 아키텍처 진화 (기본값)
  // activeTab = 1: 학습 히스토리
  const [activeTab, setActiveTab] = useState(0);
  const [showRawData, setShowRawData] = useState(false);

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const toggleRawData = () => {
    setShowRawData(!showRawData);
  };

  // 탭 1 데이터: 모델 구조 자체의 진화 과정 (6.x 버전 삭제: V3, V4, V5, V6, V7 복구 및 정리)
  const modelVersionData: ModelVersionItem[] = [
    {
      version: "V3",
      titleKo: "대형 커널 설계 기반 아키텍처 (시작점)",
      titleEn: "Large Kernel Base Architecture",
      changeKo: "PATConvV3 대형 커널(7x7) 전 단계 배치, 채널수 [80, 144, 192]",
      changeEn: "PATConvV3 7x7 large kernel on all stages, channels [80, 144, 192]",
      params: "1.80M",
      latency: "196% (대비 YOLO)",
      featuresKo: [
        "대형 receptive field를 갖는 독자적인 PATConv 합성곱 구조 설계",
        "연산 및 매개변수 집약도가 과도하여 추론 지연 및 리소스 오버헤드 큼"
      ],
      featuresEn: [
        "First implementation of custom PATConv blocks with a large receptive field",
        "High compute complexity leading to high latency and hardware overhead"
      ],
      color: "#3b82f6",
    },
    {
      version: "V4",
      titleKo: "깊이 밸런스 조정 버전",
      titleEn: "Depth-Balanced Variant",
      changeKo: "V3 대비 P3 및 P5 블록 깊이(depth) 1단계 증가 (+1)",
      changeEn: "Increased depth of P3 and P5 stages by +1 from V3 baseline",
      params: "1.65M",
      latency: "155% (대비 YOLO)",
      featuresKo: [
        "블록 깊이(depth) 가감을 통한 파라미터 경량화 설계 시도",
        "네트워크 깊이 밸런싱을 통해 파라미터 수 및 연산 지연시간 일부 단축"
      ],
      featuresEn: [
        "Explored weight reduction by adjusting specific stage depths",
        "Optimized latency from 196% to 155% through depth rebalancing"
      ],
      color: "#8b5cf6",
    },
    {
      version: "V5",
      titleKo: "새 모델 라우팅 및 튜닝 기반 모델",
      titleEn: "Recipe Tuning Base Model",
      changeKo: "학습 인프라 v5 대응을 위한 lkrep_v6 모델 아키텍처 정비",
      changeEn: "Aligned backbone components for the v5 optimized training recipe",
      params: "1.61M",
      latency: "131% (대비 YOLO)",
      featuresKo: [
        "Augmentation 및 scheduler 변경에 대응하여 backbone 채널 재조정",
        "수렴 안정성을 위해 모델 포스트프로세싱과의 채널 매칭 정비"
      ],
      featuresEn: [
        "Realigned backbone channels to match the optimized training augmentations",
        "Stabilized convergence curves under the revised learning rate scheduler"
      ],
      color: "#ec4899",
    },
    {
      version: "V6",
      titleKo: "가변 커널 및 경량 블록 최적화",
      titleEn: "Flexible Kernel & Stage Optimization",
      changeKo: "LKRepDWFlexible 가변 커널(k=3/5/7) 도입 및 4->3 블록 경량화",
      changeEn: "LKRepDWFlexible kernels (k=3/5/7) and reduced block stages (4 to 3)",
      params: "1.10M",
      latency: "115% (대비 YOLO)",
      featuresKo: [
        "가변 크기 depthwise 대형 커널 도입으로 공간 정보 추출 유연성 확보",
        "연산 지연이 큰 공간 어텐션 모듈을 배제하고 블록 수를 감축하여 엣지 하드웨어 최적화"
      ],
      featuresEn: [
        "Dynamic depthwise kernels allowed adaptive spatial feature learning",
        "Removed high-latency attention units and compressed stages to yield a faster edge profile"
      ],
      color: "#06b6d4",
    },
    {
      version: "V7",
      titleKo: "설계 철학 복원 모델 (최종 성과)",
      titleEn: "Philosophy Restored Backbone (Final)",
      changeKo: "MBConv 블록을 독자 설계한 PATConvV5(LKRep+PWConv 2개 MLP)로 대체",
      changeEn: "Replaced MBConv blocks with custom PATConvV5 (LKRep + twin PWConv MLPs)",
      params: "1.20M (전체 2.49M)",
      latency: "106% (대비 YOLO, 44ms대)",
      featuresKo: [
        "사용자의 오리지널 설계 철학(PWConv 위주 + 대형 커널 reparameterization) 완벽 복원",
        "ONNX Runtime 변환 시 reparameterization fuse 처리를 거쳐 단일 연산자로 23.20ms 추론 성과 확인",
        "정확도와 실시간 추론 속도 양면에서 최상의 파레토 최적 효율 확보"
      ],
      featuresEn: [
        "Successfully revived the original design philosophy: PWConv-heavy + LK reparameterization",
        "Fused into a clean single operator under ONNX Runtime, clocking a record 23.20ms",
        "Achieved the best balance between accuracy and inference latency"
      ],
      color: "#10b981",
    },
  ];

  // 탭 2 데이터: 학습 히스토리 (Phase 1 ~ Phase 5)
  const trainingData: TrainingItem[] = [
    {
      phase: "Phase 1",
      titleKo: "기초 인프라 구축 및 데이터 Augmentation 도입 (v1 ~ v2)",
      titleEn: "Core Infrastructure & Advanced Augmentation (v1 ~ v2)",
      summaryKo: "YOLOv8 수준의 독자적인 AI 객체 탐지 학습 루프를 확보하고, 복합 증강 기법을 시도하여 학습 기반을 닦았습니다.",
      summaryEn: "Established a self-contained YOLOv8-compatible training loop with DDP support and advanced data augmentations.",
      problemKo: [
        "단순 letterbox 전처리만 사용해 데이터 다양성이 크게 부족",
        "모델 학습 성능의 한계 봉착 (mAP ~0.20)"
      ],
      problemEn: [
        "Low data diversity from basic letterbox preprocessing",
        "Stagnant baseline model performance (mAP ~0.20)"
      ],
      solutionKo: [
        "accelerate 라이브러리를 활용해 multi-GPU DDP 학습 환경 구축",
        "Mosaic(4장 합성), Random Affine, Copy-Paste를 탑재한 COCODetDatasetV2 도입"
      ],
      solutionEn: [
        "Configured multi-GPU DDP environment using 'accelerate'",
        "Adopted Mosaic, Random Affine, and Copy-Paste via COCODetDatasetV2"
      ],
      resultKo: [
        "mAP@50-95 기준 0.22로 베이스라인 성능 향상",
        "heavy augmentation 적용으로 CPU bound 데이터 로딩 병목 현상 시작",
        "과도한 close_mosaic 설정(150 epoch)으로 후반 과적합 누수 식별"
      ],
      resultEn: [
        "mAP@50-95 increased to 0.22",
        "Triggered CPU bound loading bottleneck due to heavy augmentations",
        "Late-stage overfitting leakage from high close_mosaic (150 epochs)"
      ],
      icon: <BuildIcon />,
      color: "#3b82f6",
      badgeKo: "기초 인프라",
      badgeEn: "Core Infra",
    },
    {
      phase: "Phase 2",
      titleKo: "Multi-scale 학습 및 LR 스케줄러 고도화 (v3 ~ v4)",
      titleEn: "Multi-scale Training & Cosine Scheduling (v3 ~ v4)",
      summaryKo: "다양한 이미지 입력 크기에 대응하도록 스케일 불변성을 확보하고 학습 수렴 품질을 극대화했습니다.",
      summaryEn: "Promoted scale invariance and improved optimization convergence through advanced learning rate scheduling.",
      problemKo: [
        "고정 640 해상도 학습으로 다양한 크기의 객체 탐지 한계",
        "고정 LR 및 단순 Step decay로 후반 미세 수렴 품질 저하",
        "새 백본 구조 도입 시 초반부 Gradient explosion 발산 발생"
      ],
      problemEn: [
        "Poor generalization on multi-scale objects from fixed 640 size",
        "Suboptimal late-stage convergence from plain LR policies",
        "Early-stage gradient explosion on new architecture branches"
      ],
      solutionKo: [
        "448~736 범위의 동적 Multi-scale 학습 도입",
        "Warmup + Cosine Annealing 스케줄러 적용",
        "grad_clip 강화 (10.0 -> 5.0) 및 reg_max=16 설정 고정"
      ],
      solutionEn: [
        "Introduced dynamic multi-scale sizing (448–736)",
        "Applied Warmup + Cosine Annealing scheduler",
        "Tightened grad_clip (10.0 to 5.0) and fixed reg_max=16"
      ],
      resultKo: [
        "크기 변화 강건성 확보로 peak mAP 0.32 도달",
        "해상도 동기화(dist.broadcast) 통신 비용으로 GPU idle 대기 오버헤드 유발",
        "close_mosaic(150) 설정 오류 유지로 후반 성능이 0.28로 급락하는 현상 발생"
      ],
      resultEn: [
        "Peak performance reached 0.32 mAP with robust scale-invariance",
        "Introduced GPU idle overhead due to step-wise dist.broadcast resolution sync",
        "Suboptimal close_mosaic caused mAP to drop to 0.28 late in training"
      ],
      icon: <AutoGraphIcon />,
      color: "#8b5cf6",
      badgeKo: "스케일 & 스케줄러",
      badgeEn: "Scale & Scheduling",
    },
    {
      phase: "Phase 3",
      titleKo: "파라미터 튜닝 및 학습 파이프라인 정상화 (v5)",
      titleEn: "Hyperparameter Tuning & Single Loader (v5)",
      summaryKo: "v4까지의 심각한 정확도 하락 누수 지점을 차단하고, 중복 데이터 로더 구조를 개선하여 리소스 소모를 절감했습니다.",
      summaryEn: "Corrected structural bottlenecks and resource leaks, resolving the overfitting observed in Phase 2.",
      problemKo: [
        "close_mosaic 오설정(150)에 따른 후반부 과적합 누수 해결 필요",
        "학습/미세조정에 따른 이중 데이터 로더 사용으로 과도한 CPU 워커 및 메모리 소모"
      ],
      problemEn: [
        "Need to prevent late-stage overfitting from loose close_mosaic (150)",
        "Dual loaders for training/fine-tuning wasted memory and worker processes"
      ],
      solutionKo: [
        "close_mosaic 적용 시점을 마지막 10 epoch로 변경 및 weight decay 강화(5e-4)",
        "공유 변수(mp.Value) 제어 플래그 기반 단일 데이터 로더 아키텍처 개량"
      ],
      solutionEn: [
        "Set close_mosaic to last 10 epochs and strengthened weight decay to 5e-4",
        "Refactored into a single-loader with shared mp.Value flags to toggle augmentations"
      ],
      resultKo: [
        "후반부 과적합으로 인한 성능 하락 방어 및 안정적 수렴 회복",
        "데이터 로더 개량으로 워커 프로세스 50% 절감",
        "EMA 모델 업데이트가 rank 0에 집중되는 DDP 병목 잔존"
      ],
      resultEn: [
        "Prevented late-stage mAP degradation and restored convergence stability",
        "Saved 50% of CPU worker processes by loader integration",
        "DDP load imbalance remained due to Rank 0-only EMA updates"
      ],
      icon: <SettingsSuggestIcon />,
      color: "#ec4899",
      badgeKo: "파라미터 & 메모리 최적화",
      badgeEn: "Params & Memory Opt",
    },
    {
      phase: "Phase 4",
      titleKo: "백본 아키텍처의 점진적 진화 (V3 ~ V7)",
      titleEn: "Backbone Architecture Evolution (V3 ~ V7)",
      summaryKo: "파라미터 수는 대폭 삭감하면서도 정확도를 유지하는 고효율의 경량 백본을 독자적으로 재설계해 나갔습니다.",
      summaryEn: "Iterated through multiple structural variants to achieve a lightweight yet high-performance custom backbone.",
      problemKo: [
        "초기 V3 백본의 대형 커널(7x7) 전면 배치로 인한 파라미터 과다 (1.80M)",
        "지연 시간(Latency)이 YOLO 대비 196% 수준으로 연산 리소스 부담"
      ],
      problemEn: [
        "Excessive backbone parameters (1.80M) from large 7x7 kernels",
        "High inference latency (196% compared to YOLO baseline)"
      ],
      solutionKo: [
        "V4(P3/P5 깊이 가감) 및 V6.0(LKRepDWFlexible 커널 + 공간 어텐션 슬림화) 도입",
        "MBConv 결합(V6.2)을 거쳐 오리지널 설계(LKRep+PWConv) 기반 PATConvV5 V7 백본 설계"
      ],
      solutionEn: [
        "Adjusted P3/P5 depths (V4) and slimmed spatial attention (V6.0)",
        "Integrated MBConv (V6.2) and finalized V7 backbone with PATConvV5"
      ],
      resultKo: [
        "백본 파라미터를 1.20M으로 경량화 달성",
        "PyTorch CPU 지연 시간을 YOLO 대비 106% 수준(44.08ms)으로 극적 단축",
        "ONNX Runtime 변환 시 reparameterization fuse 덕분에 23.20ms 추론 성능 달성"
      ],
      resultEn: [
        "Slimmed backbone parameters to 1.20M",
        "Latency reduced to 106% of YOLO (44.08ms on PyTorch CPU)",
        "Reparameterization fusion enabled a fast 23.20ms inference under ONNX"
      ],
      icon: <MemoryIcon />,
      color: "#f59e0b",
      badgeKo: "백본 경량화",
      badgeEn: "Backbone Slimming",
    },
    {
      phase: "Phase 5",
      titleKo: "GPU 활용률 극대화 및 최고 성능 달성 (v6 & v7 fine-tuning)",
      titleEn: "Zero-Bottleneck DDP & V7 Fine-tuning (v6)",
      summaryKo: "DDP 통신과 CPU 데이터 전처리 병목을 완전히 박멸하여 연산 속도를 가속하고 최종 mAP@50-95 = 0.3422를 기록했습니다.",
      summaryEn: "Maximized GPU utilization by resolving CPU and DDP communication overheads, leading to a record mAP.",
      problemKo: [
        "PIL 기반 전처리 오버헤드로 GPU 평균 활용률 50% 미만 정체 (CPU bound)",
        "DDP 동기화(broadcast, all_reduce) 및 rank 0 편향 EMA 연산으로 throughput 저하"
      ],
      problemEn: [
        "PIL augmentations caused CPU bound (GPU utilization under 50%)",
        "DDP sync operations (broadcast, all_reduce) and single EMA updates stalled throughput"
      ],
      solutionKo: [
        "OpenCV+NumPy 기반 고속 전처리 파이프라인(COCODetDatasetV4) 전환",
        "결정론적 난수 시드로 dist.broadcast 제거 및 gradient norm NaN 검사로 dist.all_reduce 생략",
        "EMA 업데이트를 모든 GPU rank에서 병렬 및 독립적으로 연산하도록 구조 변경"
      ],
      solutionEn: [
        "Migrated to OpenCV/NumPy-based COCODetDatasetV4 pipeline",
        "Replaced DDP broadcasts with deterministic seed and skipped NaN syncs with grad norm",
        "Decentralized EMA updates to run independently across all ranks"
      ],
      resultKo: [
        "GPU 평균 활용률 70~80% 수준으로 비약적 향상",
        "V7 300 epoch 학습 후 10 epoch 추가 close_mosaic 미세 조정 적용",
        "최종 mAP@50-95 = 0.3422 (+0.0093 mAP 향상) 최고 수렴 성과 획득"
      ],
      resultEn: [
        "GPU utilization increased to 70–80%",
        "Applied 10-epoch close_mosaic fine-tuning after 300-epoch training",
        "Achieved a record mAP@50-95 of 0.3422 (+0.0093 mAP gain)"
      ],
      icon: <IntegrationInstructionsIcon />,
      color: "#10b981",
      badgeKo: "DDP & GPU 최적화",
      badgeEn: "DDP & GPU Opt",
    },
  ];

  // Raw 데이터 텍스트 정의
  const rawBenchmarkText = `=========================================================================================================
  [PyTorch CPU Backbone Benchmark]
  넥: PAFPN(out=128ch) | 헤드: DecoupledHead(64ch) | 구조 완전 동일 (YOLOv8n 대비 성능 측정)
=========================================================================================================
  백본                   백본 파라미터       전체 파라미터            지연(ms)     YOLOv8n 대비
---------------------------------------------------------------------------------------------------------
  yolov8n               1.27M        2.57M        39.36ms        100.0%
  lkrep                 0.84M        2.12M        43.25ms        109.9%
  lkrep_v2              0.79M        2.07M        41.28ms        104.9%
  lkrep_v3              1.80M        3.10M        52.55ms        133.5%
  lkrep_v4              1.65M        2.94M        53.10ms        134.9%
  lkrep_v6              1.10M        2.39M        43.95ms        111.7%
  lkrep_v7              1.20M        2.49M        43.65ms        110.9%
  lkrep_v9              1.20M        2.49M        43.80ms        111.3%
  patnet                1.04M        2.32M        54.25ms        137.8%
  mobilenetv4           1.26M        2.79M        44.22ms        112.4%
=========================================================================================================

=========================================================================================================
  [ONNX Runtime CPU Backbone Benchmark] (reparameterization fuse 적용 후)
=========================================================================================================
  백본                   백본 파라미터       전체 파라미터            지연(ms)     YOLOv8n 대비
---------------------------------------------------------------------------------------------------------
  yolov8n               1.27M        2.57M        20.11ms        100.0%
  lkrep                 0.84M        2.12M        21.04ms        104.6%
  lkrep_v2              0.79M        2.07M        20.20ms        100.5%
  lkrep_v3              1.80M        3.10M        30.05ms        149.5%
  lkrep_v4              1.65M        2.94M        28.42ms        141.4%
  lkrep_v6              1.10M        2.39M        24.43ms        121.5%
  lkrep_v7              1.20M        2.49M        23.20ms        115.4%
=========================================================================================================`;

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
            {language ? "AI 모델 & 인프라 최적화 히스토리" : "AI Model & Infra Optimization History"}
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
              ? "객체 탐지 인공지능 백본 설계 진화와 DDP/CPU 분산 병렬 학습 환경의 병목 제거 여정입니다."
              : "A detailed journey of backbone architecture evolution and eliminating DDP/CPU training bottlenecks."}
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
            aria-label="history tabs"
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
            <Tab label={language ? "모델 아키텍처 진화" : "Model Architecture Evolution"} />
            <Tab label={language ? "학습 히스토리" : "Training History"} />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="model-tab"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
            >
              {/* 탭 1: 모델 아키텍처 진화 히스토리 (V3, V4, V5, V6, V7) */}
              <Grid container spacing={3}>
                {modelVersionData.map((item, index) => {
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
                          {/* Header section inside card */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: 1,
                              mb: 1.5,
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                                <ArchitectureIcon />
                              </Box>
                              <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{
                                  color: item.color,
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: "1.4rem"
                                }}
                              >
                                {item.version}
                              </Typography>
                              <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{
                                  color: darkMode ? "#f3f4f6" : "#111827",
                                  fontSize: smallMode ? "1.0rem" : "1.2rem",
                                }}
                              >
                                {language ? item.titleKo : item.titleEn}
                              </Typography>
                            </Box>
                          </Box>

                          {/* 구조 변경 상세 설명 */}
                          <Typography
                            variant="subtitle1"
                            fontWeight="medium"
                            sx={{
                              color: darkMode ? "#9ca3af" : "#4b5563",
                              fontSize: "0.9rem",
                              mb: 2,
                              fontStyle: "italic"
                            }}
                          >
                            🔄 {language ? "주요 변경점:" : "Key Change:"} {language ? item.changeKo : item.changeEn}
                          </Typography>

                          <Divider sx={{ my: 1.5, borderColor: darkMode ? "#333" : "#eee" }} />

                          {/* 지표와 특징 카드 분할 */}
                          <Grid container spacing={2}>
                            {/* 모델 스펙 지표 */}
                            <Grid item xs={12} md={4}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  height: "100%",
                                  borderRadius: "15px",
                                  backgroundColor: darkMode ? "#252525" : "#f9fafb",
                                  border: `1px solid ${darkMode ? "#333" : "#e5e7eb"}`
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{ color: darkMode ? "#ccc" : "#444", mb: 1.5 }}
                                >
                                  📊 {language ? "모델 스펙 지표" : "Model Metrics"}
                                </Typography>
                                <Box sx={{ mb: 1 }}>
                                  <Typography variant="caption" sx={{ color: darkMode ? "#aaa" : "#777", display: "block" }}>
                                    {language ? "백본 파라미터 수" : "Backbone Params"}
                                  </Typography>
                                  <Typography variant="body2" fontWeight="bold" sx={{ color: darkMode ? "#fff" : "#111" }}>
                                    {item.params}
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography variant="caption" sx={{ color: darkMode ? "#aaa" : "#777", display: "block" }}>
                                    {language ? "추론 지연 시간" : "Inference Latency"}
                                  </Typography>
                                  <Typography variant="body2" fontWeight="bold" sx={{ color: darkMode ? "#fff" : "#111" }}>
                                    {item.latency}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>

                            {/* 설계 및 결과 분석 특징 */}
                            <Grid item xs={12} md={8}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  height: "100%",
                                  borderRadius: "15px",
                                  backgroundColor: darkMode ? "#1e222b" : "#f0f4f8",
                                  border: `1px solid ${darkMode ? "#293241" : "#d0dce5"}`
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{ color: darkMode ? "#90caf9" : "#1565c0", mb: 1.5 }}
                                >
                                  🔍 {language ? "설계 분석 및 특징" : "Design Review & Features"}
                                </Typography>
                                <Box sx={{ pl: 0.5 }}>
                                  {(language ? item.featuresKo : item.featuresEn).map((feat, idx) => (
                                    <Typography
                                      key={idx}
                                      variant="body2"
                                      sx={{
                                        color: darkMode ? "#90caf9" : "#1e40af",
                                        lineHeight: 1.4,
                                        fontSize: "0.82rem",
                                        mb: 0.8,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        '&::before': {
                                          content: '"•"',
                                          marginRight: '6px',
                                          flexShrink: 0
                                        }
                                      }}
                                    >
                                      {feat}
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
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
              key="training-tab"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
            >
              {/* 탭 2: 학습 히스토리 */}
              <Grid container spacing={3}>
                {trainingData.map((item, index) => {
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
                          {/* Badge and Phase */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: 1,
                              mb: 1.5,
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                              <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{
                                  color: item.color,
                                  fontFamily: "'Outfit', sans-serif",
                                }}
                              >
                                {item.phase}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                px: 1.5,
                                py: 0.3,
                                borderRadius: "20px",
                                backgroundColor: `${item.color}15`,
                                border: `1px solid ${item.color}44`,
                              }}
                            >
                              <Typography
                                variant="caption"
                                fontWeight="bold"
                                sx={{ color: item.color, fontSize: "0.7rem" }}
                              >
                                {language ? item.badgeKo : item.badgeEn}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Title */}
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{
                              color: darkMode ? "#f3f4f6" : "#111827",
                              fontSize: smallMode ? "1.1rem" : "1.3rem",
                              mb: 1,
                            }}
                          >
                            {language ? item.titleKo : item.titleEn}
                          </Typography>

                          {/* Summary */}
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? "#d1d5db" : "#374151",
                              fontSize: "0.9rem",
                              mb: 2,
                              fontWeight: 500,
                              lineHeight: 1.5,
                            }}
                          >
                            {language ? item.summaryKo : item.summaryEn}
                          </Typography>

                          <Divider sx={{ my: 1.5, borderColor: darkMode ? "#333" : "#eee" }} />

                          {/* Problem, Solution, Result layout */}
                          <Grid container spacing={2} sx={{ mt: 0.5 }}>
                            {/* Problem Card */}
                            <Grid item xs={12} md={4}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  height: "100%",
                                  borderRadius: "15px",
                                  backgroundColor: darkMode ? "#2a1e1e" : "#fef2f2",
                                  border: `1px solid ${darkMode ? "#4c2c2c" : "#fee2e2"}`,
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{
                                    color: darkMode ? "#f87171" : "#dc2626",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    mb: 1,
                                  }}
                                >
                                  🚨 {language ? "직면한 문제" : "Challenge"}
                                </Typography>
                                <Box sx={{ pl: 0.5 }}>
                                  {(language ? item.problemKo : item.problemEn).map((text, idx) => (
                                    <Typography
                                      key={idx}
                                      variant="body2"
                                      sx={{
                                        color: darkMode ? "#fca5a5" : "#991b1b",
                                        lineHeight: 1.4,
                                        fontSize: "0.82rem",
                                        mb: 0.8,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        '&::before': {
                                          content: '"•"',
                                          marginRight: '6px',
                                          flexShrink: 0
                                        }
                                      }}
                                    >
                                      {text}
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            </Grid>

                            {/* Solution Card */}
                            <Grid item xs={12} md={4}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  height: "100%",
                                  borderRadius: "15px",
                                  backgroundColor: darkMode ? "#1e243a" : "#eff6ff",
                                  border: `1px solid ${darkMode ? "#293766" : "#dbeafe"}`,
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{
                                    color: darkMode ? "#60a5fa" : "#2563eb",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    mb: 1,
                                  }}
                                >
                                  💡 {language ? "해결 방안" : "Approach"}
                                </Typography>
                                <Box sx={{ pl: 0.5 }}>
                                  {(language ? item.solutionKo : item.solutionEn).map((text, idx) => (
                                    <Typography
                                      key={idx}
                                      variant="body2"
                                      sx={{
                                        color: darkMode ? "#93c5fd" : "#1e40af",
                                        lineHeight: 1.4,
                                        fontSize: "0.82rem",
                                        mb: 0.8,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        '&::before': {
                                          content: '"•"',
                                          marginRight: '6px',
                                          flexShrink: 0
                                        }
                                      }}
                                    >
                                      {text}
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            </Grid>

                            {/* Result Card */}
                            <Grid item xs={12} md={4}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  height: "100%",
                                  borderRadius: "15px",
                                  backgroundColor: darkMode ? "#1e2e28" : "#f0fdf4",
                                  border: `1px solid ${darkMode ? "#244c3c" : "#dcfce7"}`,
                                }}
                              >
                                <Typography
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{
                                    color: darkMode ? "#34d399" : "#16a34a",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    mb: 1,
                                  }}
                                >
                                  ✅ {language ? "얻은 성과" : "Outcome"}
                                </Typography>
                                <Box sx={{ pl: 0.5 }}>
                                  {(language ? item.resultKo : item.resultEn).map((text, idx) => (
                                    <Typography
                                      key={idx}
                                      variant="body2"
                                      sx={{
                                        color: darkMode ? "#86efac" : "#166534",
                                        lineHeight: 1.4,
                                        fontSize: "0.82rem",
                                        mb: 0.8,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        '&::before': {
                                          content: '"•"',
                                          marginRight: '6px',
                                          flexShrink: 0
                                        }
                                      }}
                                    >
                                      {text}
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Paper>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info (Brief Benchmark) */}
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
                ? "💡 모든 데이터는 본 저장소의 backbone_benchmark.py 실행 결과를 기반으로 작성되었습니다. (클릭하여 벤치마크 원문 로그 보기)"
                : "💡 All timeline records are based on backbone_benchmark.py execution logs. (Click to view raw logs)"}
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
                {rawBenchmarkText}
              </pre>
            </Paper>
          </Collapse>
        </Box>
      </Box>
    </div>
  );
}
