import React from "react";
import './imgFrame.css';


const defaultImg = require("../Alex_Images/shower.jpg");

const ImgFrame = ({ img }) => <div>
    <div className="frame">
        <img className="image" src={img} />
    </div>
</div>

ImgFrame.defaultProps = {
    img: defaultImg,
}

export default ImgFrame;