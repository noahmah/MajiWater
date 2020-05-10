import React from "react";
import "./progressBar.css";

const ProgBar = ({ background }) => (
  <div>
    <div className="progBarCont">
      <div className="lines">
        <div id="line"></div>
        <div id="line"></div>
        <div id="line"></div>
      </div>
      <div className="progBar" style={{ background: background }}></div>
    </div>
  </div>
);

ProgBar.defaultprops = {
  background: "linear-gradient(to right, #00ffe2 0%, #0079ff 100%);",
};

export default ProgBar;
