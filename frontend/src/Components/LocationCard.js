
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from './Popup';
const LocationCard = () => {
  const [label, setLabel] = useState("pnr");
  
  const [color,setColor]=useState({"a":1,"b":0,"c":0});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div
      className="p-3 flex flex-col rounded-[20px]"
      style={{
        boxShadow: "-3px 3px 4px 0px #17A589",
        border: "0.5px solid #17A589",
      }}
    >
      <div className="flex flex-col md:flex-row flex-start ">
      <div
          className={`hover:bg-[#17A589] bg-${color.a?"[#17A589]":"[#ffffff]"} justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
          style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({"a":!color.a,"b":0,"c":0})
            setLabel("pnr");
          }}
        >
          PNR
        </div>
        <div
         className={`hover:bg-[#17A589] bg-${color.b?"[#17A589]":"[#ffffff]"} justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
         style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({"a":0,"b":!color.b,"c":0})
            setLabel("train");
          }}
        >
          TRAIN NO./NAME
        </div>
        <div
          className={`hover:bg-[#17A589] bg-${color.c?"[#17A589]":"[#ffffff]"} justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2`}
          style={{ border: "1px solid gray" }}
          onClick={() => {
            setColor({"a":0,"b":0,"c":!color.c})
            setLabel("station");
          }}
        >
          STATION
        </div>
      </div>
      <div>
        {/* <div className="mt-4 mb-1">Pick Location</div> */}

        <div className="flex flex-row mt-2">
       
          {label === "pnr" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER 10 DIGIT PNR NO."
            ></input>
          )}
          {label === "station" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER STATION"
            ></input>
          )}
          {label === "train" && (
            <input
              type="text"
              className="pl-2 w-[90%] h-[50px] bg-gray-200 rounded-[15px] ml-2"
              placeholder="ENTER TRAIN NO."
            ></input>
          )}
        </div>

       

        <div className="flex justify-between sm:flex-row  flex-col pl-5 pr-5 p-3 mt-4">
          <div>
            <div class="flex items-center sm:mb-4 mb-2">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 "
              >
                Get Medicine in Train
              </label>
            </div>
            <div class="flex items-center mb-2">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 "
              >
                Get Doctor in Train
              </label>
            </div>
          </div>
          <div>
            <div class="flex items-center sm:mb-4 mb-2">
              <input
                id="default-radio-3"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-3"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Order Medicine
              </label>
            </div>
            <div class="flex items-center mb-2">
              <input
                id="default-radio-4"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-4"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Doctor Consultancy
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-4 justify-between mb-3">
        <div
          className="w-[10%] rounded-2 flex justify-center items-center p-2"
          style={{
            border: "0.5px solid #f0f0f0",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FontAwesomeIcon
            icon="fa-regular fa-clock"
            style={{ color: "gray" }}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div
          className="w-[85%] md:text-[3.5vw] lg:text-[1.8vw] flex justify-center text-white text-center items-center p-2 bg-yellow-500 cursor-pointer rounded-2"
          style={{ fontWeight: "bold" }}
          onClick={handleOpenPopup}
        >
          Search
        </div>
        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};
export default LocationCard;
