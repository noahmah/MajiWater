import React from "react";
import "./tubVolume_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import { data, ChangeData } from "../../data";
import CustomMenu from "../../comps/Noah_Menu";
import { useEffect } from "react";

console.log(data);

const TubVolumePage = () => {
  function nextPage() {
    document.querySelector("#TubVolume-Page").style.opacity = 0;
    setTimeout(function () {
      Router.push("/LaundryPage");
      data.page = "Laundry";
    }, 1000);
  }

  function previousPage() {
    document.querySelector("#TubVolume-Page").style.opacity = 0;
    setTimeout(function () {
      Router.push("/CleansePage");
      data.page = "Cleanse";
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#TubVolume-Page").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="TubVolume-Page">
      {/* <div id="header">
            <CustomHeader />
        </div> */}
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div id="quiz">
        <div id="quiz-contents">
          <BodyText text="How much water did you use in the bathtub?" />
          <ImgFrame
            img={
              "https://images.unsplash.com/photo-1543918075-e3b2cc0cad11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
        </div>
      </div>

      <div id="btns">
        <div id="btns-cont">
          <div id="btns-box">
            <div id="btn-margin">
              <CustomButton
                color="#F7FAFD"
                text="Half"
                onclick={() => {
                  nextPage();
                  ChangeData("Half", 2);
                }}
              />
            </div>
            <CustomButton
              color="#F7FAFD"
              text="Full"
              onclick={() => {
                nextPage();
                ChangeData("Full", 2);
              }}
            />
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
  );
};

export default TubVolumePage;
