import React from "react";
import './imgFrame.css';


const defaultImg = require("../Alex_Images/shower.jpg");

const ImgFrame = ({ img }) => <div>
    <img className="image" src={img} />
</div>

ImgFrame.defaultProps = {
    img: defaultImg,
}

export default ImgFrame;