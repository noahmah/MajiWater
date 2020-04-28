import React from 'react';
import './laundry_page.css';
import Link from 'next/link';
import Router from 'next/router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';
import {data, ChangeData} from "../data";
console.log(data);

const LaundryPage = () => {

    function nextPage(){
        if(data.results[3].answer === "Yes"){
            data.page = "Laundry Load";
            Router.push("/LaundryLoadsPage");
        }
        else{
            data.page = "Dish Wash";
            Router.push("/DishPage");   
        }
    }
    return <div>
        <CustomHeader />
        <BodyText text='Did you do the laundry today?' />
        <ImgFrame img={'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'} />
        <CustomButton text='Yes'onclick={()=>{
            ChangeData("Yes" ,3);
            nextPage();
        }}/>
        <CustomButton text='No' onclick={()=>{
            ChangeData("No" ,3);
            nextPage()
        }}/>
        <ProgBar />
    </div>


}
export default LaundryPage;