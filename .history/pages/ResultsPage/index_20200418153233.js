import React from 'react';
import './result_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const ResultPage = () =>
    <div>
        <CustomHeader />
        <BodyText />
        <BodyText />
        <ImgFrame img={'https://images.unsplash.com/photo-1497655392221-e645087843da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'} />
        <ProgBar />
    </div>





export default ResultPage;