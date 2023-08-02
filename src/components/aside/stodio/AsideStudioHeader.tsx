"use cleint";
import { RootState } from "@/libs/redux/store";
import { useSelector } from "react-redux";
import clsx from "clsx";

const AsideStudioHeader = () => {
  const asideToggel = useSelector(
    (state: RootState) => state.settings.asideStudio
  );

  return (
    <div className=" text-center  flex  justify-center items-center  ">
      <div className=" space-y-2">
        <div
          className={clsx(
            "transition-all  ease-in-out  transform  flex items-center justify-center   text-white text-[12px] font-medium w-8 h-8 rounded-full bg-slate-800",
            asideToggel && "  lg:text-3xl  lg:w-[112px] lg:h-[112px]  "
          )}
        >
          <h6>Lk</h6>
        </div>
        <div
          className={clsx(
            !asideToggel
              ? "hidden"
              : "hidden lg:block opacity-0 lg:opacity-100 scale-0  lg:scale-100"
          )}
        >
          <h3 className="text-sm font-medium">Your channel</h3>
          <h4 className="text-sm">Mr-h</h4>
        </div>
      </div>
    </div>
  );
};

export default AsideStudioHeader;
