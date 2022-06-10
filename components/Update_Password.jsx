import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Update_Password.css';
const Update_Password = ()=>{
    return(
        <div >
            <div id="Pass_head">
                <h4>Update Password</h4>
                <Nav.Link as={Link} to={'/MyAccount'}>MyAccount</Nav.Link>
            </div>
            <div id="Pass">
                <label>Current Password:</label>
                <br></br>
                <br></br>
                <input type="password" className="Pass_inpt"/>
                <br></br>
                <br></br>
                <label>New Password:</label>
                <br></br>
                <br></br>
                <input type="password" className="Pass_inpt"/>
                <br></br>
                <br></br>
                <label>Confirm New Password:</label>
                <br></br>
                <br></br>
                <input type="password" className="Pass_inpt"/>
                <br></br>
                <br></br>
                <button type="submit" id="Pass_btn">Submit</button>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Update_Password;