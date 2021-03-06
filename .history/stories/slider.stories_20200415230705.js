import React from "react";
import Slider from "../comps/Alex_Sliders";
import ImgFrame from "../comps/Alex_Images"

export default {
    title: "Slider",
    component: Slider,
};

export const customImage = () => <ImgFrame />;
export const customSlider = () => <Slider />;