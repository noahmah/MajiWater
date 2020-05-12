import { data, Restart } from "../../data";
import React from "react";
import "./about_page.css";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import Router from "next/router";
import ProgBar from "../../comps/Noah_ProgressBar";
import CustomMenu from "../../comps/Noah_Menu";

const AboutPage = () => {
  function nextPage() {
    Restart();
    Router.push("/CleansePage");
    data.page = "Cleanse";
  }

  return (
    <div>
      <div>
        <CustomMenu
          backClick={() => {
            previousPage();
          }}
        />
      </div>
      <div>
        <div id="hero-image">
          <ImgFrame
            img={
              "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
        </div>
        <div id="abt-text">
          <BodyText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
        <div id="btns">
          <div id="btns-cont">
            <div id="btns-box">
              <CustomButton
                color="#F7FAFD"
                text="Start Quiz"
                onclick={nextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
