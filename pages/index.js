import Link from "next/link";
import Router from "next/router";
import "./app.css";
import CustomHeader from "../comps/Joe_Header";
import CustomButton from "../comps/Joe_Buttons";
import "../pages/HomePage/home_page.css";
import ProgBar from "../comps/Noah_ProgressBar";
import ImgFrame from "../comps/Alex_Images";
import {data, ChangeData} from "./data";
console.log(data);


const Index = () => {
    console.log(data);
    
    function nextPage(){
        Router.push("/CleansePage");
    }

  
  return <div id="home-page">
    <div id="header">
      <CustomHeader />
    </div>
    <div id="hero-image">
      {/* Tried using src to grab the logo but it didn't work */}
      <ImgFrame />
    </div>
    <div id="btns">
      <div id="btns-cont">
        <div id="btns-box">
          <div id="btn-margin">
            {/* The color= isn't working */}
            <CustomButton color="#F7FAFD" text="Start" onclick={nextPage} />
          </div>
          {/* Need to change on click from next page to AboutPage when about page is made */}
          <CustomButton color="#F7FAFD" text="About" onclick={nextPage} />
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

export default Index;
