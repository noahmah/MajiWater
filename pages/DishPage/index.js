import React from 'react';
import './dish_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
// import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';


const DishPage = () => { 

    function nextPage(){
        Router.push("/ResultsPage");
    }


const DishPage = ({ }) => {

    return <div>
        <CustomHeader />
        <BodyText text='Did you use the dishwasher today?' />
        <ImgFrame img={'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80'} />
        < CustomButton text='Yes'onclick={nextPage}/>
        <CustomButton text='No' onclick={nextPage}/>
        <ProgBar />
    </div>

}


export default DishPage;