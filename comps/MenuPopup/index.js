import React from "react";
import "./menupop.css";
import Router from "next/router";
import CustomButton from "../Joe_Buttons";
import {data, Restart} from "../../data";


const MenuPopup = ({pos}) => {

    function MenuButtons(num){
        switch(num){
            case 1:
                Router.push("/../");
                data.page = "Home"
                break;
            case 2:
                 Router.push("/CleansePage");
                 Restart();
                 console.log(data);
                 data.page = "Cleanse"
                 break;
            case 3:
                 Router.push("/AboutPage");
                 data.page = "About"
                 break;
            case 4:
                 Router.push("/CharityPage");
                 data.page = "Charity"
                 break;
        }
        
    }

  return<div className="Menu" style={{right:pos}} >
      <CustomButton text="Home" onclick={()=>{
            MenuButtons(1);  
      }}/>
      <CustomButton text="Restart Quiz" onclick={()=>{
            MenuButtons(2);  
      }}/>
      <CustomButton text="About" onclick={()=>{
            MenuButtons(3);  
      }}/>
      <CustomButton text="Charity" onclick={()=>{
            MenuButtons(4);  
      }}/>
    </div>
}

export default MenuPopup;
