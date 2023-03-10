import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import News from "./News";

export default function Widgets({ newResults = [], whotofollow = [] }) {
  const [articleNum, setArticleNum] = useState(4);
  const [whotofollowNum, setwhotofollowNum] = useState(4);

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
      <div className="text-gray-700 space-y-3 pt-2 w-[90%] lg:w-[90%]  bg-gray-100 rounded-xl">
        <h4 className="font-bold text-xl px-4">What's Happening</h4>
        {newResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show More
        </button>
      </div>
      <div
        className="text-gray-700  space-y-3 pt-2 w-[90%] xl:w-[90%] lg:w-[30%]
      justify-between bg-gray-100 rounded-xl "
      >
        <h4 className="font-bold text-xl px-4  bg-gray-300 rounded-r-10">
          Who to Follow
        </h4>
        {whotofollow.slice(0, whotofollowNum).map((whotofollow) => (
          <div
            className="flex items-center px-4 py-2  hover:bg-gray-300 rounded-lg"
            key={whotofollow.login.username}
          >
            <img
              className="rounded-full"
              width="50"
              height="50"
              src={whotofollow.picture.thumbnail}
              alt=""
            />
            <div className="truncate leading-5">
              <h4 className="font-bold truncate hover:underline text-[16px]">
                {whotofollow.login.username}
              </h4>
              <h5
                className="truncate whitespace-nowrap text-gray-500
              "
              >
                {whotofollow.name.first + " " + whotofollow.name.last}
              </h5>
            </div>
            <button className=" ml-auto bg-black text-blue-50 rounded-full px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button
          onClick={() => setwhotofollowNum(whotofollowNum + 3)}
          className="text-blue-300 pl-4 pb-3 font-bold hover:text-blue-400"
        >
          Show More
        </button>
      </div>
    </div>
  );
}
