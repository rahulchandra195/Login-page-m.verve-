import React,{useState} from 'react'
import './DesktopMode.css'
import logo from '../../Assets/Web – Graphic.png'
import eyelogo from '../../Assets/see_password_icon.png'
function DesktopMode() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
        <div className="desktop-only">
            <div className="logo"><img  src={logo} alt="logo"></img></div>
            <div className="form">
               <form >
                    <h1>Create an account</h1>
                    <div className="row1">
                        <div className="allrows firstname">
                            <label>First Name</label>
                            <input placeholder="First Name"></input>
                        </div >
                        <div className="allrows lastname">
                            <label>Last Name</label>
                            <input placeholder="Last Name"></input>
                        </div>
                        <div className="allrows age">
                            <label>Age</label>
                            <input placeholder="18-20"></input>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="allrows mobile">
                            <label>Mobile No</label>
                            <input placeholder="xxxxx xxxxx"></input>
                        </div >
                        <div className="allrows email">
                            <label>Email</label>
                            <input placeholder="abc@xxx.zzz"></input>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="description">
                            <label>Description</label>
                            <textarea rows="4" />
                        </div >
                        <div style={{"flex":"1"}}></div>
                       <label style={{"fontSize":"10px","color":"#A9A9A9","marginRight":"5px"}}>Max. 150 characters</label> 
                    </div>
                    <div className="row1">
                        <div className="allrows mobile">
                            <label>Password</label>
                            <div className="visible_eye">
                            <input type={passwordShown ? "text" : "password"}></input>
                            <span className="visible_eye_logo"><img onClick={togglePasswordVisiblity}  src={eyelogo} alt="logo"></img></span>
                            </div>
                        </div >
                        <div className="allrows email">
                            <label>Confirm Password</label>
                            <div className="visible_eye">
                            <input type={passwordShown ? "text" : "password"}></input>
                            <span className="visible_eye_logo"><img  onClick={togglePasswordVisiblity} src={eyelogo} alt="logo"></img></span>
                            </div>
                        </div>
                    </div>

                    <div className="row1 button_row">
                        <button className="button button1">RESET</button>
                        <button className="button">SUBMIT</button>
                    </div>
               </form>
            </div>
            
        </div>
    )
}

export default DesktopMode
