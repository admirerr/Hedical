import React from "react";
import Card from "./Cards";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./Navbar";
import contact from "../images/ContactUs.png";
import Card1 from "./Card1";
const Consultancy = () => {
  return (
    <>
      {/* <div className="flex">

     <img
          src={logoD}
          width="50"
          height="50"
          className="d-inline-block align-top mt-1 mr-2"
          style={{ marginLeft: "10px" }}
          alt=""
        />
        <Navbar.Brand href="#" style={{color:"#000000"}}>RailHealth</Navbar.Brand>
        </div>
        <div> */}
      <NavbarComponent />
      <div className="flex md:justify-center p-3 md:p-5 bg-gray-200 md:flex-row md:items-start flex-col-reverse items-center">
        <div className="text-black text-xl bold ">
          <div>
            {" "}
            <div className="md:mb-4">
              {" "}
              <span class="font-semibold block p-[3px] md:text-[25px] text-[18px]">
                Consult Specialist Doctors Online on Video/Audio Call & and Chat
              </span>
              {/* <span class="font-semibold block p-[3px] text-[25px]">
              </span> */}
            </div>
            <div>
              <span class="font-medium block p-[5px] md:text-[18px] text-[15px]">
                Consult Doctors from Top Hospitals within 30 minutes
              </span>

            </div>
          </div>

          {/* <button class="bg-blue-500 text-white px-4 py-2 rounded">Talk to a doctor <span></span> </button> */}
        </div>
        <div className="md:h-full h-[30vw] mb-4 md:mb-0">
          <img
            src={contact}
            alt="Contact"
            className="md:-[30vw] md:h-[18vw] w-full h-full object-cover"
          ></img>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center mt-4">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </>
  );
};
export default Consultancy;
