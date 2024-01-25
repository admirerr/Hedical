import React from "react";
import Card from "./Cards";
import logoD from "../images/logoD.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./Navbar";
const Consultancy=()=>{
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
<NavbarComponent/>
    <div class="text-black ml-40 text-xl bold mt-10 p-[2]">
        <span class="font-bold block p-[3] " style={{padding:'3px'}}>Consult Specialist Doctors Online on</span>
        <span class="font-semibold block"  style={{padding:'3px'}}>Video/Audio Call & and Chat</span>
        <span class="font-medium block"  style={{padding:'5px'}}>Consult Doctors from Top Hospitals within 30 minutes</span>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Talk to a doctor <span></span> </button>
</div>

        
   <Card/>
   <Card/>
   <Card/>
   </>
    )
}
export default Consultancy;