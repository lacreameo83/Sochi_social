import React from "react";
import { useParams } from "react-router-dom";
import { onlinedata } from "../../Data/onlinedata";
import { postdata } from "../../Data/postData";

function Guestprofile() {
  const params = useParams();
  console.log(onlinedata);

  const findname = onlinedata.filter((user) => {
    return user.id == params.id;
  });

  console.log(findname);

  //   const name1 = findname ? findname.name : "Guest";

  return (
    <div>
      <h2>{params.id}</h2>
      <img
        className="rounded-[100%] h-[300px] w-[300px]"
        src={findname[0].image}
      />

      <h1 className="font-bold">{findname[0].name}</h1>
    </div>
  );
}

export default Guestprofile;
