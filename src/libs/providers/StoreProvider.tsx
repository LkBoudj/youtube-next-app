"use client";
import { UploadVideo } from "@/components";
import { store } from "@/libs/redux/store";
import { Provider } from "react-redux";
const StoreProvider = ({ children }: { children?: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
