import React from 'react';
import './cleanse_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
// import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const CleansePage = () => {

    function nextPage(){
        Router.push("/LaundryPage");
    }

    return <div>
        <CustomHeader text="Shower" />
        <BodyText />
        {/* <ImgFrame /> */}
        <CustomButton text="Next" onclick={nextPage}/>
        <ProgBar />
    </div>
}



export default CleansePage;