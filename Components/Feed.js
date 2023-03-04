import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Inputs from "./Inputs";
import icon from "../assests/icon.png";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    }, {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    }, {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    }, {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    }, {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    }, {
      id: "1",
      name: "Smartapps developer",
      username: "smartApps",
      userImg: { icon },
      img: "https://images.unsplash.com/photo-1676218074966-77217db68f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "John Doe",
      username: "smartApps",
      userImg: { icon },
      img :"https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: "2 hours ago",
    },
  ];
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
      {
        posts.map((post)=>(
          <Post key={post.id} post ={post}/>
        ))
      }
    </div>
  );
}
