import PortfolioContext from "@/context/context";
import { useAppSelector } from "@/context/redux/hooks";
import { Box, Tooltip, Typography, Dialog, IconButton, AppBar, Toolbar, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useState } from "react";
import HistoryTimeline from "../history";
import { TransitionProps } from "@mui/material/transitions";

const textHan = "AI 모델 구조 개선 및 인프라 분산 학습, 추론 최적화의 기술 진화 여정 기록";
const textEng = "Development history of backbone networks, DDP training optimization, and hybrid video inference.";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VisionicNetHistoryPortfolio() {
  const { prefix } = useContext(PortfolioContext);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const language = useAppSelector((state) => state.language.type);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const fontSize = smallMode ? 18 : 32;

  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={handleClickOpen}
        style={{ height: "25vh", width: "20vw" }}
      >
        <Tooltip
          title={smallMode ? "" : language ? `${textHan}` : `${textEng}`}
          arrow
          placement="right"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              height: "100%",
            }}
          >
            <Box
              sx={
                smallMode
                  ? { height: "100%", width: "70vw" }
                  : { height: "100%", width: "16vw" }
              }
            >
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="AI History Thumbnail"
                  src={`${prefix}/image/visionic.png`}
                  width="100%"
                  height="auto"
                  style={
                    smallMode
                      ? {
                          borderRadius: "15px",
                          objectFit: "cover",
                          minWidth: "70vw",
                        }
                      : {
                          borderRadius: "15px",
                          objectFit: "cover",
                          transform: hover ? "scale(1.1)" : "scale(1.0)",
                          transition: "transform 0.3s ease",
                        }
                  }
                />
              </div>
              <Box sx={{ margin: "1rem" }}>
                {language ? (
                  <div>
                    <Typography fontWeight={"bold"}>
                      AI 최적화 여정 히스토리
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {textHan}
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography fontWeight={"bold"}>
                      AI Optimization History
                    </Typography>
                    <Typography
                      fontSize={smallMode ? fontSize * 0.8 : fontSize * 0.4}
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {textEng}
                    </Typography>
                  </div>
                )}
              </Box>
            </Box>
          </Box>
        </Tooltip>
      </div>

      {/* Timeline Modal Dialog */}
      <Dialog
        fullScreen={smallMode}
        maxWidth="lg"
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            backgroundColor: darkMode ? "#121212" : "#fff",
            backgroundImage: "none",
            borderRadius: smallMode ? 0 : "24px",
            overflowY: "auto",
          }
        }}
      >
        <AppBar 
          position="sticky" 
          elevation={0}
          sx={{ 
            backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa", 
            borderBottom: `1px solid ${darkMode ? "#2d2d2d" : "#e5e7eb"}`,
            color: darkMode ? "#fff" : "#000" 
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "'Outfit', sans-serif" }}>
              {language ? "AI 최적화 히스토리 상세 보기" : "AI Optimization History Detail"}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                '&:hover': {
                  backgroundColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: smallMode ? 1 : 3 }}>
          <HistoryTimeline />
        </Box>
      </Dialog>
    </div>
  );
}
