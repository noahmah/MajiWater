import React from 'react';
import './result_page.css';
import Link from 'next/link';
import Router from 'next/Router';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';


const ResultPage = () => {
   
    function nextPage(){
        Router.push("/../");
    }


   return <div>
        <CustomHeader />
        <BodyText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
        <BodyText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        <ImgFrame img={'https://images.unsplash.com/photo-1497655392221-e645087843da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'} />
        <ProgBar />

    </div>

}

export default ResultPage;