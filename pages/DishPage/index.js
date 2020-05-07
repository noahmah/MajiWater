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
console.log(data);

const DishPage = () => {
  function nextPage() {
    data.page = "Results";
    console.log(data); 
    Router.push("/ResultsPage");

    
  }

  function previousPage(){
    if(data.results[3].answer === "Yes"){
      data.page = "Laundry Load";
      Router.push("/LaundryLoadsPage");
      
      }
      else if(data.results[3].answer === "No"){
        data.page = "Laundry";
        Router.push("/LaundryPage");
     }
  }

  return (
    <div>
      <div>
        <CustomMenu 
        backClick = {()=>{
          previousPage();
        }}/>
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

export default DishPage;
