import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PageTypeState = {
  num: number;
  darkMode: boolean;
  smallMode: boolean;
};

const initialState = {
  num: 1,
  darkMode: false,
  smallMode: false,
} as PageTypeState;

export const pageChanger = createSlice({
  name: "pageType",
  initialState,
  reducers: {
    reset: () => initialState,
    changeNum: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    },
    changeSmallMode: (state, action: PayloadAction<boolean>) => {
      state.smallMode = action.payload;
    },
    changeDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { changeNum, changeSmallMode, changeDarkMode, reset } =
  pageChanger.actions;
export default pageChanger.reducer;
