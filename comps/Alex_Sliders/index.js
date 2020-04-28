import React, { useState} from "react";
import "../Alex_Sliders/slider.css";
import CustomButton from "../../comps/Joe_Buttons";
import Router from 'next/router';
import {data, ChangeData} from "../../pages/data";
console.log(data);

const Slider = () => {

  
  function nextPage() {
    if(data.page === "Shower Length"){
      data.page = "Laundry";
      Router.push("/LaundryPage");
    }
    else if(data.page === "Laundry Load"){
      data.page = "Dish";
      Router.push("/DishPage");
    }
}

const [val, setVal] = useState("2");

  return (
    <div>
       <CustomButton color="#F7FAFD" text="Next" onclick={()=>{
               if(data.page === "Shower Length"){
                ChangeData( String(val),1);
                nextPage();
              }
              else if(data.page === "Laundry Load"){
                ChangeData( String(val),4);
                nextPage();
              }
              }} />
      <div className="progBarCont">
        <input type="range" min="1" max="3" className="slider" id="myRange" onChange={(e)=>{
          setVal(e.target.value);
        }} />
        <div className="lines">
          <div id="line"></div>
          <div id="line"></div>
          <div id="line"></div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
