import React from 'react';
import './result_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

const ResultPage = () => {
    <div>
        <div className="header">
            <CustomHeader />
        </div>
        <div className="writtenResults">
            <BodyText />
        </div>
        <div className="resultsAnswer">
            <BodyText />
            <imgFrame />
        </div>
        <div className="progressBar">
            <ProgBar />
        </div>
    </div>
}

export default ResultPage;