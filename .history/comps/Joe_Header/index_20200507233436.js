import React from 'react';
import './MajiLogo.svg';
import './header.css';

const CustomHeader = ({ text }) => <div>
  <div className="headerStyles">
    {/* {text} */}
    <svg src="./MajiLogo.svg"></svg>
  </div>
</div>

CustomHeader.defaultProps = {
  text: "MAJI",

}



export default CustomHeader;
