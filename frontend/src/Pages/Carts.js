
import React from "react";
import NavbarComponent from "../Components/Navbar";
import CardsCarts from "../Components/CardsCarts";
import Prescription from "../Components/Prescription";

function Carts() {
    return (
        <>
            <NavbarComponent />
            <div className="flex ">
                <div  style={{ overflowY: 'scroll', maxHeight: '800px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <CardsCarts />
                    <CardsCarts />
                    <CardsCarts />
                    <CardsCarts />
                </div>
                <div className="w-[50%] ">
                    <Prescription  />
                </div>
            </div>
        </>
    );
}

export default Carts;

