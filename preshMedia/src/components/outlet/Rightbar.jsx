import React from "react";
import { onlinedata } from "../../Data/onlinedata";
import OnlineUser from "./OnlineUser";

function Rightbar() {
  return (
    <div>
      <div className="p-2">
        <div className="flex items-center mb-4">
          <img
            className="w-[60px] h-[60px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVn113LfPd9FHBKyv9hE3Rxwl-zSdDq3AWg&s"
            alt="gift"
          />
          <h2 className="text-[12px]">
            <b> Emeka Nwokra </b>and<b> 3 others friends</b> have a birthday
            today
          </h2>
        </div>
        <img
          className="rounded-lg"
          src="https://static.vecteezy.com/system/resources/thumbnails/026/365/937/small_2x/beautiful-blurred-green-nature-background-ai-generated-photo.jpg"
          alt="picture"
        />
      </div>
      {/* for onlinr frinens */}
      <h1 className="font-[600] mb-3 p-2">Online Friends</h1>
      {onlinedata.map((el) => {
        return <OnlineUser key={el.id} onlineursers={el} />;
      })}
    </div>
  );
}

export default Rightbar;
