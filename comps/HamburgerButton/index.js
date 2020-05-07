import React from "react";
import "./ham.css"
import { MdMenu } from "react-icons/md";


export const HamButton = ({onclick}) =>{
   
   return <div>
             <div className="menu-btn hamburger" onClick={onclick}>
          <MdMenu size="30px" color="#fff" />
        </div>
</div>
}


export default HamButton;