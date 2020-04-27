
import React from "react";
import "./laundryLoads_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from 'next/router';
import ProgBar from '../../comps/Noah_ProgressBar';
import Slider from '../../comps/Alex_Sliders';



const LaundryLoadsPage = () => {


    function nextPage() {
        Router.push("/LaundryPage");
    }

    return <div>
        <div id="header">
            <CustomHeader />
        </div>
        <div id="hero-image">
            <BodyText text="How many loads of laundry did you do?" />
        </div>
        <div id="hero-image">
            <ImgFrame />
        </div>
        <div id="btns">
            <div id="btns-cont">
                <div id="btns-box">
                    <Slider />
                </div>
            </div>
            <div id="prog-box">
                <div id="prog-cont">
                    <div id="prog-bar">
                        <ProgBar />
                    </div>
                </div>
            </div>
        </div>

};


export default LaundryLoadsPage;
