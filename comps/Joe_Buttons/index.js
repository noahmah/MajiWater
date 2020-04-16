import React from 'react';
import './button.css';

const CustomButton = ({text, onclick,color}) =>  <div className = "customButtonBox" onClick={onclick}>
    <div className = "customButton">
     {text}
    </div>
</div>

CustomButton.defaultProps = {
    text: "Click here",
    color: "#F7FAFD",

}



export default CustomButton;
