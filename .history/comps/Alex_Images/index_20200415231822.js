import React from "react";

const defaultImg = require('./default.png');

const ImgFrame = ({ img }) => <div>
    <div className="Frame">
        <img src={bgImg} />
    </div>
</div>

ImgFrame.defaultProps = {
    img: { defaultImg },
}

export default ImgFrame;