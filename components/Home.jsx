import logo from './B3.webp';
import {Button} from 'react-bootstrap';
import './Roomie.css';
import { useState } from 'react';


const Home = () =>{
    
    const [search,setSearch] = useState('');

    const HandleChange = (e)=>{
        setSearch(e.target.value);
    }

    const HandleClick = ()=>{
        
    }

    return(
        <div>
            <div>
                <p style={{paddingLeft:"130px", paddingTop:"100px", fontSize: "3rem"}}>Find Your New Place with </p>
                <b style={{paddingLeft:"130px",lineHeight : "20px", fontSize: "3rem"}}>roomie!</b>
                <p style={{paddingLeft:"130px", fontSize: "1.5rem"}}>Easy as making friends, with roomie you can look for</p>
                <p style={{paddingLeft:"130px",lineHeight : "20px",fontSize: "1.5rem"}}> many rooms available across the country.</p>
            </div>
            <img src={logo} alt="Error" style={{position:"fixed",top:"150px",left:"750px",width:"500px"}}/>
            <div style={{paddingLeft:"130px",paddingTop:"30px"}}>
                <input placeholder="Enter a city" className="Location" style={{paddingLeft:"100px",borderRadius:"5px",height:"40px"}} onChange={HandleChange} />
                <span style={{paddingLeft:"30px"}} onClick={HandleClick} ><Button variant="warning"  style={{paddingLeft:"30px", paddingRight:"30px" ,paddingTop :"10px"}}>Search</Button></span>
                <p>{search}</p>
            </div>
        </div>
    )
}
export default Home;