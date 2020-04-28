import React from "react";
import ReactDom from "react-dom";
import "./menu.css";
import {MdArrowBack} from "react-icons/md";
import { MdMenu } from "react-icons/md";

import CustomHeader from "../Joe_Header";

const CustomMenu = ({ onclick }) => (
  <div>
    <div className="curved">
      <div className="menu">
        <div className="menu-btn back" onClick={onclick}>
          {/* <MdArrowBack size="30px" color="#fff" /> */}
        </div>
        <div className="menu-btn" onClick={onclick}>
          <CustomHeader />
        </div>
        <div className="menu-btn hamburger" onClick={onclick}>
          {/* <MdMenu size="30px" color="#fff" /> */}
        </div>
      </div>
    </div>
  </div>
);

export default CustomMenu;
