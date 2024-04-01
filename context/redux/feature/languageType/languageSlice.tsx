import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageTypeState = {
  type: boolean;
};

const initialState = {
  type: false,
} as LanguageTypeState;

export const pageChanger = createSlice({
  name: "pageType",
  initialState,
  reducers: {
    reset: () => initialState,
    changeLanguageMode: (state, action: PayloadAction<boolean>) => {
      state.type = action.payload;
    },
  },
});

export const { changeLanguageMode, reset } = pageChanger.actions;
export default pageChanger.reducer;
