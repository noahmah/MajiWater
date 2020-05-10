import React from "react";
import "./cleanse_page.css";
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

const CleansePage = () => {
  function nextPage() {
    document.querySelector("#CleansePage").style.opacity = 0;
    if (data.results[0].answer === "Shower") {
      setTimeout(function () {
        Router.push("/ShowerLengthPage");
        data.page = "Shower Length";
      }, 1000);
    } else if (data.results[0].answer === "Bath") {
      document.querySelector("#CleansePage").style.opacity = 0;
      setTimeout(function () {
        Router.push("/TubVolumePage");
        data.page = "Tub Volume";
      }, 1000);
    }
  }

  function previousPage() {
    Router.push("/../");
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#CleansePage").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="CleansePage">
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div id="quiz">
        <div id="quiz-contents">
          <BodyText text="Did you shower or take a bath today" />
          <ImgFrame />
        </div>
      </div>

      <div id="btns">
        <div id="btns-cont">
          <div id="btns-box">
            <div id="btn-margin">
              <CustomButton
                color="#F7FAFD"
                text="Bath"
                onclick={() => {
                  ChangeData("Bath", 0);
                  nextPage();
                }}
              />
            </div>
            <CustomButton
              color="#F7FAFD"
              text="Shower"
              onclick={() => {
                ChangeData("Shower", 0);
                nextPage();
              }}
            />
          </div>
        </div>
        <div id="prog-box">
          <div id="prog-cont">
            <div id="prog-bar">
              <ProgBar color="linear-gradient(to right, #00ffe2 1%, #0079ff 50%)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleansePage;
