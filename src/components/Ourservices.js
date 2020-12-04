import React from "react";
import "./Ourservices.css";
import diagnostic from "../images/DT.png";
import med from "../images/med_service.png";
function Ourservices() {
  return (
    <div className="our_services">
      <div className="container">
        <div className="text_our_services">
          <h2>Our Services</h2>
        </div>
        <div className="card_ourservices">
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    className="img-fluid"
                    src={diagnostic}
                    alt="diagnostic services"
                  ></img>
                  <h5 className="card-title">Diagnostic services</h5>
                  <p className="card-text">
                    We smoothen the process of undergoing pathology tests at
                    home. Also, one can avail discounts at their nearby
                    radiology centres for MRI, CT-Scan, Ultrasound, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid" src={med} alt="medicines"></img>
                  <h5 className="card-title">Medicines</h5>
                  <p className="card-text">
                    Spectramed is one of India's growing digital healthcare
                    platforms, where one can buy medicines online at discounted
                    prices from verified sellers.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
