import React from "react";
import "./dish_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import Link from 'next/link';
import Router from 'next/Router';


const DishPage = () => { 

    function nextPage(){
        Router.push("/ResultsPage");
    }
  
     return (
    <div>
      <div id="header">
        <CustomHeader />
      </div>
      <div id="hero-image">
        <BodyText text="Did you use the dishwasher today?" />
      </div>
      <div id="hero-image">
        <ImgFrame
          img={
            "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
          }
        />
      </div>
      <div id="btns">
        <div id="btns-cont">
          <div id="btns-box">
            <div id="btn-margin">
              <CustomButton color="#F7FAFD" text="Yes" onclick={nextPage} />
            </div>
            <CustomButton color="#F7FAFD" text="No" onclick={nextPage} />
          </div>
        </div>
      </div>
      div id="prog-box">
      <div id="prog-cont">
        <div id="prog-bar">
          <ProgBar />
        </div>
      </div>
    </div>


}



export default DishPage;
