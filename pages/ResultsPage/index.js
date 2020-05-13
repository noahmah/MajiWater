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
import ResultBox from "../../comps/Joe_ResultBox";
import { useEffect } from "react";


console.log(data);

const ResultPage = () => {
  checkPath();

  function nextPage() {
    Router.push("/CharityPage");
    data.page = "Charity";
  }

  function previousPage() {
    data.page = "Dish Wash";
    Router.push("/DishPage");
  }

  return (
    <div id="Result-Page">
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
        <div className="ChoseHeader">
        <BodyText
        text="What you chose"
        fontSize="22px"
        fontWeight="Bold"
        />
        </div>

        <div className="UserAnswer">
        <BodyText fontSize="16px"  text={data.results[0].question}></BodyText>
        <BodyText color="#000000" fontWeight="bold" text={data.results[0].answer} />
        </div>

        <div className="UserAnswer">
        {data.results[0].answer === "Shower" ? (
          <BodyText fontSize="16px" text={data.results[1].question} />
        ) : null}
        {data.results[0].answer === "Shower" ? (
          <BodyText color="#000000" fontWeight="bold"text={data.results[1].answer} />
        ) : null}
        </div>

        <div className="UserAnswer">
        {data.results[0].answer === "Bath" ? (
          <BodyText fontSize="16px" text={data.results[2].question} />
        ) : null}
        {data.results[0].answer === "Bath" ? (
          <BodyText color="#000000" fontWeight="bold" text={data.results[2].answer} />
        ) : null}
        </div>

        <div className="UserAnswer">
        <BodyText fontSize="16px" text={data.results[3].question} />
        <BodyText color="#000000" fontWeight="bold" text={data.results[3].answer} />
        </div>

        <div className="UserAnswer">
        {data.results[3].answer === "Yes" ? (
          <BodyText fontSize="16px" text={data.results[4].question} />
        ) : null}
        {data.results[3].answer === "Yes" ? (
          <BodyText color="#000000" fontWeight="bold" text={data.results[4].answer} />
        ) : null}
        </div>

        <div className="UserAnswer">
        <BodyText fontSize="16px" text={data.results[5].question} />
        <BodyText color="#000000" fontWeight="bold" text={data.results[5].answer} />
        </div>

        <div id="horizontal-line"></div>

        <div className="ChoseHeader">
        <BodyText
        text="Results"
        fontSize="22px"
        fontWeight="Bold"
        />
        </div>

          <ResultBox
            amountCon={data.waterUsage}
            facts={data.fact}
            suggestion1={data.resultPath.suggestion1}
            suggestion2={data.resultPath.suggestion2}
            suggestion3={data.resultPath.suggestion3}
            />

      </div>
    
      <div className="buttonCon">
      
      <div className="Charity">
      <BodyText
        text="Want to help?"
        fontSize="22px"
        fontWeight="Bold"
        />
       </div>
      <CustomButton
        text="Charity"
        onclick={()=>{
            document.querySelector("#Result-Page").style.opacity = 0;
                document.querySelector("#Result-Page").style.left = "-100%";
                setTimeout(function () {
                nextPage();
                data.page = "Charity"
            }, 1000);
            // nextPage();
            // data.page = "Charity"
        }}
        />
        
      </div>
    </div>
  );
};

export default ResultPage;
