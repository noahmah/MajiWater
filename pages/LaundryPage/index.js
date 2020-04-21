import React from 'react';
import './laundry_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';


const LaundryPage = () => {

    function nextPage(){
        Router.push("/DishPage");
    }
    return <div>
        <CustomHeader />
        <BodyText text='Did you do the laundry today?' />
        <ImgFrame img={'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'} />
        <CustomButton text='Yes'onclick={nextPage}/>
        <CustomButton text='No' onclick={nextPage}/>
        <ProgBar />
    </div>


}
export default LaundryPage;