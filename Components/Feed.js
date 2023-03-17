import React, { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Inputs from "./Inputs";
import icon from "../assests/icon.png";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebaseconfigs";
import { AnimatePresence, motion } from "framer-motion";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div
      className="lg:ml-[350px] 
    border-l border-r lg:min-w-[534px]  border-gray-200 sm:ml-[72px] flex-grow max-w-xl"
    >
      <div
        className="flex items-center 
      py-2 px-3 sticky tpp-0 z-50 bg-white 
      border-b border-gray-200
      "
      >
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="HoverEffect ml-auto px-0 h-9 w-9 flex items-center justify-center">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Inputs />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
