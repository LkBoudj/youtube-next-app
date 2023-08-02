import clsx from "clsx";
import React from "react";
import { IconType } from "react-icons";
import { HiSearch } from "react-icons/hi";
type Props = {
  className?: string;
};

const Input = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        `hidden lg:w-full max-w-xl h-[40px] overflow-hidden md:flex items-center justify-between border border-slate-400 rounded-full`,
        className
      )}
    >
      <input
        type="search"
        className=" focus:outline-none w-full px-6 h-full"
        placeholder="Search ..."
      />
      <div className="bg-slate-100 w-24 flex items-center justify-center h-full">
        <HiSearch className=" w-6 h-6" />
      </div>
    </div>
  );
};

export default Input;
