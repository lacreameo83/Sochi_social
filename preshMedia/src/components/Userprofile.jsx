import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import SchoolIcon from "@mui/icons-material/School";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HouseIcon from "@mui/icons-material/House";
import { Button } from "@mui/material";
function Userprofile() {
  return (
    <div>
      <div className="w-full h-[40vh] ">
        <img
          className="w-full h-[40vh] object-cover "
          src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
        />
      </div>
      <div className="flex items-center">
        <div className="w-[150px] h-[150px] rounded-full gap-15">
          <img
            className="object-cover w-[150px] h-[150px] rounded-full mt-[-50px] ml-10"
            src="https://media.licdn.com/dms/image/D5603AQGHH0McEOM60g/profile-displayphoto-shrink_200_200/0/1709324673821?e=2147483647&v=beta&t=RN15iugXPHckys8qkPxeuGda_tU4OPnqz9b8np2jmf4"
          />
        </div>
        <div className="ml-[40px]">
          <h1>Osonwa Precious</h1>
          <p>5.5k followers</p>
        </div>
      </div>
      {/* intro */}
      <div>
        <div className="flex items-center border gap-2 p-3">
          <InfoIcon />
          <p>
            <b>Profile</b> Didital Creator
          </p>
        </div>
        {/* 2 */}
        <div className="flex items-center border gap-2  p-3">
          <WorkOffIcon />
          <p>
            <b>Works at</b> La cream
          </p>
        </div>
        {/* 3 */}
        <div className="flex items-center border gap-2  p-3">
          <MenuBookIcon />
          <p>
            <b>Studied</b> St Monicas
          </p>
        </div>
        {/* 4 */}
        <div className="flex items-center border gap-2  p-3">
          <SchoolIcon />
          <p>
            <b>Went to</b> Anambra State University
          </p>
        </div>
        {/* 5 */}
        <div className="flex items-center border gap-2  p-3">
          <AddLocationIcon />
          <p>
            <b>Lives</b> Port Harcourt
          </p>
        </div>
        {/* 6 */}
        <div className="flex items-center border gap-2  p-3">
          <HouseIcon />
          <p>
            <b>From</b> Awka
          </p>
        </div>
        {/* 7 */}
        <div className="flex items-center border gap-2  p-3">
          <FavoriteIcon />
          <p>
            <b>Relationship</b> Single
          </p>
        </div>
      </div>
      <Button variants="outlined">Edit details</Button>
    </div>
  );
}

export default Userprofile;
