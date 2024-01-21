import React from 'react'
import Philosophy from "../images/Philosophy.webp";
import Service from "../images/Service.webp";
import Community from "../images/Community.webp";

export default function Station() {
  return (
    <>
    <div className="container">
      <div
        style={{
          textAlign: "center",
          color: "black",
          background: "",
          padding: "20px 0",
        }}
      >
        <h4>Some of the important Stations we deliver at</h4>
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
              {/* <p class="card-text">
                At RailHealth, we believe in enhancing healthcare accessibility
                by providing seamless medical support to train passengers.
              </p> */}
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
              {/* <p class="card-text">
                We offer a comprehensive medical care for train passengers,
                addressing a wide range of health needs. Our goal is to provide
                convenient and accessible medical support, available throughout
                your rail journey.
              </p> */}
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
              {/* <p class="card-text">
                We are a network of dedicated healthcare professionals committed
                to serving the train-traveling community. We focus in empowering
                passengers with knowledge and resources along with medical
                support and medicines to maintain their health and well-being on
                the move.
              </p> */}
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
  {/* <h3>OBJECTIVE OF RAILHEALTH</h3> */}
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
          Chennai
        </h5>
        {/* <p class="card-text">
          At RailHealth, we believe in enhancing healthcare accessibility
          by providing seamless medical support to train passengers.
        </p> */}
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
        {/* <p class="card-text">
          We offer a comprehensive medical care for train passengers,
          addressing a wide range of health needs. Our goal is to provide
          convenient and accessible medical support, available throughout
          your rail journey.
        </p> */}
      </div>
    </div>
    {/* <div class="card  mx-2" style={{ border: "none" }}> */}
      {/* <img
        class="card-img-top rounded-circle"
        src={Community}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title" style={{ textAlign: "center" }}>
          Our Community
        </h5>
        <p class="card-text">
          We are a network of dedicated healthcare professionals committed
          to serving the train-traveling community. We focus in empowering
          passengers with knowledge and resources along with medical
          support and medicines to maintain their health and well-being on
          the move.
        </p>
      </div>
    </div> */}
  </div>
</div>
</div>
</>
  );
}
