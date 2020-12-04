import React, { useState } from "react";
import "./Banner.css";
import image from "../images/healthcare.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEnquiry } from "../user/helper/formapi";

var form = new FormData();
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

  const { name, email, phone, test_type, test_name, pincode, error } = values;

  const handleChange = (name) => (event) => {
    //setValues({ ...values, error: false, [name]: event.target.value.trim() });
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    // console.log(name,value)
    if (name === "photo") {
      //console.log('myfile',value, value.name);
      form.append("myfile", value);
      console.log("MYFILE", form.get("myfile"));
    }

    setValues({ ...values, [name]: value });
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
    form.append("name", values.name);
    form.append("email", values.email);
    form.append("phone", values.phone);
    form.append("test_type", values.test_type);
    form.append("test_name", values.test_name);
    form.append("pincode", values.pincode);
    event.preventDefault();
    if (pincodes(pincode) && validatePhone(phone) && name) {
      setValues({ ...values, error: false });

      console.log(
        form.get("name"),
        form.get("email"),
        form.get("phone"),
        form.get("myfile")
      );
      createEnquiry(form)
        .then((data) => {
          if (data?.err) {
            setValues({ ...values, error: data?.err });
            toast.error("Unsuccessful");
            console.log(error);
          } else {
            toast.success("You will soon recieve a call");
            document.getElementById("myform").reset();
            console.log("VALUES", values);
            console.log(data);

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

            form.delete("myfile");
            console.log("VALUES AFTER SUBMIT", values);
            console.log(
              "AFTER SUCCESS FORMDATA CHECK",
              form.get("name"),
              form.get("myfile")
            );

            setCheckbox(false);
          }
        })

        .catch((err) => console.log(err));
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
    //window.location = "/";
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
                    onChange={handleChange("name")}
                    value={name}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange("email")}
                    value={email}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg. 7208028195"
                    onChange={handleChange("phone")}
                    value={phone}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="test_type">Test Type</label>
                  <select
                    className="form-control"
                    onChange={handleChange("test_type")}
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
                    onChange={handleChange("test_name")}
                    value={test_name}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg.400069 "
                    onChange={handleChange("pincode")}
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
                    onChange={handleChange("photo")}
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
