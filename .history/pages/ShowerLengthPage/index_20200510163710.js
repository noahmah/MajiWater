import React from "react";
import "./showerLength_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import Slider from "../../comps/Alex_Sliders";
import { data, ChangeData } from "../../data";
import CustomMenu from "../../comps/Noah_Menu";
import { useEffect } from "react";



function replaceData() {
  if (data.page === "Laundry Load") {
    data01 = "1";
    data02 = "2";
    data03 = "3";
  }
  else if (data.page === "Shower Length") {
    data01 = "10";
    data02 = "15";
    data03 = "20";
  }
}
replaceData()


console.log(data);

const ShowerLengthPage = () => {
  function nextPage() {
    document.querySelector("#showerlength-page").style.opacity = 0;
    setTimeout(function () {
      Router.push("/LaundryPage");
      data.page = "Laundry";
    }, 1000);
  }

  function previousPage() {
    document.querySelector("#showerlength-page").style.opacity = 0;
    setTimeout(function () {
      Router.push("/CleansePage");
      data.page = "Cleanse";
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#showerlength-page").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="showerlength-page">
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div id="quiz">
        <div id="quiz-contents">
          <BodyText text="How long was your shower?" />
          <ImgFrame
            img={
              "https://images.unsplash.com/photo-1559819413-fbb8be49770b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            }
          />
        </div>
      </div>
      <div id="slider-contents">
        <Slider
          data01="10"
          data02="15"
          data03="30"

        />
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

export default ShowerLengthPage;
