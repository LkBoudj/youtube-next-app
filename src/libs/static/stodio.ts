import {
  MdGridView,
  MdOutlineVideoLibrary,
  MdOutlineAnalytics,
  MdOutlineComment,
  MdCopyright,
  MdAttachMoney,
  MdEditRoad,
  MdOutlineDisplaySettings,
  MdOutlineSubtitles,
} from "react-icons/md";

export const studioRoter = [
  {
    name: "dashbaord",
    link: "/channel",
    Icon: MdGridView,
  },
  {
    name: "content",
    link: "/channel/content",
    Icon: MdOutlineVideoLibrary,
  },
  {
    name: "analytic",
    link: "/channel/analytic",
    Icon: MdOutlineAnalytics,
  },
  {
    name: "comments",
    link: "/channel/comment",
    Icon: MdOutlineComment,
  },
  {
    name: "subtitles",
    link: "/channel/subtitles",
    Icon: MdOutlineSubtitles,
  },
  {
    name: "copyright",
    link: "/channel/copyright",
    Icon: MdCopyright,
  },
  {
    name: "earm",
    link: "/channel/earm",
    Icon: MdAttachMoney,
  },
  {
    name: "customization",
    link: "/channel/customization",
    Icon: MdEditRoad,
  },
  {
    name: "audio library",
    link: "/channel/audio",
    Icon: MdOutlineDisplaySettings,
  },
];
