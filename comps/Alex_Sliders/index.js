import React, { useState } from "react";
import "../Alex_Sliders/slider.css";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import { data, ChangeData, checkPath } from "../../data";

console.log(data);

// var data01 = 1;
// var data02 = 2;
// var data03 = 3;

const Slider = ({ data01, data02, data03 }) => {
  function nextPage() {
    if (data.page === "Shower Length") {
      Router.push("/LaundryPage");
      data.page = "Laundry";
    } else if (data.page === "Laundry Load") {
      Router.push("/DishPage");
      data.page = "Dish";
    }
  }

  // function replaceData() {
  //   if (data.page === "Laundry Load") {
  //     data01 = "1";
  //     data02 = "2";
  //     data03 = "3";
  //   }
  //   else if (data.page === "Shower Length") {
  //     data01 = "10";
  //     data02 = "15";
  //     data03 = "20";
  //   }
  // }
  // replaceData()

  const [val, setVal] = useState("3");

  return (
    <div id="slider-btn-box">
      <div className="sliderCont">
        <input
          type="range"
          min="1"
          max="3"
          className="slider"
          id="myRange"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <div className="lines">
          <div id="line">
            <b>{data01}</b>
          </div>
          <div id="line">
            <b>{data02}</b>
          </div>
          <div id="line">
            <b>{data03}</b>
          </div>
        </div>
      </div>

      <CustomButton
        color="#F7FAFD"
        text="Next"
        onclick={() => {
          if (data.page === "Shower Length") {
            switch (val) {
              case "1":
                document.querySelector("#showerlength-page").style.opacity = 0;
                document.querySelector("#showerlength-page").style.left = "-100%";
                setTimeout(function () {
                ChangeData("10 Minutes", 1);
                nextPage();
            }, 1000);
                break;
              case "2":
                document.querySelector("#showerlength-page").style.opacity = 0;
                document.querySelector("#showerlength-page").style.left = "-100%";
                setTimeout(function () {
                ChangeData("15 Minutes", 1);
                nextPage();
              }, 1000);
                break;

              case "3":
                document.querySelector("#showerlength-page").style.opacity = 0;
                document.querySelector("#showerlength-page").style.left = "-100%";
                setTimeout(function () {
                  ChangeData("20 Minutes", 1);
                nextPage();
              }, 1000);
        
            }
          } else if (data.page === "Laundry Load") {
            document.querySelector("#LaundryLoads-Page").style.opacity = 0;
            document.querySelector("#LaundryLoads-Page").style.left = "-100%";
            setTimeout(function () {
              ChangeData(String(val), 4);
              nextPage();
              
            }, 1000);
          }
        }}
      />
    </div>
  );
};

export default Slider;
