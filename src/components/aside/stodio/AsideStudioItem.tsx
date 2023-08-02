"use cleint";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

import { RootState } from "@/libs/redux/store";
import { useSelector } from "react-redux";
type Props = {
  name: string;
  link: string;
  currenLink: string;
  Icon: IconType;
};
const AsideStudioItem = ({ link, currenLink, Icon, name }: Props) => {
  const asideToggel = useSelector(
    (state: RootState) => state.settings.asideStudio
  );
  return (
    <li>
      <Link
        href={link}
        className={clsx(
          `capitalize border-l-[5px] px-4 py-3  flex items-center space-x-6 text-sm   `,
          link == currenLink
            ? "bg-slate-50 border-red-800 text-red-800"
            : "border-white "
        )}
      >
        <div>
          <Icon className="w-[24px] h-[24px]" />
        </div>
        <span className={clsx(asideToggel ? "lg:block" : "hidden")}>
          {name}
        </span>
      </Link>
    </li>
  );
};

export default AsideStudioItem;
