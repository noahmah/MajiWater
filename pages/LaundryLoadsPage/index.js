import React from "react";
import "./laundryLoads_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import Slider from "../../comps/Alex_Sliders";
import CustomMenu from "../../comps/Noah_Menu";
import { data } from "../../data";
import { useEffect } from "react";
import CustomBG from "../../comps/WaterBG";

const LaundryLoadsPage = () => {
  function nextPage() {
    document.querySelector("#LaundryLoads-Page").style.opacity = 0;
    document.querySelector("#LaundryLoads-Page").style.left = "-100%";
    setTimeout(function () {
      data.page = "Dish Wash";
      Router.push("/DishPage");
    }, 1000);
  }

  function previousPage() {
    document.querySelector("#LaundryLoads-Page").style.opacity = 0;
    setTimeout(function () {
      Router.push("/LaundryPage");
      data.page = "Laundry";
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#LaundryLoads-Page").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="LaundryLoads-Page">
      <div id="transition">
        <div id="transition-box">
          <div id="bg">
            <CustomBG />
          </div>
          <div>
            <CustomMenu
              backClick={() => {
                previousPage();
              }}
            />
          </div>
          <div id="quiz">
            <div id="quiz-contents">
              <BodyText text="How many loads of laundry did you do?" />
              <ImgFrame
                img={
                  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                }
              />
            </div>
          </div>
          <div id="slider-contents">
            <Slider data01="1" data02="2" data03="3" />
          </div>
        </div>
      </div>
      <div id="prog-box">
        <div id="prog-cont">
          <div id="prog-bar">
            <ProgBar color="linear-gradient(to right, #00ffe2 60%, #fff 100%)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryLoadsPage;
