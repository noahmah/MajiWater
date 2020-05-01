import React from "react";
import "./result_page.css";
import Link from "next/link";
import Router from "next/router";
import CustomHeader from "../../comps/Joe_Header";
import BodyText from "../../comps/Noah_BodyText";
import ImgFrame from "../../comps/Alex_Images";
import CustomButton from "../../comps/Joe_Buttons";
import ProgBar from "../../comps/Noah_ProgressBar";
import { data, ChangeData, checkPath } from "../data";
import CustomMenu from "../../comps/Noah_Menu";
import {useEffect} from 'react';
import ResultPaths from "../resultPath";

console.log(data);


checkPath();

const ResultPage = () => {
  function nextPage() {
    Router.push("/../");
  }

  return (
    <div>
      <div>
        <CustomMenu />
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
        <BodyText text={data.resultPath}/>

        {/* <BodyText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' /> */}
        <div id="horizontal-line"></div>
      </div>
      <div id="hero-image">
        <ImgFrame
          img={
            "https://images.unsplash.com/photo-1497655392221-e645087843da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          }
        />
      </div>
      <div id="prog-box">
        <ProgBar />
      </div>
    </div>
  );
};

export default ResultPage;
