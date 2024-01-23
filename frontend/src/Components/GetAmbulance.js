import React from "react";
import "../style.css";
const GetAmbulance = () => {
  return (
    <>
      <section class="app-preview get-ambulance">
        <div class="app-previewTop flex justify-center text-[120%]  py-4 px-2 cards">
          <div class="bg-white card p-5  shadow-lg text-center">
            <h1 class="   counter-count ">5756+</h1>
            <p className=" ">Cities</p>
          </div>
          <div class="bg-white card shadow-lg text-center">
            <h1 class="counter-count ">2204+</h1>
            <p className="">Dcotors</p>
          </div>
          <div class="bg-white card shadow-lg text-center">
            {/* <!-- <h1 class="counter-count">1333+</h1> --> */}
            <h1 class="counter-count ">6000 +</h1>
            <p className="">Medicines</p>
          </div>
        </div>
        <div class="app-previewBottom">
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
          <div class="image-wrapper owl-theme">
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
