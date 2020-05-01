import React from "react";
import "./showerLength_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import Slider from "../../comps/Alex_Sliders";
import { data, ChangeData } from "../data";
import CustomMenu from "../../comps/Noah_Menu";
console.log(data);

const ShowerLengthPage = () => {
  function nextPage() {
    Router.push("/LaundryPage");
  }

  return (
    <div>
      <div>
        <CustomMenu />
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
        <Slider />
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
