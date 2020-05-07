import React from "react";
import ReactDom from "react-dom";
import "./menu.css";
import { MdArrowBack } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import BackButton from "../BackButton";
import HamButton from "../HamburgerButton";
import CustomHeader from "../Joe_Header";
import MenuPopup from "../MenuPopup";
import {useState} from "react";
import {data} from "../../data";

const CustomMenu = ({ backClick, onclick }) => {
  
  const [slidePos, ChangePos] = useState(-200);
  const [menuState, ChangeState] = useState(false);

  console.log(slidePos,menuState);


  function menuSlide() {
    if (menuState === false){
      ChangePos(0);
      ChangeState(true);
      console.log(slidePos,menuState);
    }
    else{
      ChangePos(-200);
      ChangeState(false);

    }
  }

  return<div>
    <div className="curved">
      <div className="menu">
      {data.page != "Home" ? (
          <BackButton onclick={backClick}/>
        ) : null}
        <div className="menu-btn" onClick={onclick}>
          <CustomHeader />
        </div>
        <HamButton onclick={()=>{
          menuSlide();
        }}/>
      </div>
      
    </div>
    <MenuPopup
    pos = {slidePos}
    />
    </div>
}

export default CustomMenu;
