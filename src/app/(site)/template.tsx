import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <div className="pt-16">
      <Navbar />
      {children}
    </div>
  );
};

export default Template;
