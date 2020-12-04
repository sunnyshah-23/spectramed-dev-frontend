import React, { useState } from "react";
import "./Banner.css";
import image from "../images/healthcare.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEnquiry } from "../user/helper/formapi";
import axios from "axios";

const onclicktc = (e) => {
  e.preventDefault();
  window.location = "/termsandconditions";
};
function Banner() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    test_type: "",
    test_name: "",
    pincode: "",
    error: "",
    photo: "",
  });

  const [checkbox, setCheckbox] = useState(false);

  const {
    name,
    email,
    phone,
    test_type,
    test_name,
    pincode,
    photo,
    error,
  } = values;

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (e.target.files.length > 1) {
      const base64 = await convertBase64(file);
      console.log("BASE64", base64);
      setValues((prevState) => ({ ...prevState, photo: base64 }));
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setValues({
      ...values,
      [evt.target.name]: value,
    });
  };
  // const validateEmail = (email) =>{
  //   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return emailPattern.test(email);
  // }

  const pincodes = (pin) => {
    return pin > 400000 && pin < 499999;
  };

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("VALUES", values);
    if (pincodes(pincode) && validatePhone(phone) && name) {
      setValues({ ...values, error: false });
      axios
        .post("http://localhost:8000/api/enquiry", values)
        .then((res) => {
          console.log(res);
          toast.success("You will soon recieve a call");
          document.getElementById("myform").reset();
          console.log("VALUES", values);
          setValues({
            name: "",
            email: "",
            phone: "",
            test_type: "",
            test_name: "",
            pincode: "",
            error: "",
            photo: "",
          });

          setCheckbox(false);
        })
        .catch((error) => {
          setValues({ ...values, error: error.error });
          toast.error("Unsuccessful");
          console.log(error);
        });
    } else {
      toast.error("Invalid Details");
      setValues({
        name: "",
        email: "",
        phone: "",
        test_type: "",
        test_name: "",
        pincode: "",
        error: "",
        photo: "",
      });
      setCheckbox(false);
    }

    //   if (pincodes(pincode) && validatePhone(phone) && name) {
    //     setValues({ ...values, error: false });

    //     createEnquiry(form)
    //       .then((data) => {
    //         if (data?.err) {
    //           setValues({ ...values, error: data?.err });
    //           toast.error("Unsuccessful");
    //           console.log(error);
    //         } else {
    //           toast.success("You will soon recieve a call");
    //           document.getElementById("myform").reset();
    //           console.log("VALUES", values);
    //           console.log(data);

    //           setValues({
    //             name: "",
    //             email: "",
    //             phone: "",
    //             test_type: "",
    //             test_name: "",
    //             pincode: "",
    //             error: "",
    //             photo: "",
    //           });

    //           setCheckbox(false);
    //         }
    //       })

    //       .catch((err) => console.log(err));
    //   } else {
    //     toast.error("Invalid Details");
    //     setValues({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       test_type: "",
    //       test_name: "",
    //       pincode: "",
    //       error: "",
    //       photo: "",
    //     });
    //     setCheckbox(false);
    //   }
    //   //window.location = "/";
  };
  return (
    <div className="banner">
      <div className="container">
        <ToastContainer />
        <div className="row">
          <div className="col-md-6 text">
            <p className="title">
              One Call Booking
              <p className="subtitle">
                Call now and book any pathology or radiology test at home.{" "}
                <br /> <br />
                {/* <div className="buy_button"> */}
                <button
                  type="button"
                  className="btn btn-primary btn-large buy_button "
                  id="btn_text"
                  data-toggle="modal"
                  data-target="#registerform"
                >
                  Book Now
                </button>
                {/* </div> */}
              </p>
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid doc" src={image} alt="medical"></img>
          </div>
        </div>
      </div>

      {/* // <!-- Modal --> */}

      <div
        className="modal fade"
        id="registerform"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="myform">
                <div className="htmlForm-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                    value={name}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg. 7208028195"
                    name="phone"
                    onChange={handleChange}
                    value={phone}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="test_type">Test Type</label>
                  <select
                    className="form-control"
                    name="test_type"
                    onChange={handleChange}
                    value={test_type}
                  >
                    <option defaultValue>Choose..</option>
                    <option>Pathology</option>
                    <option>Radiology</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="test_type">Test Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="(optional)"
                    name="test_name"
                    onChange={handleChange}
                    value={test_name}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg.400069 "
                    name="pincode"
                    onChange={handleChange}
                    value={pincode}
                    required
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Upload Prescription(optional)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="upload"
                    onChange={(e) => uploadImage(e)}
                  />
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={() => setCheckbox(!checkbox)}
                    checked={checkbox}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    <a href="#" onClick={onclicktc}>
                      I agree to terms and conditions
                    </a>
                  </label>
                </div>

                <br />

                <button
                  type="submit"
                  className="btn btn-info"
                  data-dismiss="modal"
                  onClick={onSubmit}
                  disabled={!checkbox}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
