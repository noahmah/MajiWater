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
console.log(data);

const LaundryPage = () => {
  function nextPage() {
    if (data.results[3].answer === "Yes") {
      data.page = "Laundry Load";
      Router.push("/LaundryLoadsPage");
    } else {
      data.page = "Dish Wash";
      Router.push("/DishPage");
    }
  }

  function previousPage(){
    if(data.results[0].answer === "Shower"){
    data.page = "Shower Length";
    Router.push("/ShowerLengthPage");
    
    }
    else if(data.results[0].answer === "Bath"){
      data.page = "Tub Volume";
      Router.push("/TubVolumePage");
    }
  }
  return (
    <div>
      <div>
        <CustomMenu
           backClick = {()=>{
            previousPage();
          }}
        />
      </div>
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
            <ProgBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryPage;
