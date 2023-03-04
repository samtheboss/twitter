import Image from "next/image";
import React from "react";
import logo from "../assests/logo.png";
import SidebarMenuItems from "./SidebarMenuItems";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import PersonImage from "../assests/icon.png";

import { CgMoreO } from "react-icons/cg";
import { TfiMoreAlt } from "react-icons/tfi";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2  fixed h-full lg:ml-10">
      {/*logo div*/}
      <div className="HoverEffect p-1 hover:bg-blue-100">
        <Image src={logo} height="50" width="50"></Image>
      </div>
      <div className="mt-4 mb-2.5 lg:items-start">
        <SidebarMenuItems title="Home" Icon={HomeIcon} active />
        <SidebarMenuItems title="Explore" Icon={HashtagIcon} />
        <SidebarMenuItems title="Notifications" Icon={BellIcon} />
        <SidebarMenuItems title="Messages" Icon={InboxIcon} />
        <SidebarMenuItems title="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItems title="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItems title="Profile" Icon={UserIcon} />
        <SidebarMenuItems title="More" Icon={CgMoreO} iconHeight={70} />
      </div>
      <button
        className="bg-blue-400 text-white rounded-full w-52 h-12
      font-bold text-lg shadow-md hover:brightness-95 hidden lg:inline"
      >
        Tweet
      </button>
      <div
        className="HoverEffect text-gray-700 flex items-center
      justify-center lg:justify-start mt-auto"
      >
        <Image
          src={PersonImage}
          height="50"
          width="50"
          className="rounded-full h-10 w-10 lg:mr-2"
          alt=""
        ></Image>
        <div className="HoverEffect leading-5 hidden lg:inline">
          <h4>SmartApps</h4>
          <p className="">@SmartApps Developer</p>
        </div>
        <TfiMoreAlt className="h-5 lg:ml-8 hidden lg:inline" />
      </div>
    </div>
  );
}
