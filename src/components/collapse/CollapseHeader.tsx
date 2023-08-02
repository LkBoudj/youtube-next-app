import clsx from "clsx";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
  items: Array<any>;
  selectedNav: string;
  setSelectNav: Dispatch<SetStateAction<string>>;
};

const CollapseNav = ({
  name,
  selectedNav,
  hamdelClick,
}: {
  name: string;
  selectedNav: string;
  hamdelClick: MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <li
      onClick={hamdelClick}
      className={clsx(
        "border-b-4  transition-all duration-100 ease-linear cursor-pointer hover:opacity-70 py-2",
        name === selectedNav
          ? "text-blue-700  border-blue-600"
          : "border-transparent"
      )}
    >
      {name}
    </li>
  );
};
const CollapseHeader = ({ items, selectedNav, setSelectNav }: Props) => {
  return (
    <ul className="w-full border-b capitalize flex items-center font-medium  space-x-6  text-[14px] ">
      {items.map((item) => (
        <CollapseNav
          key={item}
          name={item}
          selectedNav={selectedNav}
          hamdelClick={() => setSelectNav(item)}
        />
      ))}
    </ul>
  );
};

export default CollapseHeader;
