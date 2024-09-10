import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import { Button } from "@mui/material";

function Share() {
  return (
    <div className=" shadow-xl p-4 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvUe1coDKRRBcaINMPy2mK5FLvic8fHVOTXJbPzQZP_B8ZBtsWznA8Sz2hMRMVQ-PFGY&usqp=CAU"
        />
        <input
          className="outline-none border-0"
          type="text"
          placeholder="What is on your mind?"
        />
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <AddAPhotoRoundedIcon htmlColor="red" />
            <p> Photo or video</p>
          </div>
          <div className="flex items-center gap-1">
            <LabelRoundedIcon htmlColor="blue" />
            <p>Tag</p>
          </div>
          <div className="flex items-center gap-1">
            <AddLocationAltIcon htmlColor="green" />
            <p>Location</p>
          </div>
          <div className="flex items-center gap-1">
            <MoodRoundedIcon htmlColor="gold" />
            <p>Feelings</p>
          </div>
        </div>
        <div>
          <Button variant="contained" style={{ fontSize: "8px" }}>
            share
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Share;
