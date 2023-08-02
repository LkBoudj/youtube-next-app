import { AsideStudio } from "@/components";
import NavbarChannel from "@/components/NavbarChannel";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <div className="py-20 h-screen ">
      <NavbarChannel />
      <div className="flex w-full h-full">
        <AsideStudio />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Template;
