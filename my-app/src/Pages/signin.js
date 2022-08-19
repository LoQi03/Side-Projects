import React from "react";
import './SignIn.css'

function SignIn()
{
    return(
        <div className="signup-container">
            <div className="title-box"><h5>E-mail</h5></div>
            <div><input type="text" placeholder="something@something.com" className="form-control text-box"/></div>
            <div className="title-box"><h5>Password</h5></div>
            <div><input type="text" placeholder="Password" className="form-control text-box"/></div>
            <button type="button" className="btn btn-link btn-lg">Sign Up</button>
        </div>
    );
}
export default SignIn;