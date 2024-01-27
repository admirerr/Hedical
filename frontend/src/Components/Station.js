import React from 'react'
import Philosophy from "../images/Philosophy.webp";
import Service from "../images/Service.webp";
import Community from "../images/Community.webp";

export default function Station() {
  return (
    <>
    <div className="container" >
      <div
        style={{
          textAlign: "center",
          color: "black",
          background: "",
          padding: "20px 0",
        }}
      >
        <h3>Some of the important Stations we deliver at</h3>
      </div>
      <div className="container">
        <div class="card-group">
          <div class="card mx-2" style={{ border: "none" }}>
            <img
              class="card-img-top rounded-circle"
              src={Philosophy}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign: "center" }}>
              Bengaluru
              </h5>
            
            </div>
          </div>
          <div class="card mx-2" style={{ border: "none" }}>
            <img
              class="card-img-top rounded-circle"
              src={Service}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign: "center" }}>
                Pune
              </h5>
             
            </div>
          </div>
          <div class="card  mx-2" style={{ border: "none" }}>
            <img
              class="card-img-top rounded-circle"
              src={Community}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign: "center" }}>
               Hyderabad
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
        src={Philosophy}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Chennai
        </h5>
       
      </div>
    </div>
    <div class="card mx-2" style={{ border: "none" }}>
      <img
        class="card-img-top rounded-circle"
        src={Service}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
            Delhi
        </h5>
       
      </div>
    </div>
    {/* <div></div> */}
    <div class="card  mx-2" >
      <img
        class="card-img-top rounded-circle"
        src={Community}
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
</>
  );
}
