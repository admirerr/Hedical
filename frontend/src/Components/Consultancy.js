import React from "react";
import Card from "./Cards";
import logoD from "../images/logoD.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarComponent from "./Navbar";
import contact from "../images/ContactUs.png";
import Card1 from "./Card1";
const Consultancy = () => {
  return (
    <>
      
      <NavbarComponent />
      <div className="flex md:justify-center p-3 md:p-5  md:flex-row md:items-start flex-col-reverse items-center">
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
        <Card1 
          description=" Diagnose and treat a variety of neurological disorders, such as epilepsy, stroke, multiple sclerosis, and headaches and  performing neurological examinations, and conduct diagnostic tests like imaging studies (MRI, CT scans) and electrodiagnostic tests (EEG, EMG) to aid in diagnosis. "
          specialisation="Neurologist"
        />
        <Card1 
            description="Specialize in the diagnosis, treatment, and prevention of mental illnesses and emotional disorders, diagnose mental health conditions by considering biological, psychological, and social factors."
            specialisation="Psychiatrists "
        />
        <Card1 
          description="Specialize in women's reproductive health and  provide care related to pregnancy, childbirth, and the female reproductive system and also address issues like family planning, gynecological conditions, and menopause."
          specialisation="Obstetricians and Gynecologists"
        />
      </div>
    </>
  );
};
export default Consultancy;
