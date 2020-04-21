import React from "react";
import './imgFrame.css';
import '../../comps/Alex_Images/images/dishes.jpg'


const defaultImg = require('../../comps/Alex_Images/images/shower.jpg');

const ImgFrame = ({ img }) => <div>
    <div className="frame">
        <img className="image" src={img} />
    </div>
</div>

ImgFrame.defaultProps = {
    img: defaultImg,
}

export default ImgFrame;

