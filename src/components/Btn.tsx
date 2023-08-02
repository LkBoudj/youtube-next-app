import React, { MouseEventHandler } from "react";
import type { IconType } from "react-icons";
import clsx from "clsx";
type Props = {
  StartIcon?: IconType;
  EndIcon?: IconType;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
};

const Btn = ({
  type = "button",
  StartIcon,
  EndIcon,
  label,
  children,
  className,
  handelClick,
}: Props) => {
  return (
    <button
      onClick={handelClick}
      className={clsx(`flex items-center  `, className)}
    >
      {StartIcon && <StartIcon className="w-6 h-6" />}
      {label && <span>{label}</span>}
      {children}
      {EndIcon && <EndIcon className="w-6 h-6" />}
    </button>
  );
};

export default Btn;
