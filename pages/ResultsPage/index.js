import React from "react";
import "./result_page.css";
import Link from "next/link";
import Router from "next/router";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import { data, ChangeData, checkPath } from "../../data";
import CustomMenu from "../../comps/Noah_Menu";
import { useEffect } from "react";

console.log(data);

const ResultPage = () => {
  checkPath();

  function nextPage() {
    Router.push("/../");
  }

  function previousPage() {
    data.page = "Dish Wash";
    Router.push("/DishPage");
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
      <div id="results-header">
        <CustomHeader text="Results" />
      </div>
      <div id="results-text">
        <BodyText fontSize="18px" text={data.results[0].question} />
        <BodyText color="#000000" text={data.results[0].answer} />
        {data.results[0].answer === "Shower" ? (
          <BodyText fontSize="18px" text={data.results[1].question} />
        ) : null}
        {data.results[0].answer === "Bath" ? (
          <BodyText fontSize="18px" text={data.results[2].question} />
        ) : null}
        {data.results[0].answer === "Shower" ? (
          <BodyText color="#000000" text={data.results[1].answer} />
        ) : null}
        {data.results[0].answer === "Bath" ? (
          <BodyText color="#000000" text={data.results[2].answer} />
        ) : null}
        <BodyText fontSize="18px" text={data.results[3].question} />
        <BodyText color="#000000" text={data.results[3].answer} />
        {data.results[3].answer === "Yes" ? (
          <BodyText fontSize="18px" text={data.results[4].question} />
        ) : null}
        {data.results[3].answer === "Yes" ? (
          <BodyText color="#000000" text={data.results[4].answer} />
        ) : null}
        <BodyText fontSize="18px" text={data.results[5].question} />
        <BodyText color="#000000" text={data.results[5].answer} />

        <div id="horizontal-line"></div>

        <BodyText text={data.waterUsage} />
        <BodyText text={data.fact} />
        {data.resultPath.suggestion1 != "" ? (
          <BodyText text={data.resultPath.suggestion1} />
        ) : null}
        {data.resultPath.suggestion2 != "" ? (
          <BodyText text={data.resultPath.suggestion2} />
        ) : null}
        {data.resultPath.suggestion3 != "" ? (
          <BodyText text={data.resultPath.suggestion3} />
        ) : null}
      </div>
      <div id="hero-image">
        <ImgFrame
          img={
            "https://images.unsplash.com/photo-1497655392221-e645087843da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          }
        />
      </div>
      <div id="prog-box">
        <ProgBar color="linear-gradient(to right, #00ffe2 100%, #0079ff 0%)" />
      </div>
    </div>
  );
};

export default ResultPage;
