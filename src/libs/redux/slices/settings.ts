import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  studioSide: boolean;
};
const initialState = {
  asideStudio: true,
  uploadVideo: false,
};
const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleAsideStudio: (state) => {
      state.asideStudio = !state.asideStudio;
    },
    toggleUploadVideo: (state) => {
      state.uploadVideo = !state.uploadVideo;
      console.log(state.uploadVideo);
    },
  },
});

export const { toggleAsideStudio, toggleUploadVideo } = settings.actions;

export const asideStudioStatuts = (state: RootState) =>
  state.settings.asideStudio;

export const uploadVideoStatuts = (state: RootState) =>
  state.settings.uploadVideo;
export default settings.reducer;
