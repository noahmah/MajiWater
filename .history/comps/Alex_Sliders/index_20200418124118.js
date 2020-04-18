import React from "react";
import "../Alex_Sliders/slider.css";

const Slider = () => {
    return <div>
        <div className="progBarCont">
            <input type="range" min="1" max="3" class="slider" id="myRange" />
            <div className="lines">
                <div id="line"></div>
                <div id="line"></div>
                <div id="line"></div>
            </div>
        </div>
        <div className="value">
            <p>Value: <span id="valueSlider"></span></p>
        </div>

    </div>


    // var slider = document.querySelector("#myRange");
    // var output = document.querySelector("#value");

    // output.innerHTML = slider.value;

    // slider.oninput = function () {
    //     output.innerHTML = this.value;
    // }

    // slider.addEventListener("mousemove", function () {
    //     var x = slide.value;
    //     var color = "linear-gradient(90deg, rgb(0, 163, 255)' + x + '%, rgb(13, 230, 245, 0.103) + x + '%')"
    //     slider.style.background = color;
    // })
}
export default Slider;
