import React, { useState } from "react";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { onlinedata } from "../../Data/onlinedata";
import { postdata } from "../../Data/postData";
import { Link } from "react-router-dom";

function Post({ postSent }) {
  const { profileMins, post, postimage, numberoflikes, numberComment, userid } =
    postSent;
  // am checking if the id in the active users is equal to the post
  const user = onlinedata.filter((u) => u.id === userid)[0];
  const userName = user ? user.name : "User not found";

  // checking for der profile picture
  const profilpic = onlinedata.filter((user) => user.id === userid)[0];
  const dp = profilpic ? user.image : "no image found";

  // for like button
  const [liked, setLiked] = useState(numberoflikes);
  const [isliked, setisLiked] = useState(false);

  const handleLiked = () => {
    setLiked(isliked ? liked - 1 : liked + 1);
    setisLiked(!isliked);
    // setLiked(liked + 1);
  };
  return (
    <div className="my-4 border rounded-lg w-[500px] mx-auto">
      <div className="flex items-center gap-3 p-1">
        <Link to={`guestprofile/${userid}`}>
          <img
            class="h-[40px] w-[40px] rounded-full  object-cover"
            src={dp}
            alt="content"
          />
        </Link>

        <p>{userName}</p>
        <p>{profileMins}mins ago</p>
      </div>
      <p class="leading-relaxed text-base" className="mb-4 p-2">
        {post}
      </p>
      <div class="bg-gray-100 p-6y rounded-lg">
        <img
          class="h-[400px] rounded w-full object-cover object-center mb-6"
          src={postimage}
          alt="content"
        />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ThumbUpAltRoundedIcon onClick={handleLiked} htmlColor="blue" />

              <div className="bg-red-600 text-white h-7 w-7 flex items-center justify-center rounded-full p-[1px]">
                <FavoriteIcon onClick={handleLiked} />
              </div>
              <p>{liked} people liked it</p>
            </div>
            <p>{numberComment} comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

{
  /* 
// <div>
    //   <div className="bordery bg-[#FFFFFF] rounded-md my-12 mx-3 p-8">
    //     <h2 className="font-[400]">Hei! it's myFirst Post</h2>
    //     <div className="w-[100%] h-[100%] mx-auto">
    //       <img
    //         className="w-[90vw] h-[60vh] object-fit mx-auto p-4"
    //         src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
    //         alt="userpost"
    //       />
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center gap-2">
    //         <ThumbUpAltRoundedIcon htmlColor="blue" />
    //         <div className="bg-red-600 text-white h-7 w-7 flex items-center justify-center rounded-full p-[1px]">
    //           <FavoriteIcon />
    //         </div>

    //         <p>32 people like it</p>
    //       </div>

    //       <p>9 comments</p>
    //     </div>
    //   </div>
    // </div> */
}
