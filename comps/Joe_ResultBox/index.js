import React from 'react';
import './resultbox.css';
import BodyText from '../Noah_BodyText';
import '../Noah_BodyText/BodyText.css';
import {data} from "../../data";

const ResultBox = ({amountCon, facts, suggestion1,suggestion3,suggestion2}) => {

    return <div className="ResultBox">
        <div className="amountConsumedBox">
                <BodyText
                    text="Amount consumed"
                    fontSize="18px"
                    fontWeight="Bold"
                />
                <BodyText
                    text={amountCon}
                />
        </div>

        <div id="horizontal-line2"></div>

        <div className="FactBox">
                <BodyText
                    text="Fact"
                    fontSize="18px"
                    fontWeight="Bold"
                />
            <BodyText text={facts} />
        </div>
        <div id="horizontal-line2"></div>
        <div className="SuggestionBox">

                <BodyText
                    text="Suggestions"
                    fontSize="18px"
                    fontWeight="Bold"
                />

            {data.resultPath.suggestion1 != "" ? (
                <BodyText text={suggestion1} />
            ) : null}
            
            {data.resultPath.suggestion2 != "" ? (
                <BodyText text={suggestion2} />
            ) : null}
            {data.resultPath.suggestion3 != "" ? (
                <BodyText text={suggestion3} />
            ) : null}

        </div>

    </div>
}



ResultBox.defaultProps = {
    amountCon : "100gal",
    facts : "hehexd",
    suggestion : "just stop using water"
}

export default ResultBox;