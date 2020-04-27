
import React from "react";
import "./tutorial_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from 'next/router';
import ProgBar from '../../comps/Noah_ProgressBar';



const TutorialPage = () => {


    function nextPage() {
        Router.push("/LaundryPage");
    }

    return <div>
        <div id="header">
            <CustomHeader />
        </div>
        <div id="hero-image">
            <BodyText text="This Is a tutorial Page" />
        </div>
        <div id="hero-image">
            <ImgFrame img={''} />
        </div>
        <div id="btns">
            <div id="btns-cont">
                <div id="btns-box">
                    <div id="btn-margin">
                        <CustomButton color="#F7FAFD" onclick={nextPage} />
                    </div>
                    <CustomButton color="#F7FAFD" onclick={nextPage} />
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


export default TutorialPage;
