import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import News from "./News";

export default function Widgets({ newResults }) {
    const [articleNum,setArticleNum] =useState(4)
  return (
    <div className="lg:w-600px hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] lg:w-[75%] sticky top-0 bg-white py-1.5">
        <div className="flex items-center p-3 rounded-4 relative">
          <BsSearch className="h-5 z-50 text-gray-500" />

          <input
            className="absolute inset-0 rounded-full pl-11
             border-gray-700 focus:shadow-lg focus:bg-white
              bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 pt-2 w-[90%] lg:w-[75%]  bg-gray-100 rounded-xl">
        <h4 className="font-bold text-xl px-4">What's Happening</h4>
        {newResults && newResults.slice(0, articleNum).map((article) => (
        <News key={article.title} article={article} />
      ))}
        <button onClick={()=>setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show More</button>
      </div>
    </div>
  );
}
