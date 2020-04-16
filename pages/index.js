import Link from 'next/link';
import Router from 'next/Router';
import './app.css';
import CustomHeader from '../comps/Joe_Header';
import CustomButton from '../comps/Joe_Buttons';

function nextPage(){
    Router.push("/CleansePage");
}

const Index  = () => <div>
    index
    <CustomHeader text="HOMEPAGE"/>
    <CustomButton text="Next" onclick={nextPage}/>
    
    
</div>

export default Index;