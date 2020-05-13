import React from "react";
import Link from "next/link";
import Router from "next/router";
import "./app.css";
import CustomHeader from "../comps/Joe_Header";
import CustomButton from "../comps/Joe_Buttons";
import "../pages/HomePage/home_page.css";
import ProgBar from "../comps/Noah_ProgressBar";
import ImgFrame from "../comps/Alex_Images";
import { data } from "../data";
import CustomMenu from "../comps/Noah_Menu";
import MenuPopup from "../comps/MenuPopup";
import { useEffect } from "react";

const Index = () => {
  data.page = "Home";
  console.log(data);

  function nextPage(num) {
    switch (num) {
      case 1:
        document.querySelector("#home-page").style.opacity = 0;
        setTimeout(function () {
          Router.push("/CleansePage");
          data.page = "Cleanse";
        }, 1000);

        break;
      case 2:
        document.querySelector("#home-page").style.opacity = 0;
        setTimeout(function () {
          Router.push("/AboutPage");
          data.page = "Page";
        }, 1000);

        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#home-page").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="home-page">
      <div>
      </div>
      <div id="hero-img-flex">
        <div id="hero-image">
          {/* Tried using src to grab the logo but it didn't work */}
          {/* <ImgFrame /> */}
          <img className="logo1" src={require('../comps/Joe_Header/MajiLogo.svg')}></img>
          
        </div>
      </div>
      <div id="btns">
        <div id="btns-cont">
          <div id="btns-box">
            <div id="btn-margin">
              {/* The color= isn't working */}
              <CustomButton
                color="#F7FAFD"
                text="Start"
                onclick={() => {
                  nextPage(1);
                }}
              />
            </div>
            {/* Need to change on click from next page to AboutPage when about page is made */}
            <CustomButton
              color="#F7FAFD"
              text="About"
              onclick={() => {
                nextPage(2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
