import React from "react";
import ProfileAvatar from "./ProfileAvatar";

const NavBar = () => {
  return (
    <div className=" rounded-full my-2 mx-4 p-2 flex flex-1 items-center justify-between">
      <div className="text-xl font-bold">سارا احمدی</div>
      <ProfileAvatar />
    </div>
  );
};

export default NavBar;
