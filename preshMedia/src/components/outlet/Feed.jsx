import React from "react";
import Share from "./Share";
import Post from "./Post";
import { postdata } from "../../Data/postData";

function Feed() {
  return (
    <section className="flex flex-col">
      <div className="sticky top-0 right-0 z-50 bg-white">
        <Share />
      </div>
      <section className="flex-1 px-10">
        {postdata.map((el) => {
          return <Post key={el.userid} postSent={el} />;
        })}
      </section>
    </section>
  );
}

export default Feed;
