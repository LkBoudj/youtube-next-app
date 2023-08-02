import Image from "next/image";
import React from "react";

type Props = {
  thumbnail?: string;
  chanaleLoogo?: string;
  title?: string;
  chanleName?: string;
};

const VideoCard = ({ thumbnail, chanaleLoogo, title, chanleName }: Props) => {
  return (
    <div className="space-y-6 mx-auto">
      <Image
        className="rounded-lg"
        src="/images/hq720.webp"
        width={347}
        height={195}
        alt=""
      />
      <div className="flex items-start space-x-4">
        {chanaleLoogo ? (
          <Image
            className="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            width={36}
            height={36}
            alt=""
          />
        ) : (
          <div className="w-8 h-8 bg-slate-700 rounded-full" />
        )}

        <div className="font-medium dark:text-white space-y-1">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
          <div className="text-sm text-slate-500 dark:text-gray-400">
            63K views Streamed 1 month ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
