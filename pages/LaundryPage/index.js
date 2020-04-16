import React from 'react';
import './laundry_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
// import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const LaundryPage = () => {

    function nextPage(){
        Router.push("/DishPage");
    }

    return <div>
        <CustomHeader text="Laundry"/>
        <BodyText />
        {/* <ImgFrame /> */}
        <CustomButton text="Next" onclick={nextPage}/>
        <ProgBar />
    </div>
}



export default LaundryPage;