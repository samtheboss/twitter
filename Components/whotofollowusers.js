import React from "react";

export default function whotofollowusers({ whotofollow }) {
  return (
    <div key={whotofollow.login.username}>
      <img
        className="rounded-full"
        width="50"
        height="50"
        src={whotofollow.picture.thumbnail}
        alt=""
      />
      <div className="">
        <h4>{whotofollow.login.username}</h4>
        <h5>{whotofollow.name.first + " " + whotofollow.name.last}</h5>
      </div>
      <button className="">Follow</button>
    </div>
  );
}
