import React from "react";
import "./Footer.css";
import insta from "../images/icon3.png";
import fb from "../images/fb.png";
import linkedin from "../images/icon1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="footer_content">
          <div className="row">
            <div className="footer_company col-md-6">
              <div className="icons">
                <h2>Follow Us</h2>
                <a href="https://instagram.com/spectramedofficial?igshid=12ogzmu55k3tp">
                  <img src={insta} alt="insta"></img>
                </a>
                <a href="https://www.facebook.com/Spectramed-Global-103578098193727/">
                  <img src={fb} alt="facebook"></img>
                </a>
                <a href="https://www.linkedin.com/company/spectramed-global-health-management-llp">
                  <img src={linkedin} alt="linkedin"></img>
                </a>
              </div>
            </div>
            <div className="footer_contactus col-md-6">
              <h2>Contact us</h2>
              <p>
                <a href="tel:+917208028195">+91 7208028195</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="copyright">
              Copyright © By Spectramed 2020. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
