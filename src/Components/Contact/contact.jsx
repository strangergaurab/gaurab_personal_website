import React from "react";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const contact = () => {
  return (
    <div className="container-fluid">
       <div className="col-lg-7 mb-6 bg-secondary" id="main">
              <div className="contact-info">
                <h3 className="mb-4 mt-4 text-white fs-8">Contacts <GrContactInfo /></h3>
                <ul>
                  <li className="d-flex mb-4">
                    <i className="fas fa-map-marker-alt text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white"><FaAddressBook />Address</h5>
                      <span className="text-white">
                        Bharatpur Metropolitan-20, Chanauli
                      </span>{" "}
                      <br />
                      <span className="text-white">Chitwan Nepal</span>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <i className="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white"><FaPhoneVolume />Call Us</h5>
                      <span className="d-table text-white">9811235909</span>
                      <span className="text-white">+9811235909</span>
                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <i className="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white"><FaPhoneVolume />Social Profiles</h5>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="icons"><FaFacebook /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="icons"><FaLinkedin /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="icons"><FaXTwitter /></a>

                    </div>
                  </li>
                  <li className="d-flex mb-4">
                    <i className="fas fa-envelope text-white mr-2 font-13 mt-1"></i>
                    <div className="contact-address">
                      <h5 className="text-white"><MdOutlineMail />Email Address</h5>
                      <span className="d-table text-white">
                        gaurabstha444@gmail.com
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">Visitor Contact Details</div>
            <div className="panel-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label for="f_name">First Name</label>
                    <input
                      type="text"
                      id="f_name"
                      name="f_name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="l_name">Last Name</label>
                    <input
                      type="text"
                      id="l_name"
                      name="l_name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <label for="mobile">Contact Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="address1">Address </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="address2">Subjects</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="address2">comment</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Type Comments..."
                      id="comment"
                      name="comment"
                    ></textarea>
                  </div>
                </div>
                <p>
                  <br />
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <input
                        style={{ width: "100%" }}
                      value="Send Message"
                      type="submit"
                      name="signup_button"
                      className="btn btn-success btn-lg"
                      id="submits"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default contact;
