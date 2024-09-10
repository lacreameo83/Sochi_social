import React from "react";
import { Link } from "react-router-dom";

function OnlineUser({ onlineursers }) {
  const { image, name, id } = onlineursers;
  // alert(id);
  return (
    <div>
      <ul>
        <li className="flex items-center gap-2 border p-2">
          <Link to={`guestprofile/${id}`}>
            <div className="relative ">
              <img
                className="w-[40px] h-[40px] object-cover rounded-full"
                src={image}
                alt="ActiveUsers"
              />
              <div className="h-3 w-3 bg-green-400 object-fit rounded-full absolute right-[-2px] top-[-1px]"></div>
            </div>
          </Link>

          <span>{name}</span>
        </li>
      </ul>
    </div>
  );
}

export default OnlineUser;
