import React from "react";

const defaultImg = require("./Shower.jpg");

const ImgFrame = ({ img }) => <div>
    <div className="Frame">
        <img src={img} />
    </div>
</div>

ImgFrame.defaultProps = {
    img: { defaultImg }
}

export default ImgFrame;