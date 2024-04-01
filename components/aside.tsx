import PortfolioContext from "@/context/context";
import {
  Paper,
  Divider,
  Typography,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Collapse,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useAppSelector } from "@/context/redux/hooks";

const MainAside = () => {
  const { prefix }: any = useContext(PortfolioContext);
  const smallMode = useAppSelector((state) => state.page.smallMode);
  const darkMode = useAppSelector((state) => state.page.darkMode);
  const fontSize = smallMode ? 18 : 32;

  const [listOpen, setListOpen] = useState(smallMode ? false : true);
  const moveToUrl = (url: string) => {
    window.open(url);
  };
  return (
    <div style={{ padding: "1rem", marginTop: "3.9rem" }}>
      <Paper elevation={3} style={{ borderRadius: "25px", padding: "1rem" }}>
        <Stack
          direction={!smallMode ? "column" : "row"}
          style={{
            padding: "0.5rem",
            textAlign: smallMode ? "left" : "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#f4f5ff",
              margin: "1rem",
              borderRadius: "25px",
            }}
          >
            <img src={`${prefix}/image/personal.png`} />
          </div>

          <Typography
            variant="button"
            display={"block"}
            fontSize={fontSize * 0.8}
          >
            Sonjuhy
          </Typography>
        </Stack>
        <Divider variant="middle" />
        <div style={{ padding: "0.5rem" }}>
          {smallMode ? (
            <div>
              <Button
                onClick={() => {
                  setListOpen(!listOpen);
                }}
              >
                {listOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Collapse in={listOpen} unmountOnExit={true}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: !darkMode ? "#f4f5ff" : "#121212",
                    boxShadow: !darkMode
                      ? "0 0 3px 0 rgba(34, 34, 34, 1)"
                      : "0 0 15px 0 rgba(1, 1, 1, 1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill={darkMode ? "#f4f5ff" : "#121212"}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="E-MAIL" secondary="sonjuhy@gmail.com" />
            </ListItem>
            <ListItem
              style={{ cursor: "pointer" }}
              onClick={() => {
                moveToUrl("https://github.com/sonjuhy");
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: !darkMode ? "#f4f5ff" : "#121212",
                    boxShadow: !darkMode
                      ? "0 0 3px 0 rgba(34, 34, 34, 1)"
                      : "0 0 15px 0 rgba(1, 1, 1, 1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill={darkMode ? "#f4f5ff" : "#121212"}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="GitHub" secondary="Click to Move" />
            </ListItem>
            <ListItem
              style={{ cursor: "pointer" }}
              onClick={() => {
                moveToUrl("https://sonjuhy.tistory.com/");
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: !darkMode ? "#f4f5ff" : "#121212",
                    boxShadow: !darkMode
                      ? "0 0 3px 0 rgba(34, 34, 34, 1)"
                      : "0 0 15px 0 rgba(1, 1, 1, 1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={darkMode ? "#f4f5ff" : "#121212"}
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.407 10.516h-.975c-.5 0-.592-.382-.592-.854.001-2.023-1.636-3.662-3.655-3.662h-2.53c-2.018 0-3.655 1.639-3.655 3.662v4.676c0 2.023 1.637 3.662 3.654 3.662h4.692c2.017 0 3.654-1.639 3.654-3.662v-3.229c0-.328-.267-.593-.593-.593zm-7.714-1.516h2.113c.384 0 .694.335.694.75s-.31.75-.693.75h-2.114c-.382 0-.693-.335-.693-.75s.311-.75.693-.75zm4.566 6h-4.519c-.409 0-.74-.335-.74-.75 0-.414.331-.75.74-.75h4.519c.41 0 .741.335.741.75s-.331.75-.741.75z" />
                  </svg>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Blog" secondary="Click to Move" />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
    </div>
  );
};

export default MainAside;
