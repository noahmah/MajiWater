import React from 'react';
import './result_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
// import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const ResultPage = () => {
   
    function nextPage(){
        Router.push("/../");
    }
    
    return <div>
        <CustomHeader text="Results" />
        <BodyText />
        <BodyText />
        {/* <ImgFrame /> */}
        <CustomButton text="Home" onclick={nextPage}/>
        <ProgBar />
    </div>
}



export default ResultPage;