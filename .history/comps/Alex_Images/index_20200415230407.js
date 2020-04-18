import React from "react";

const ImgFrame = ({ bgImg }) => <div>
    <div className="Frame">
        {bgImg}
    </div>
</div>

ImgFrame.defaultProps = {
    bgImg: "../Alex_Images/shower.jpg";
}

export default ImgFrame;