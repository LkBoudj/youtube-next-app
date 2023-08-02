"use client";
import CollapseBody from "@/components/collapse/CollapseBody";
import CollapseHeader from "@/components/collapse/CollapseHeader";
import React, { useMemo, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const items = useMemo(() => ["videos", "live", "playlists", "Podcasts"], []);
  const headers = useMemo(
    () => [
      "video",
      "visibility",
      "Restrictions",
      "date",
      "view",
      "comments",
      "likes",
    ],
    []
  );
  const [selectedNav, setSelectedNav] = useState(items[0]);
  return (
    <div className="px-6 mx-auto space-y-6">
      <h1 className=" font-semibold text-2xl capitlize">Channel content</h1>
      <CollapseHeader
        items={items}
        selectedNav={selectedNav}
        setSelectNav={setSelectedNav}
      />
      <CollapseBody headers={headers} videos={[]} />
    </div>
  );
};

export default page;
