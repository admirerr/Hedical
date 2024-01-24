// // import React from 'react';

// // const Popup = ({ onClose }) => {
// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50">
// //       <div className="absolute inset-0 backdrop-filter backdrop-blur-md backdrop-saturate-150">
     
// //         <div className="bg-white bg-opacity-10 absolute inset-0"></div>
// //       </div>
// //       <div className="bg-white p-6 rounded shadow-lg z-10">
   
// //         <h2 className="text-lg font-semibold mb-4">Popup Content</h2>
// //         <p>This is your popup content.</p>
// //         <button
// //           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //           onClick={onClose}
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Popup;


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Popup = ({ onClose }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center ">
//       <div className="absolute inset-0 backdrop-filter backdrop-blur-md backdrop-saturate-150">
//         <div className="bg-white bg-opacity-10 absolute inset-0"></div>
//       </div>
//       <div className="bg-white p-6 rounded shadow-lg z-10 w-[30%] border border-solid border-black ">
//         <h2 className="text-lg font-semibold mb-4">Popup Content</h2>

//         {/* Calendar */}
//         <div className="mb-4 flex gap-[2rem]">
//           <div>
//           {/* <label className="block text-sm font-medium text-gray-700">Journey Date:</label> */}
//           <h4>Journey Date:</h4>
//           </div>
//           <div className="relative">
//   <DatePicker
//     selected={selectedDate}
//     onChange={handleDateChange}
//     className="w-[80%] p-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
//   />
// </div>
//         </div>
//         <div className="mb-4 flex gap-[2rem]">
//           <div>
//           {/* <label className="block text-sm font-medium text-gray-700">Train:</label> */}
//           <h4>Train</h4>
//           </div>
//           <div>
//           <input type="text" className="mt-0 p-2 border border-gray-300 rounded-md"placeholder='Enter your train' />
//           </div>
//         </div>

//       <h3 className='font-bold mb-4 text-center'>Select your Boarding Train</h3>
//         <div className="mb-4 flex gap-[2rem]">
//           <div>
//           {/* <label className="block text-sm font-medium text-gray-700">Select Option:</label> */}
//           <h5>Select Option:</h5>
//           </div>
//           <div>
//           <select
//             value={selectedOption}
//             onChange={handleSelectChange}
//             className="mt-0 p-2 border border-gray-300 rounded-md"
//           >
//             <option value="" className="text-gray-500 p-0">Select an option</option>
//             <option className="p-0" value="option1">Option 1</option>
//             <option className="p-0" value="option2">Option 2</option>
//             <option className='p-0' value="option3">Option 3</option>
//           </select>
//           </div>
//         </div>

//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Popup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {/* Full window blur background */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"></div>

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg z-10 w-[30%] border border-solid border-black relative">
          <h2 className="text-lg font-semibold mb-4">Popup Content</h2>

          {/* Calendar */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h4>Journey Date:</h4>
            </div>
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="w-[80%] p-2 border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Train Input */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h4>Train:</h4>
            </div>
            <div>
              <input
                type="text"
                className="mt-0 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your train"
              />
            </div>
          </div>

          <h3 className="font-bold mb-4 text-center">Select your Boarding Train</h3>

          {/* Select Option */}
          <div className="mb-4 flex gap-[2rem]">
            <div>
              <h5>Select Option:</h5>
            </div>
            <div>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="mt-0 p-2 border border-gray-300 rounded-md"
              >
                <option value="" className="text-gray-500 p-0">
                  Select an option
                </option>
                <option className="p-0" value="option1">
                  Option 1
                </option>
                <option className="p-0" value="option2">
                  Option 2
                </option>
                <option className="p-0" value="option3">
                  Option 3
                </option>
              </select>
            </div>
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

export default Popup;

