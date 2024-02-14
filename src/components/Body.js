import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const sideBarToggle = useSelector((store) => store.app.isSideBarOpen);
  return (
    <div className="flex h-full fixed left-0 right-0 top-[66px]">
      {sideBarToggle && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
