import { Btn } from "@/components";
import { toggleUploadVideo } from "@/libs/redux/slices/settings";
import Image from "next/image";

import { useDispatch } from "react-redux";
const NotHaveVideoYet = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full py-16 flex items-center flex-col space-y-3 justify-center ">
      <Image
        width={200}
        height={200}
        alt="upload"
        src="/images/uploadVideo.svg"
      />
      <p>No content available</p>
      <Btn
        handelClick={() => dispatch(toggleUploadVideo())}
        label="Upload videos"
        className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-opacity-60"
      />
    </div>
  );
};

export default NotHaveVideoYet;
