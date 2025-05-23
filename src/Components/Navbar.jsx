import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        
        <h1 className="text-2xl font-bold text-yellow-500 ">TastyBites</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search food items here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;