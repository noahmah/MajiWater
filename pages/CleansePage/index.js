
import React from "react";
import "./cleanse_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import React from 'react';
import './cleanse_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';



const CleansePage = () => {


    function nextPage(){
        Router.push("/LaundryPage");
    }

    return <div>

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
              <CustomButton color="#F7FAFD" text="Bath" />
            </div>
            <CustomButton color="#F7FAFD" text="Shower" />
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

        <CustomButton text='Bath' />
        <CustomButton text='Shower' onclick={nextPage} />
        <ProgBar />

    </div>
  );



export default CleansePage;
