import React from "react";
import "./progressBar.css";

const ProgBar = ({ color }) => (
  <div>
    {/* <div className="progBar" style={{ backgroundColor: background }}></div> */}
    <div className="progBarCont">
      <div className="progBar" style={{ background: color }}></div>
      <div className="lines">
        <div id="line"></div>
        <div id="line"></div>
        <div id="line"></div>
      </div>
      {/* <div className="progBar" style={{backgroundColor:BacColor}}></div> */}
    </div>
  </div>
);

ProgBar.defaultProps = {
  // color: "blue",
  color: "linear-gradient(to right, #00ffe2 0%, #0079ff 100%)",
};

export default ProgBar;
