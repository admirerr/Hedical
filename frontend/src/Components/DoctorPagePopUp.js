import HorizontalLinearStepper from "./Pop";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoctorPagePopUp = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-md z-50"></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white p-6 rounded shadow-lg z-10 w-[30%] rounded-[20px]"
          style={{
            boxShadow: "-3px 3px 4px 0px #17A589",
            border: "2.5px solid #17A589",
          }}
        >
          <h2 className="text-lg font-semibold mb-3">Who is the Patient?</h2>
          <div className="flex gap-3 flex-row overflow-x-scroll mb-4">
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Me
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Wife
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Husband
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Father
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Mother
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Son
            </button>
            <button className="bg-blue-500 w-full text-white rounded px-3 py-1">
              Daughter
            </button>
          </div>
          <div className="mb-4 flex gap-[2rem]">
            <div className="relative flex">
              <p className="text-black">Select Patient's gender</p>
              <select className="mb-4 ml-3">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <p className="text-black">Date</p>
            </div>
            <div className="relative">
              <DatePicker
                placeholderText="Select Date"
                selected={selectedDate}
                onChange={handleDateChange}
                className="w-[80%] p-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Train Input */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Doctor will call you on this number</p>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your Number"
              />
            </div>
          </div>
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Patient's name</p>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <p className="text-black">Patient's age</p>
            </div>
            <div>
              <input
                type="number"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your age"
              />
            </div>
          </div>
          <div className="flex">
            <button className="bg-blue-500 w-full text-white rounded py-2 hover:bg-blue-800">
              Next
            </button>
          </div>
          {/* Close Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorPagePopUp;