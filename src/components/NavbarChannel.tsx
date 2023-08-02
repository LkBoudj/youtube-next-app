import React from "react";
import { Btn, Logo } from ".";
import {
  HiOutlineMenu,
  HiOutlineVideoCamera,
  HiOutlineBell,
  HiUserCircle,
} from "react-icons/hi";
import SearchInput from "./input/Input";
type Props = {};

const NavbarChannel = (props: Props) => {
  return (
    <nav className="w-full z-50 fixed top-0 left-0 bg-white flex  items-center px-8  py-3 justify-between">
      <div className="flex items-center space-x-6">
        <Btn className="text-slate-600 " StartIcon={HiOutlineMenu} />
        <Logo channle />
      </div>
      <SearchInput />
      <div className="flex items-center space-x-5 ">
        <Btn className="text-slate-600" StartIcon={HiOutlineVideoCamera} />
        <Btn className="text-slate-600" StartIcon={HiOutlineBell} />
        <Btn
          className="text-slate-50 w-10 h-10 justify-center  bg-slate-800 rounded-full "
          label="lk"
        />
      </div>
    </nav>
  );
};

export default NavbarChannel;
