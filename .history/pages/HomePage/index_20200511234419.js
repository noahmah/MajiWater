import React from 'react';
import './home_page.css';

import CustomHeader from '../../comps/Joe_Header';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';


const HomePage = () =>
    <div>
        <CustomHeader />
        <CustomButton text='Start' />
        <CustomButton text='About' />
        <ProgBar />
    </div>


export default HomePage;