"use client";
import { AsideStudio, UploadVideo } from "@/components";
import NavbarChannel from "@/components/NavbarChannel";
import { useSelector } from "react-redux";
import { uploadVideoStatuts } from "@/libs/redux/slices/settings";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  const uploadVideo = useSelector(uploadVideoStatuts);
  return (
    <div className=" h-screen ">
      {uploadVideo && <UploadVideo />}
      <NavbarChannel />
      <div className="flex  w-full h-full">
        <AsideStudio />
        <div className="pt-24  w-full">{children}</div>
      </div>
    </div>
  );
};

export default Template;
