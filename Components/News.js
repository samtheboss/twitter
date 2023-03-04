import React from "react";

export default function News({ article }) {
  return (
    <a href={article.url} target="_blank">
      <div className="flex hover:bg-gray-200 transition duration-200 items-center justify-between px-4 py-2 space-x-1" >
        <div className="space-y-0.5 font-bold">
            <h6>{article.title}</h6>
            <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
        </div>
        <img className=" rounded-xl" width="70" height="70" src={article.urlToImage} alt=""/>
      </div>
    </a>
  );
}
