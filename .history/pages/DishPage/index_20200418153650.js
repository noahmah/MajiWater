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
        <ImgFrame img={'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80'} />
        < CustomButton />
        <CustomButton />
        <ProgBar />
    </div>
}


export default DishPage;