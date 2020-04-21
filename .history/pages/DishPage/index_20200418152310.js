import React from 'react';
import './dish_page.css';
import CustomHeader from '../../comps/Joe_Header';
import BodyText from '../../comps/Noah_BodyText';
import ImgFrame from '../../comps/Alex_Images';
import CustomButton from '../../comps/Joe_Buttons';
import ProgBar from '../../comps/Noah_ProgressBar';



const DishPage = ({ }) => {

    return <div>
        <CustomHeader />
        <BodyText />
        <ImgFrame img={"../Alex_Images/images/ dishes.jpg"} />
        < CustomButton />
        <ProgBar />
    </div>
}



export default DishPage;