import React from "react";
import Home from "../components/navbar/Home";
import MenuLeft from "../components/outlet/menuLeft";
import Rightbar from "../components/outlet/Rightbar";
import { Outlet } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col">
      <Home />
      <section className=" h-[86vh] px-16 flex items-start gap-10">
        <div className="border h-full rounded-md w-[200px] bg-[#F4F4F4]">
          <MenuLeft />
        </div>
        <div className="bg-[#EFEFEF] flex-1 col-span-4 shadow-lg h-full overflow-y-auto hide-scrollbar">
          <Outlet />
        </div>
        <div className="h-full w-[250px] overflow-y-auto hide-scrollbar border rounded-md bg-[#F4F4F4]">
          <Rightbar />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
