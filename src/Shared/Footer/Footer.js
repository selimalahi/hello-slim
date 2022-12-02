import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="p-10   bg-black text-white mt-10 ">
        <div className="footer ">
          <div>
            {/* <img className=" h-20 w-20 footer-img" src={logo} alt="" /> */}
            <div className="about">
              {/* <img className=" h-10 w-10 footer-img" src={logo} alt="" /> */}
              <p className=" mt-2 mx-2 ">ABOUT US</p>
            </div>
            <p className="text-lg">
              I understand very well how lack of <br />
              confidence can be an obstacle. That is <br />
              why I dedicated myself to helping <br />
              people overcome their fears and improve their looks - <br />
              and their lives.
            </p>
            <div className="icon">
              <p>
                <FaFacebook></FaFacebook>
              </p>
              <p>
                <FaInstagram></FaInstagram>
              </p>
              <p>
                <FaTwitter></FaTwitter>
              </p>
            </div>
          </div>
          <div>
            <span className="footer-title">FIND US HERE</span>
            <p>Dhaka Uddan, Mohammudpur, Dhaka</p>
            <p>
              <span>Phone: 01309059764</span>
            </p>

            <p>
              <span>Email: alahi.selim@gmail.com</span>
            </p>
          </div>
          <div>
            <span className="footer-title">PAGES</span>
            <a href=" " className="link link-hover">
              About us
            </a>
            <a href=" " className="link link-hover">
              Contact
            </a>
            {/* <a href=' ' className="link link-hover">Jobs</a> */}
            <a href=" " className="link link-hover">
              Press kit
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href=" " className="link link-hover">
              Terms of use
            </a>
            <a href=" " className="link link-hover">
              Privacy policy
            </a>
            <a href=" " className="link link-hover">
              Cookie policy
            </a>
          </div>
        </div>
        <div className="mt-5 text-center">
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
