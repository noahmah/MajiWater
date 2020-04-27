
import React from "react";
import "./tubVolume_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from 'next/router';
import ProgBar from '../../comps/Noah_ProgressBar';



const TubVolumePage = () => {


    function nextPage() {
        Router.push("/LaundryPage");
    }

    return <div>
        <div id="header">
            <CustomHeader />
        </div>
        <div id="hero-image">
            <BodyText text="Did you shower or take a bath today" />
        </div>
        <div id="hero-image">
            <ImgFrame />
        </div>
        <div id="btns">
            <div id="btns-cont">
                <div id="btns-box">
                    <div id="btn-margin">
                        <CustomButton color="#F7FAFD" text="Half" onclick={nextPage} />
                    </div>
                    <CustomButton color="#F7FAFD" text="Full" onclick={nextPage} />
                </div>
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


export default TubVolumePage;
