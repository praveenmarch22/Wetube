import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBarView } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleSideBarToggle = () => {
    dispatch(toggleSideBarView());
  };

  return (
    <div className="grid grid-flow-col grid-cols-12 p-2 pb-4 shadow-lg fixed top-0 left-0 w-full z-40 bg-white">
      <div className="flex col-span-2 ml-2 mt-2">
        <img
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://cdn.icon-icons.com/icons2/2385/PNG/512/hamburger_menu_icon_144302.png"
          onClick={handleSideBarToggle}
        />

        <img
          className="h-7 ml-6 mt-[2px]"
          alt="Youutbe logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
        />
      </div>
      <div className="col-span-8 mx-auto pr-8">
        <input
          type="text"
          className="w-[500px]  px-5 py-2 rounded-bl-3xl rounded-tl-3xl border-2 border-gray-400 "
          placeholder="Search"
        />
        <button className="w-[60px] absolute  px-5 py-2 rounded-br-3xl rounded-tr-3xl border-2 border-gray-400 mr-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-2 flex justify-end -mt-1">
        <img
          className="h-12 p-2 cursor-pointer"
          alt="User-icon"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Header;
