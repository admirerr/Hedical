import React from "react";
import NavbarComponent from "./Navbar";
const SearchBar=()=>{
    return(
        <>
        <NavbarComponent/>
        <div className="font-semibold px-3  p-5">
            <div className="w-1/2 flex justify-center"> What are you Looking for ??</div>
           
        </div>
        <div className=" flex justify-center">
           <div className="w-1/2 ">
            <div className="flex">
            <div className="w-3/4">
            <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter your phone number"
        className="mt-1 p-2 w-full  border rounded-md focus:outline-none focus:border-blue-500"
      />
            </div>
            <div className="cursor-pointer w-1/4 rounded-lg p-2 bg-blue-200 font-bold text-xl  flex justify-center">
          Search
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default SearchBar;