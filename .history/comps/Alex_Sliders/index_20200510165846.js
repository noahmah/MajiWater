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
      data.page = "Laundry";
      Router.push("/LaundryPage");
    } else if (data.page === "Laundry Load") {
      data.page = "Dish";
      Router.push("/DishPage");
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
          <div id="line"><b>1{data01}</b></div>
          <div id="line"><b>1{data02}</b></div>
          <div id="line"><b>1{data03}</b></div>
        </div>
      </div>

      <CustomButton
        color="#F7FAFD"
        text="Next"
        onclick={() => {
          if (data.page === "Shower Length") {
            switch (val) {
              case "1":
                ChangeData("10 Minutes", 1);
                nextPage();
              case "2":
                ChangeData("15 Minutes", 1);
                nextPage();
              case "3":
                ChangeData("20 Minutes", 1);
                nextPage();
            }
          } else if (data.page === "Laundry Load") {
            ChangeData(String(val), 4);
            nextPage();
          }
        }}
      />
    </div>
  );
};




export default Slider;
