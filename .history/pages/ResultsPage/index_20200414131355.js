import React from 'react';
import './result_page.css';
import CustomHeader from '../../comps/Joe_Header'
import BodyText from '../../comps/Noah_BodyText'
import imgFrame from '../../comps/Alex_Images'
import ProgBar from '../../comps/Noah_ProgressBar'

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