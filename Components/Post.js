import { modalState } from "@/atom/modalAtom";
import { db, storage } from "@/firebaseconfigs";
import { HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import { useEffect, useState } from "react";
import {
  BsChatDotsFill,
  BsHeart,
  BsShare,
  BsTrash,
  BsHeartFill,
} from "react-icons/bs";
import { FaRetweet, FaRegChartBar } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import Moment from "react-moment";
import { useRecoilState } from "recoil";

export default function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasliked, sethasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);
  useEffect(() => {
    sethasLiked(
      likes.findIndex((like) => like?.id === session?.user.uid) !== -1
    );
  }, [likes]);
  async function likePost() {
    if (session) {
      if (hasliked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session?.user.username,
        });
      }
    } else {
      signIn();
    }
  }
  async function deletePost() {
    if (window.confirm("Are you sure you want to remove the post")) {
      deleteDoc(doc(db, "posts", post.id));
      if (post.data().img) {
        deleteObject(ref(storage, `posts/${post.id}/image`));
      }
    }
  }
  return (
    <div className="flex p-3 cursor-pointer ">
      {/*image user*/}
      <img
        src={post.data().userImg}
        className="rounded-full h-10 w-10 lg:mr-4 cursor-pointer hover:brightness-95 "
        alt=""
      />
      {/*right side*/}
      <div className="items-center justify-between">
        {/*header div*/}
        <div className="flex items-center justify-between">
          {/*user infor*/}
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <h2 className="font-bold text-[15px] sm:text-[16px] hover:underline ml-2 ">
              {post.data().name}
            </h2>
            <span className="text-sm sm:text-[15px] hover:underline">
              @{post.data().username}-
            </span>
            <span>
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>{" "}
            </span>
          </div>

          {/*icon dive*/}
          <HiDotsHorizontal className="h-5 w-5 text-sky-500   hover:text-sky-200 cursor-pointer" />
        </div>

        {/*pos text*/}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.data().text}
        </p>
        {/*post image*/}
        <img src={post.data().img} alt="" className="rounded-[10px] mr-2 " />

        {/*post icons*/}
        <div className="flex items-center justify-between  text-gray-500 m-2">
          <BsChatDotsFill
            onClick={() => setOpen(!open)}
            className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer"
          />
          <FaRetweet className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer " />
          {session?.user.uid === post?.data().id && (
            <BsTrash
              onClick={deletePost}
              className="h-9  text-red-700   hover:text-red-200 cursor-pointer"
            />
          )}
          <div className="flex items-center space-x-3">
            {!hasliked ? (
              <BsHeart
                onClick={likePost}
                className=" text-red-600   hover:text-red-200 cursor-pointer"
              />
            ) : (
              <BsHeartFill
                onClick={likePost}
                className="text-red-600   hover:text-red-200 cursor-pointer"
              />
            )}
            {likes.length > 0 && (
              <span className={`${hasliked && "text-red-600 font-bold "}`}>
                {likes.length}
              </span>
            )}
          </div>

          <BsShare className="h-9  text-sky-500   hover:text-sky-200 cursor-pointer" />
          <FaRegChartBar className=" text-sky-500   hover:text-sky-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
