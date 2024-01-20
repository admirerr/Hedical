// import React from 'react';
// import '../App.css'
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDotCircle } from '@fortawesome/free-regular-svg-icons'; // Use the appropriate icon from Font Awesome
// import { call } from './icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// function LocationCard() {
//   return (
//     <MDBContainer className="my-5 gradient-form" style={{ maxWidth: '60%' }}>

//       <MDBRow>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column ms-5 pt-3 "  style={{ padding: '20px 20px',width:'120%'}}>
//           {/* <div style={{display:"flex", justifyContent:"space-between"}}>
//               <button style={{borderRadius:"15px"}}>Emergency</button>
//               <button style={{borderRadius:"15px"}}>Rental</button>
//               <button style={{borderRadius:"15px"}}>Bulk</button>
//             </div> */}

//             <div style={{boxShadow: '-3px 3px 4px 0px #ffd4d4',padding:'2em',borderRadius:'1rem',border:' 2px solid #e5dddd'}}>
//             <div style={{display:'flex' ,flexDirection:'row'}}>
//                 <div style={{width:'80%',display:'flex' ,flexDirection:'row',justifyContent:'space-between'}}>
//                     <button style={{borderRadius:"15px"}}>Emergency</button>
//                     <button style={{borderRadius:"15px"}}>Rental</button>
//                     <button style={{borderRadius:"15px"}}>Bulk</button>
//                 </div>
//             </div>

//             {/* <FontAwesomeIcon icon={faDotCircle} style={{ color: "#1ecc4a" ,marginLeft:'-38rem',marginTop:''}} /> */}
//             <h6>Pickup Location</h6>
//             <MDBInput wrapperClass='mb-4' label='Enter Pickup Address Here' id='form1' type='text' />
//             <h6>Drop Location</h6>
//             <MDBInput wrapperClass='mb-4' label='Enter Destination Address Here' id='form2' type='text' />
//             <MDBBtn
//                 style={{
//                     backgroundColor:'#17A589',

//                 }}

//             >

//                 <FontAwesomeIcon icon="fa-regular fa-clock" style={{color: "#63E6BE"}} className='me-2' />
//                 Search Ambulance</MDBBtn>
//                 </div>
//             <div className="text-center pt-1 mb-5 pb-1 " style={{ marginTop: '10px' }} >

//               <MDBBtn className="mb-4 w-100 gradient-custom-2" style={{borderRadius:'15px'}}>
//               <FontAwesomeIcon icon="phone" className="me-2" />
//                 Call Emergency 18008-908-208</MDBBtn>
//               <MDBBtn className="mb-4 w-100 gradient-custom-2" style={{borderRadius:'15px'}}>
//               {/* <FontAwesomeIcon icon="phone" className="me-2" /> */}
//               <FontAwesomeIcon icon="fa-solid fa-circle-plus " className='me-2' />
//                 Check Hospitals Availability</MDBBtn>
//               {/* <a className="text-muted" href="#!">Forgot password?</a> */}
//             </div>

//             {/* <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//               {/* <p className="mb-0">Don't have an account?</p>
//               <MDBBtn outline className='mx-2' color='danger'>
//                 Danger
//               </MDBBtn> */}
//             {/* </div> */}

//           </div>

//         </MDBCol>

//         <MDBCol col='6' className="mb-5">
//           <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//             <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//               <h4 className="mb-4">We are more than just a company</h4>
//               <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>

//           </div>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default LocationCard;

import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LocationCard = () => {
  const [label,setLabel]=useState('pnr')
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
          className="hover:bg-[#17A589] justify-center cursor-pointer flex items-center  hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5  m-2"
          style={{ border: "1px solid gray" }}
          onClick={()=>{setLabel('pnr')}}
        >
          PNR
        </div>
        <div
          className="hover:bg-[#17A589] cursor-pointer justify-center flex items-center hover:text-gray-100 transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5 pt-1 pb-1 m-2"
          style={{ border: "1px solid gray" }}
          onClick={()=>{setLabel('train')}}
        >
          TRAIN NO./NAME
        </div>
        <div
          className="hover:bg-[#17A589] hover:text-gray-100 justify-center cursor-pointer flex items-center transition-all duration-300 ease-in-out hover:scale-110 rounded-[20px] pl-5 pr-5 pt-1 pb-1 m-2"
          style={{ border: "1px solid gray" }}
          onClick={()=>{setLabel('station')}}
        >
          STATION
        </div>
      </div>
      <div>
        {/* <div className="mt-4 mb-1">Pick Location</div> */}

        <div className="flex flex-row pt-3">
          <div className="w-[10%] bg-gray-200 flex justify-center items-center ">
            <div
              className="flex justify-center items-center rounded-full w-[2.2vw] h-[2.2vw]"
              style={{ border: "3px solid #17A589" }}
            >
              <div className="bg-[#17A589] w-[1vw] h-[1vw] rounded-full"></div>
            </div>
          </div>
          {label==='pnr' &&
          <input
            type="text"
            className="pl-2 w-[90%] bg-gray-200 w-full h-[5vh] "
            placeholder="ENTER 10 DIGIT PNR NO."
          ></input>}
          {label==='station' &&
          <input
            type="text"
            className="pl-2 w-[90%] bg-gray-200 w-full h-[5vh] "
            placeholder="ENTER STATION"
          ></input>
          }
          {label==='train' &&
          <input
            type="text"
            className="pl-2 w-[90%] bg-gray-200 w-full h-[5vh] "
            placeholder="ENTER TRAIN NO."
          ></input>
          }
        </div>

        {/* <div className="mt-2 mb-1">Drop Location</div>
        <div className="flex flex-row">
        <div className="w-[10%] bg-gray-200 flex justify-center items-center">
            <div className="flex justify-center items-center  w-[2vw] h-[2vw]" style={{border:"3px solid #C4364E"
            }}>
              <div className="bg-[#C4364E] w-[1vw] h-[1vw] "></div>
            </div>
          </div>
          <input type="text" className="pl-2 w-[90%] bg-gray-200 w-full h-[5vh]" placeholder="Enter Destination Address here"></input>
       
        </div> */}

        <div className="flex justify-between pl-5 pr-5 p-3">
          <div>
            <div class="flex items-center mb-4">
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
            <div class="flex items-center">
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
            <div class="flex items-center mb-4">
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
            <div class="flex items-center">
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
      <div className="flex flex-row mt-4 justify-between">
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
          className="w-[85%] text-[2vh] flex justify-center text-white text-center items-center p-2 bg-yellow-500 cursor-pointer rounded-2"
          style={{ fontWeight: "bold" }}
        >
          Search
        </div>
      </div>
    </div>
  );
};
export default LocationCard;
