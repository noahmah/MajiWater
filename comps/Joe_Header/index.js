import React from 'react';
import './header.css';

const CustomHeader = ({text}) =><div>
  <div className="headerStyles">
    {text}
  </div>
</div>

CustomHeader.defaultProps = {
    text: "MAJI",
}



export default CustomHeader;
