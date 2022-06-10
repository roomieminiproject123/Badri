import { Nav} from 'react-bootstrap';
import './SignUp.css';
import {Link} from 'react-router-dom';
import logo from './Login.png' ;
const SignUp = ()=>{
    return(
        <div id='container1'>
            <div id="d1">
                <div>
                    <h1 id="S1">Sign up</h1>
                    <br></br>
                    <div id="d2">
                    <p id="S2">Already a member? <Nav.Link as={Link} to={'/Login'} id="S3">Sign in</Nav.Link></p>
                    </div>
                    <br></br>
                   <label>Name:</label>
                   <br></br>
                   <br></br>
                   <input type="text" id="inpt" /> 
                   <br></br>
                   <br></br>
                   <label>E-mail:</label>
                   <br></br>
                   <br></br>
                   <input type="email" id="inpt"/>
                   <br></br>
                   <br></br>
                   <label>Password:</label>
                   <br></br>
                   <br></br>
                   <input type="password" id="inpt" />
                   <br></br>
                   <br></br>
                   <label>Confirm Password:</label>
                   <br></br>
                   <br></br>
                   <input type="password" id="inpt" />
                   <br></br>
                   <br></br>
                   <button type="submit" id="btn1">Submit</button>
                   <br></br>
                   <p></p>
                </div>

                <div>
                    <img src={logo} alt="none" id="img1"/>
                </div>
            </div>
        </div>
    )
}

export default SignUp;