import React from "react";
import "./laundry_page.css";
import Link from "next/link";
import Router from "next/router";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import { data, ChangeData } from "../../data";
import CustomMenu from "../../comps/Noah_Menu";
import { useEffect } from "react";

console.log(data);

const LaundryPage = () => {
  function nextPage() {
    if (data.results[3].answer === "Yes") {
      document.querySelector("#Laundry-Page").style.opacity = 0;
      setTimeout(function () {
        data.page = "Laundry Load";
        Router.push("/LaundryLoadsPage");
      }, 1000);
    } else {
      document.querySelector("#Laundry-Page").style.opacity = 0;
      setTimeout(function () {
        data.page = "Dish Wash";
        Router.push("/DishPage");
      }, 1000);
    }
  }

  function previousPage() {
    if (data.results[0].answer === "Shower") {
      data.page = "Shower Length";
      Router.push("/ShowerLengthPage");
    } else if (data.results[0].answer === "Bath") {
      data.page = "Tub Volume";
      Router.push("/TubVolumePage");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#Laundry-Page").style.right = 0;
      document.querySelector("#Laundry-Page").style.opacity = 1;
    }, 50);
  });

  return (
    <div>
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div id="Laundry-Page">
        <div id="quiz">
          <div id="quiz-contents">
            <BodyText text="Did you do the laundry today?" />
            <ImgFrame
              img={
                "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
              }
            />
          </div>
        </div>
        <div id="btns">
          <div id="btns-cont">
            <div id="btns-box">
              <div id="btn-margin">
                <CustomButton
                  text="Yes"
                  onclick={() => {
                    ChangeData("Yes", 3);
                    nextPage();
                  }}
                />
              </div>
              <CustomButton
                text="No"
                onclick={() => {
                  ChangeData("No", 3);
                  nextPage();
                }}
              />
            </div>
          </div>
        </div>
        <div id="prog-box">
          <div id="prog-cont">
            <div id="prog-bar">
              <ProgBar color="linear-gradient(to right, #00ffe2 60%, #0079ff 100%)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryPage;
