import React from "react";
import "../Alex_Sliders/slider.css";

const slider = () => (
    <div>
        <div class="slidecontainer">
            <p>Default range slider:</p>
            <input type="range" min="1" max="100" value="50">

                <p>Custom range slider:</p>
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</div>

    </div>
);

export default slider;