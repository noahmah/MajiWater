
import React from "react";
import "./showerLength_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from 'next/router';
import ProgBar from '../../comps/Noah_ProgressBar';
import Slider from '../../comps/Alex_Sliders';
import {data, ChangeData} from "../data";
console.log(data);


const ShowerLengthPage = () => {


    function nextPage() {
        Router.push("/LaundryPage");
    }

    return <div>
        <div id="header">
            <CustomHeader />
        </div>
        <div id="hero-image">
            <BodyText text="How long was your shower?" />
        </div>
        <div id="hero-image">
            <ImgFrame img={'https://images.unsplash.com/photo-1559819413-fbb8be49770b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'} />
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
    </div>

};


export default ShowerLengthPage;
