import React from "react";
import "../Alex_Images/shower.jpg"

const ImgFrame = ({ bgImg }) => <div>
    <div className="Frame">
        {bgImg}
    </div>
</div>

ImgFrame.defaultProps = {
    bgImg: "../Alex_Images/shower.jpg";
}

export default ImgFrame;