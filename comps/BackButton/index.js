import React from "react";
import "./backbutton.css"
import { MdArrowBack } from "react-icons/md";

export const BackButton = ({onclick}) =>{
   
   
   return <div>
            <div className="menu-btn back" onClick={onclick}>
                <MdArrowBack size="30px" color="#fff" />
            </div>
          </div>
}


export default BackButton;