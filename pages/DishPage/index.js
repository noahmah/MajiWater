import React from "react";
import "./dish_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import Link from "next/link";
import Router from "next/router";
import { data, ChangeData, checkPath } from "../../data";
import CustomMenu from "../../comps/Noah_Menu";
import { useEffect } from "react";
import CustomBG from "../../comps/WaterBG";

console.log(data);

const DishPage = () => {
  function nextPage() {
    document.querySelector("#Dish-Page").style.opacity = 0;
    document.querySelector("#Dish-Page").style.left = "-100%";
    setTimeout(function () {
      data.page = "Results";
      Router.push("/ResultsPage");
    }, 1000);
  }

  function previousPage() {
    if (data.results[3].answer === "Yes") {
      document.querySelector("#Dish-Page").style.opacity = 0;
      setTimeout(function () {
        data.page = "Laundry Load";
        Router.push("/LaundryLoadsPage");
      }, 1000);
    } else if (data.results[3].answer === "No") {
      document.querySelector("#hDish-Page").style.opacity = 0;
      setTimeout(function () {
        data.page = "Laundry";
        Router.push("/LaundryPage");
      }, 1000);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#Dish-Page").style.opacity = 1;
    }, 50);
  });

  return (
    <div id="Dish-Page">
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
              {" "}
              <BodyText text="Did you use the dishwasher today?" />
              <ImgFrame
                img={
                  "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
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
                    text="Yes"
                    onclick={() => {
                      nextPage();
                      ChangeData("Yes", 5);
                    }}
                  />
                </div>
                <CustomButton
                  color="#F7FAFD"
                  text="No"
                  onclick={() => {
                    nextPage();
                    ChangeData("No", 5);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="prog-box">
        <div id="prog-cont">
          <div id="prog-bar">
            <ProgBar color="linear-gradient(to right, #00ffe2 80%, #fff 100%)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishPage;
