import React from 'react';
import './laundry_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const LaundryPage = () =>
    <div>
        <CustomHeader />
        <BodyText />
        <ImgFrame img={'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'} />
        <CustomButton />
        <ProgBar />
    </div>




export default LaundryPage;