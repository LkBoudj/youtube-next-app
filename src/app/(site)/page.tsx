import { VideoCard, UploadVideo } from "@/components";

export default function Home() {
  return (
    <div className="w-full p-8 ">
      {/* <UploadVideo /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {[...Array(100)].map((v, i) => (
          <VideoCard key={i} />
        ))}
      </div>
    </div>
  );
}
