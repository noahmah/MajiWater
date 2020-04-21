import React from 'react';
import './dish_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';

var defaultImg = require('../../comps/Alex_Images/images/dishes.jpg');

const DishPage = () =>
    <div>
        <CustomHeader />
        <BodyText />
        <ImgFrame />
        <CustomButton />
        <ProgBar />
    </div>

ImgFrame.defaultProps = {
    img: defaultImg,
}


export default DishPage;