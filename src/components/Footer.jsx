// import React from "react";

import { Link } from "react-router-dom";
import { gith, gmail, insta, linkedin } from "../assets";

const Footer = () => {
  var date = new Date();
  var Year = date.getFullYear();
  return (
    <>
      <div className="flex justify-center items-center sm:px-12 px-4 bg-primary py-7 w-50 h-20">
        <Link
          to="https://www.instagram.com/i_am_amit7180/"
          className="flex justify-center px-5"
          target="_blank"
        >
          <img src={insta} alt="instagram" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/amitthakur2602/"
          className="flex justify-center px-5"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </Link>
        <Link
          to="mailto:iamamitthakur2602@gmail.com"
          className="flex justify-center px-5"
          target="_blank"
        >
          <img src={gmail} alt="gmail" />
        </Link>
        <Link
          to="https://github.com/snapees"
          className="flex justify-center px-5"
          target="_blank"
        >
          <img src={gith} alt="github" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center sm:px-12 px-4 bg-primary py-2">
        <p>Copyright &copy; {Year}</p>
        <p>Created by- Amit Thakur</p>
      </div>
    </>
  );
};

export default Footer;
