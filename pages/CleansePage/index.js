import React from "react";
import "./cleanse_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import { data, ChangeData } from "../data";
import CustomMenu from "../../comps/Noah_Menu";
console.log(data);

const CleansePage = () => {
  function nextPage() {
    if (data.results[0].answer === "Shower") {
      data.page = "Shower Length";
      Router.push("/ShowerLengthPage");
    } else if (data.results[0].answer === "Bath") {
      data.page = "Tub Volume";
      Router.push("/TubVolumePage");
    }
  }

  return (
    <div>
      {/* <div id="header">
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
                        <CustomButton color="#F7FAFD" text="Bath" onclick={nextPage} />
                    </div>
                    <CustomButton color="#F7FAFD" text="Shower" onclick={nextPage} />
                </div>
            </div>
        <CustomHeader />
      </div> */}
      <div>
        <CustomMenu />
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
              <ProgBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleansePage;
