import { data, Restart } from "../../data";
import React from "react";
import "./charity.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import CustomMenu from "../../comps/Noah_Menu";
import NewWindow from 'react-new-window'

const CharityPage = () => {
    function previousPage(){
        Router.push("/../");
        data.page = "Home";
      }

  return (
    <div>
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div className="AbtAlign">
        <div id="hero-image">
          <ImgFrame
            img={
              "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
        </div>
        <div className="CharityBox">
        <BodyText
        text="Charities"
        fontSize="22px"
        fontWeight="Bold"
        />
            <div className="buttonBox">
                <div className="CharityButton" onClick={()=>{
                    window.open("https://lifewater.org/blog/uganda-water-crisis/?fbclid=IwAR1Odqvf9zhvm5LMBvIzJfXgMdMnIMaXdBe5b0ZIbhpuy17xOmdrUIUzECQ")
                }}>
                <div id="lifeWater"></div></div>
                <div className="CharityButton"
                onClick={()=>{
                    window.open("https://ugandanwaterproject.com/?fbclid=IwAR0oUHL2a7OHcPM1JVMgO272WrEztfPPnYA2R5kySS4mWwXeTsEdsLKgI5Y")
                }}>
                <div id="waterProject"></div></div>
                <div className="CharityButton"
                onClick={()=>{
                    window.open("https://www.wateraid.org/us/where-we-work/uganda?fbclid=IwAR2Njq5GARLNHrmdZC-mBE2sXQ7_YVdYFtqBdCYWXuHH0jb0Birmvr1wiqQ")
                }}>
                <div id="waterAid"></div></div>
                
            </div>
        </div>
      </div>
      
    </div>

  );
};

export default CharityPage;
