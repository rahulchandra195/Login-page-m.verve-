import React, { useState } from 'react'
import "./MobileMode.css"
import logo from '../../Assets/Mobile – Graphic.png'
import eyelogo from '../../Assets/see_password_icon.png'
function MobileMode() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div className="mobile-only">
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="form">
                <form style={{ "width": "100%" }}>
                    <h1 style={{ "textAlign": "center" }}>Create an account</h1>
                    <div className="row2">

                        <div className="card">
                            <label className="card_through_text">Personal Details</label>
                        <input className="inputBox" placeholder="First Name"></input>
                        <input className="inputBox" placeholder="Last Name"></input>
                        <input className="inputBox" placeholder="Age(18-20)"></input>
                        </div>

                        <div className="card">
                        <input className="inputBox" placeholder="Mobile No"></input>
                        <input className="inputBox" placeholder="email"></input>
                        </div>
                        <div className="card">
                        <label className="card_through_text">Password</label>
                        <div className="visible_eye">
                            <input className="inputBox" placeholder="Password" type={passwordShown ? "text" : "password"}></input>
                            <span className="visible_eye_logo2"><img onClick={togglePasswordVisiblity} src={eyelogo} alt="logo"></img></span>
                        </div>
                        
                        <div className="visible_eye">
                            <input className="inputBox" placeholder="Confirm Password" type={passwordShown ? "text" : "password"}></input>
                            <span className="visible_eye_logo2"><img onClick={togglePasswordVisiblity} src={eyelogo} alt="logo"></img></span>
                        </div>
                        </div>


                        <div className="description2">
                            <label>Description</label>
                            <textarea rows="4" />
                        </div >
                        <div>
                            <div style={{"flex":"1"}}></div>
                        </div>
                    </div>


                    <div className="row2 button_row">
                        <button className="button button1">RESET</button>
                        <button className="button">SUBMIT</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default MobileMode
