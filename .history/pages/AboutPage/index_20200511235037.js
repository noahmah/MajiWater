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
      <div className="AbtAlign">
        <div id="hero-image">
          <ImgFrame
            img={
              "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            }
          />
        </div>
        <div id="abt-text">
          <BodyText text="About Maji" fontWeight="" fontSize="1.5em"></BodyText>
          <BodyText text="Here at Maji, we are heavily concerned about the Uganda water Crisis, and we think you should too. According to the UN, to stay healthy and clean a human should consume around 50L of water per day. Unfortunately, in Uganda, the median consumption of water is less than 17L per person according to Uganda’s Poverty Eradication Action Plan." />
          <BodyText text="Mission Statement" fontWeight="" fontSize="1.5em"></BodyText>
          <BodyText text="Our Mission Statement is to shine a light on the Ugandan water crisis and to raise awareness for nonprofit organizations.."></BodyText>
        </div>

      </div>
      <div id="btns">
        <div id="btns-cont">
          <div id="btns-box_abt">
            <CustomButton
              color="#F7FAFD"
              text="Start Quiz"
              onclick={nextPage}
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutPage;
