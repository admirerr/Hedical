import React from "react";
import "../style.css";
const GetAmbulance = () => {
  return (
    <>
      <section class="app-preview get-ambulance">
        <div class="app-previewTop  flex  justify-center text-[120%]  py-4 px-2 cards">
          <div class="bg-white m-2 flex flex-col justify-center rounded-md h-[20vh]  w-[30vh]  shadow-lg text-center">
            <h1 class=" bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text  counter-count ">5756+</h1>
            <p className=" ">Cities</p>
          </div>
          <div class="bg-white flex flex-col justify-center h-[20vh] rounded-md w-[30vh] m-2  shadow-lg text-center">
            <h1 class="counter-count bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">2204+</h1>
            <p className="">Dcotors</p>
          </div>
          <div class="bg-white flex flex-col justify-center  h-[20vh] rounded-md w-[30vh]  m-2 shadow-lg text-center">
            {/* <!-- <h1 class="counter-count">1333+</h1> --> */}
            <h1 class="counter-count bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">6000 +</h1>
            <p className="">Medicines</p>
          </div>
        </div>
        <div class="app-previewBottom w-[100vw]">
          <div class="heading text-center">
            <h1 class="text-white">Book &amp; Get Medicines and Dcotor's Assitance </h1>
            <a
              href="https://play.google.com/store/apps/details?id=com.medcab.consumer"
              target="_blank"
              class="text-decoration-none bg-white shadow-lg my-2 primary-cta"
            >
              Download RailHealth App
            </a>
          </div>
          <div class="image-wrapper flex flex-col md:flex-row owl-theme">
            <div class="preview-image item">
              <img
                src="https://medcab.in/assets/website-images/Wood-Hand.png"
                alt="icon "
              />
            </div>
            <div class="preview-image item">
              <img
                src="https://medcab.in/assets/website-images/iPhone 12 Pro (Wooden Hands).png"
                alt="icon "
              />
            </div>
            <div class="preview-image item">
              <img
                src="https://medcab.in/assets/website-images/Wood-Hand-1.png"
                alt="icon "
              />
            </div>
          </div>
        </div>
        {/* <!-- White curve background --> */}
        <div class="white-curve">
          <img
            src="https://medcab.in/assets/website-images/white-curve.png"
            alt="icon "
          />
        </div>
      </section>
    </>
  );
};
export default GetAmbulance;
