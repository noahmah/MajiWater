import React from 'react';
import './cleanse_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
// import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

var defaultImg = require('../../comps/Alex_Images/images/shower.jpg');

const CleansePage = () => {

    function nextPage(){
        Router.push("/LaundryPage");
    }

    return <div>
        <CustomHeader />
        <BodyText text='Did you shower or take a bath today' />
        <ImgFrame />
        <CustomButton text='Bath' />
        <CustomButton text='Shower' onclick={nextPage} />
        <ProgBar />
    </div>
}



export default CleansePage;