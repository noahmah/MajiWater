import React from 'react';
import './header.css';

const CustomHeader = ({ text }) => <div>
  <div className="headerStyles">
    {/* {text} */}
    <img src="./MajiLogo"></img>
  </div>
</div>

CustomHeader.defaultProps = {
  text: "MAJI",

}



export default CustomHeader;
