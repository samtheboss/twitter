import { HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { BsChatDotsFill, BsHeart, BsShare, BsTrash } from "react-icons/bs";
import { FaRetweet, FaRegChartBar } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer">
      {/*image user*/}
      <img
        src={post.img}
        className="rounded-full h-10 w-10 lg:mr-4 cursor-pointer hover:brightness-95 "
        alt=""
      />
      {/*right side*/}
      <div className="">
        {/*header div*/}
        <div className="flex items-center justify-between">
          {/*user infor*/}
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <h2 className="font-bold text-[15px] sm:text-[16px] hover:underline ml-2 ">{post.name}</h2>
            <span className="text-sm sm:text-[15px] hover:underline">@{post.username}-</span>
            <span> {post.timestamp}</span>
          </div>

          {/*icon dive*/}
          <HiDotsHorizontal className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer" />
        </div>

        {/*pos text*/}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
        {/*post image*/}
        <img src={post.img} alt="" className="rounded-[10px] mr-2" />

        {/*post icons*/}
        <div className="flex items-center justify-between  text-gray-500 m-2">
          <BsChatDotsFill className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer" />
          <BsTrash className="h-9  text-red-700   hover:text-red-200 cursor-pointer" />
          <BsHeart className="h-9 text-red-600   hover:text-red-200 cursor-pointer" />
          <BsShare className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer" />
          <FaRegChartBar className=" text-sky-500   hover:text-sky-200 cursor-pointer" />
          <FaRetweet className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer " />
        </div>
      </div>
    </div>
  );
}
