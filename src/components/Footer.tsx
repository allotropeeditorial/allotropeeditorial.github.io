import React, { Component, useState } from "react";
import Contact from "./Contact";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="footer" className=" text-center">
      <div id="footer1" className="bg-[#f5f5f5]">
        <footer>
          <br />
          <Contact>
            <button onClick={() => setShowModal(true)}></button>
          </Contact>
          <br />
          <br />
          <h6 className="text-2xl">ALLOTROPE / (ˈÆLƏˌTRƏƱP) /</h6>
          <br />
          <p>
            noun. any of two or more physical forms in which an element can
            exist
          </p>
          <br />
        </footer>
      </div>
      <div id="footer2" className="bg-[#4b0082] text-[#b498c8]">
        <footer>
          <br />
          <div id="memberships" className="flex items-center px-80 pr-80">
            <img
              className="mx-auto"
              src="https://i.imgur.com/4k9tGBg.png"
              alt="EFA"
              width="150"
              height="75"
            />
            <img
              className="mx-auto"
              src="https://i.imgur.com/etDrTQ0.png"
              alt="ACES"
              width="175"
              height="150"
            />
          </div>
          {/* <a
            href="https://www.facebook.com/allotropeediting"
            className="fa fa-facebook fa-lg m-3"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/allotropeediting/"
            className="fa fa-instagram fa-lg m-3"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/company/allotropeediting/?viewAsMember=true"
            className="fa fa-linkedin fa-lg m-3"
            target="_blank"
          ></a> */}
          <p>®2019 by Allotrope Editorial - All Rights Reserved</p>
          <br />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
