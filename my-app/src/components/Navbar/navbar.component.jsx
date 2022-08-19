import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal.component";
import SignIn from "../../Pages/signin";

function Navbar() {
    const [buttonSignUp, setButtonSignUp] = useState(false);

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={MenuItems[0].url}>TestApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link className={item.cName} to={item.url}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="navButtons">
                        <button type="button" className="btn btn-secondary buttonMargin bg-secondary">Sign Up</button>
                        <button type="button" className="btn btn btn-light buttonMargin"  onClick={()=>setButtonSignUp(true)}>Sign In</button>
                    </div>
                </div>
            </div>
            <Modal trigger={buttonSignUp} title="Sign In" button="Login" setTrigger={setButtonSignUp}>
               <SignIn/>
            </Modal>
        </nav>
    )
}

export default Navbar;