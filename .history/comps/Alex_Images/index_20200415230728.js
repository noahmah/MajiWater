import React from "react";

const ImgFrame = ({ bgImg }) => <div>
    <div className="Frame">
        {bgImg}
    </div>
</div>

ImgFrame.defaultProps = {
    bgImg: "./shower.jpg",
}

export default ImgFrame;