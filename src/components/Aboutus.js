import React from "react";
import "./Aboutus.css";
import DT from "../images/icon-DT.png";
import HC from "../images/icon-HC.png";
import GM from "../images/icon-GM.png";
function Aboutus() {
  return (
    <div className="about_us">
      <div className="container">
        <div className="text_about_us">
          <h2>About Us</h2>
        </div>

        <div className="card_aboutus">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid " src={DT} alt="labtest"></img>
                  <h5 className="card-title">Diagnostic Test</h5>
                  <p className="card-text">
                    We have partnered with standardized pathology and radiology
                    centres with state of art infrastructure for provision of
                    good quality affordable healthcare services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid" src={HC} alt="healtcare"></img>
                  <h5 className="card-title">Healthcare</h5>
                  <p className="card-text">
                    Our vision is to bring the healthcare services at the
                    comfort of your home. Our goal is to reach to the remote
                    areas which lack basic healthcare facilities to let noone
                    deprive of their healthcare needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid" src={GM} alt="healtcare"></img>
                  <h5 className="card-title">Generic Medicines</h5>
                  <p className="card-text">
                    We have a huge database of more than one lakh pharmaceutical
                    products, letting the patients make an informed choice from
                    the available alternative brands.
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

export default Aboutus;
