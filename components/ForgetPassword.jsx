import './ForgetPassword.css';
import logo from "./Login.png"
const ForgetPassword = ()=>{
    return(
        <div id="container">
            <h1 id="F1">Forgot Password?</h1>
            <br></br>
            <p id="p2">Enter the email address you used when you signed up and you</p>
            <p id="p1"> will receive instructions to reset your password.</p>
            <br></br>
            <br></br>
            <br></br>
             <label> E-mail: </label>
             <br></br>
             <br></br>
             <input type="email" placeholder='email@email.com' id="email"  />
             <br></br>
             <br></br>
             <button type="submit" id="b1" >Submit</button>
             <img src={logo} alt='jbsd' id="FImage"/>
        </div>
    )
}

export default ForgetPassword;