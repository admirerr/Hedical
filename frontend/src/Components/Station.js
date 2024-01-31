import React from 'react'
import varanasiRailway from "../images/varanasiRailway2.jpg"
import lucknowRailway from "../images/lucknow1.jpeg"
import prayag from "../images/prayag1.png"
import mumbai from "../images/mumbaiS.png"
import kanpur from "../images/kanpurS.png"
import fatehpur from "../images/fatehpurR.png"
export default function Station() {
  return (
    <>
    <div className="container " >
      <div
        style={{
          textAlign: "center",
          color: "black",
          background: "",
          padding: "20px 0",
          
        }}
      >
        <h3 className='font-semibold'>Some of the Important Stations We Deliver At!!</h3>
      </div>
      <div className="container">
  <div class="card-group">
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top  rounded-circle"
        src={varanasiRailway}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Varanasi
        </h5>
       
      </div>
    </div>
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top rounded-circle"
        src={lucknowRailway}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
            Lucknow
        </h5>
       
      </div>
    </div>
    {/* <div></div> */}
    <div class="card  mx-2" >
      <img
        class="card-img-top rounded-circle"
        src={prayag}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Prayagraj
        </h5>
        
      </div>
    </div>
  </div>
</div>
    </div>

<div className="container">
<div
  style={{
    textAlign: "center",
    color: "black",
    background: "",
    padding: "20px 0",
  }}
>
  
</div>
<div className="container">
  <div class="card-group">
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top  rounded-circle"
        src={mumbai}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Mumbai
        </h5>
       
      </div>
    </div>
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top rounded-circle"
        src={kanpur}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
            kanpur
        </h5>
       
      </div>
    </div>
    {/* <div></div> */}
    <div class="card  mx-2" >
      <img
        class="card-img-top rounded-circle"
        src={fatehpur}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Fatehpur
        </h5>
        
      </div>
    </div>
  </div>
</div>
</div>
</>
  );
}
