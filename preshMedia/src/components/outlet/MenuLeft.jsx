import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import EventSeatIcon from "@mui/icons-material/EventSeat";

import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SchoolIcon from "@mui/icons-material/School";
import { Button } from "@mui/material";

function MenuLeft() {
  return (
    <div className="p-4 flex flex-col gap-4 text-smy">
      <div className="flex items-center gap-1">
        <RssFeedIcon />
        <p>Feed</p>
      </div>
      {/* 2 */}
      <div className="flex items-center gap-1">
        <AddCommentIcon />
        <p>Charts</p>
      </div>
      {/* 3 */}
      <div className="flex items-center gap-1">
        <VideoCallIcon />
        <p>Videos</p>
      </div>
      {/* 4 */}
      <div className="flex items-center gap-1">
        <Diversity3Icon />
        <p>Groups</p>
      </div>
      {/* 5 */}
      <div className="flex items-center gap-1">
        <DirectionsRunIcon />
        <p>jobs</p>
      </div>
      {/* 6 */}
      <div className="flex items-center gap-1">
        <EventSeatIcon />
        <p>Events</p>
      </div>
      {/* 7 */}
      <div className="flex items-center gap-1">
        <SchoolIcon />
        <p>Courses</p>
      </div>
      {/* 8 */}
      <div className="flex items-center gap-1">
        <LiveHelpIcon />
        <p>Questions</p>
      </div>
      {/* 9 */}
      <div className="flex items-center gap-1">
        <BookmarkAddIcon />
        <p>BookMark</p>
      </div>
      <Button variant="outlined" style={{ width: "120px", fontSize: "10px" }}>
        Show More
      </Button>
      <hr className="text-blue-400 font-semibold" />
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://toppng.com/uploads/preview/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png"
          alt="person1"
        />
        <p>Emeka Nwokra</p>
      </div>
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68xCJyjzwUC0J89fXPOkmIvW09vTZjHRkVg&s"
          alt="person1"
        />
        <p>Precious Osonwa</p>
      </div>
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgFaYt-sW11jEmyFHSN40vBSXz7oxTOSvmi5sAWkKkSidjivsAB5ZXAAZhBgDeiWqCrs&usqp=CAU"
          alt="person1"
        />
        <p>Rosemary Enem</p>
      </div>
    </div>
  );
}

export default MenuLeft;
