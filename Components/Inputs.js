import Image from "next/image";
import icon from "../assests/icon.png";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { HiOutlineEmojiHappy,HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaPollH } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { GoLocation } from "react-icons/go";





export default function Inputs() {
  return (
    <div className="flex border-b border-gray-700 p-3 space-x-3">
      <Image
        src={icon}
        height="50"
        width="50"
        className="rounded-full h-10 w-10 lg:mr-2 cursor-pointer hover:brightness-95"
        alt=""
      />
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea className="w-full border-none focus:ring-0 text-lg 
          placeholder-gray-700 tracking-wide  text-gray-700 min-h-[50px]:" rows="2" placeholder="What is Happening"></textarea>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-2">

               <MdOutlineAddAPhoto className="h-5 w-5 text-sky-500 hover:text-sky-100 cursor-pointer  "/>
                <HiOutlineEmojiHappy  className="h-5 w-5 text-sky-500   hover:text-sky-100 cursor-pointer "/>
                <FaPollH  className="h-5 w-5 text-sky-500   hover:text-sky-100 cursor-pointer "/>
                <BsCalendar2Date  className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer "/>
                <GoLocation  className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer "/>

                
                
            </div>
            <button className="bg-blue-400
             text-white px-4 py-1.5 rounded-full shadow-md
             hover:brightness-95 disabled:opacity-50 " >Tweet</button>
        </div>
      </div>
    </div>
  );
}
