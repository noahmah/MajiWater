import React from "react";
import "./progressBar.css";

const progBar = () => (
  <div>
    <div class="progBarCont">
      <div class="lines">
        <div id="line"></div>
        <div id="line"></div>
        <div id="line"></div>
      </div>
      <div class="progBar"></div>
    </div>
  </div>
);

export default progBar;
