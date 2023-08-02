"use client";
import { usePathname } from "next/navigation";
import AsideStudioHeader from "./AsideStudioHeader";
import AsideStudioItem from "./AsideStudioItem";
import { RootState } from "@/libs/redux/store";
import { studioRoter } from "@/libs/static/stodio";
import {
  uploadVideoStatuts,
  asideStudioStatuts,
} from "@/libs/redux/slices/settings";
import { useSelector } from "react-redux";
import clsx from "clsx";

type Props = {};

const AsideStudio = (props: Props) => {
  const pathName = usePathname();
  const asideToggel = useSelector(asideStudioStatuts);
  //   w-full h-full  overflow-hidden max-w-[71px] lg:max-w-[255px]
  return (
    <div
      className={clsx(
        "lg:max-w-[255px]",
        asideToggel &&
          "w-full bg-black lg:bg-transparent bg-opacity-50 z-40  h-full fixed lg:static"
      )}
    >
      <aside
        className={clsx(
          `pt-20 shadow bg-white transition-all h-full border-r space-y-4 overflow-hidden `,
          asideToggel ? "w-full  max-w-[255px]" : " max-w-[71px]"
        )}
      >
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
    </div>
  );
};

export default AsideStudio;
