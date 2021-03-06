import React from 'react';
import './dish_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';



const DishPage = ({ img }) => {
    <div>
        <CustomHeader />
        <BodyText />
        <ImgFrame />
        <CustomButton />
        <ProgBar />
    </div>
}

ImgFrame.defaultProps = {
    img: defaultImg,
}


export default DishPage;