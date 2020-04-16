import React from "react";

const ImgFrame = ({ bgImg }) => <div>
    <div className="Frame">
        {bgImg}
    </div>
</div>

ImgFrame.defaultProps = {
    bgImg: "Fuck u m8",
}

export default ImgFrame;