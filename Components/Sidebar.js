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

import { CgMoreO } from "react-icons/cg";
import { TfiMoreAlt } from "react-icons/tfi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col p-2 dark:bg-slate-800  fixed h-full lg:ml-10">
      {/*logo div*/}
      <div className="HoverEffect p-1 hover:bg-blue-100">
        <img
          src="data:image/jpeg;base64,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"
          height="50"
          width="50"
        />
      </div>
      <div className="mt-4 mb-2.5 lg:items-start">
        <SidebarMenuItems title="Home" Icon={HomeIcon} active />
        <SidebarMenuItems title="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SidebarMenuItems title="Notifications" Icon={BellIcon} />
            <SidebarMenuItems title="Messages" Icon={InboxIcon} />
            <SidebarMenuItems title="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItems title="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItems title="Profile" Icon={UserIcon} />
            <SidebarMenuItems title="More" Icon={CgMoreO} iconHeight={1} />
          </>
        )}
      </div>
      {session ? (
        <>
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
            <img
              onClick={signOut}
              src={session.user.image}
              height="50"
              width="50"
              className="rounded-full h-10 w-10 lg:mr-2"
              alt=""
            />
            <div className="HoverEffect leading-5 hidden lg:inline">
              <h4>{session.user.name}</h4>
              <p className="">@{session.user.username}</p>
            </div>
            <TfiMoreAlt className="h-5 lg:ml-8 hidden lg:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full w-36 h-12
      font-bold text-lg shadow-md hover:brightness-95 hidden lg:inline"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
