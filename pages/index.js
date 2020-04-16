import Link from 'next/link';
import Router from 'next/Router';
import './app.css';
import CustomHeader from '../comps/Joe_Header';
import CustomButton from '../comps/Joe_Buttons';



const Index  = () => {

    function nextPage(){
        Router.push("/CleansePage");
    }

    return <div>
    index
    <CustomHeader text="HOMEPAGE"/>
    <CustomButton text="Next" onclick={nextPage}/>
    
</div>
}

export default Index;