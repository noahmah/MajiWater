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

const LaundryLoadsPage = () => {
  function nextPage() {
    data.page = "Dish Wash";
    Router.push("/DishPage");
  }

  return (
    <div>
      <div>
        <CustomMenu />
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
        <Slider />
      </div>
      <div id="prog-box">
        <div id="prog-cont">
          <div id="prog-bar">
            <ProgBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryLoadsPage;
