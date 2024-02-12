import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const sideBarToggle = useSelector((store) => store.app.isSideBarOpen);
  return (
    <div className="flex h-full fixed left-0 right-0 top-[66px]">
      {sideBarToggle && <SideBar />}
      <MainContainer />
    </div>
  );
};

export default Body;
