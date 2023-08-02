"use client";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { it } from "node:test";
import React from "react";
import { IconType } from "react-icons";
import { MdGridView } from "react-icons/md";
type Props = {};
const AsideStudioHeader = () => {
  return (
    <div className=" text-center flex flex-col items-center  ">
      <div className="transition-all delay-500 ease-in-out opacity-0 lg:opacity-100  transform scale-0 lg:scale-100 space-y-2">
        <div className="flex items-center justify-center text-3xl font-medium text-white w-[112px] h-[112px] rounded-full bg-slate-800">
          <h6>Lk</h6>
        </div>
        <div className="">
          <h3 className="text-sm font-medium">Your channel</h3>
          <h4 className="text-sm">Mr-h</h4>
        </div>
      </div>
    </div>
  );
};

const AsideStudioItem = ({
  link,
  currenLink,
  Icon,
  name,
}: {
  name: string;
  link: string;
  currenLink: string;
  Icon: IconType;
}) => (
  <li>
    <Link
      href={link}
      className={clsx(
        `"capitalize border-l-[5px] px-4 py-3  flex items-center space-x-6 text-sm   `,
        link == currenLink
          ? "bg-slate-50 border-red-800 text-red-800"
          : "border-white "
      )}
    >
      <Icon className="w-[24px] h-[24px]" />
      <span className="hidden lg:block">{name}</span>
    </Link>
  </li>
);
const AsideStudio = (props: Props) => {
  const pathName = usePathname();

  const studioRoter = [
    {
      name: "dashbaord",
      link: "/channel",
      Icon: MdGridView,
    },
    {
      name: "content",
      link: "/channel/content",
      Icon: MdGridView,
    },
    {
      name: "analytic",
      link: "/channel/analytic",
      Icon: MdGridView,
    },
    {
      name: "subtitles",
      link: "/channel/subtitles",
      Icon: MdGridView,
    },
    {
      name: "copyright",
      link: "/channel/copyright",
      Icon: MdGridView,
    },
    {
      name: "earm",
      link: "/channel/earm",
      Icon: MdGridView,
    },
    {
      name: "customization",
      link: "/channel/customization",
      Icon: MdGridView,
    },
    {
      name: "audio library",
      link: "/channel/audio",
      Icon: MdGridView,
    },
  ];
  return (
    <aside className="transition-all delay-50 border-r space-y-6  w-full h-full  overflow-hidden max-w-[71px] lg:max-w-[255px]">
      <AsideStudioHeader />

      <ul className="space-y-2">
        {studioRoter.map((item) => (
          <AsideStudioItem
            key={item.name}
            name={item.name}
            link={item.link}
            currenLink={pathName}
            Icon={item.Icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default AsideStudio;
