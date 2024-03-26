import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "../cssStyling/loginsignup.css"
import { useState } from "react";

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    const [final, setFinal] = useState("Create Account");

    return (
        <>
            <div className="login-body">
                <div className="container" >
                    <div className="header">
                        <div className="text">{action}</div>
                    </div>
                    <div className="inputs">
                        {action==="Login"?<div className="f-input"></div>:<div className="input">
                            <IoMdPerson/>
                            <input type="text" placeholder="Select a Username"/>
                        </div>}
                        <div className="input">
                            <MdEmail/>
                            <input type="email" placeholder={action==="Login"?"Email or Username":"Email"}/>
                        </div>
                        <div className="input">
                            <RiLockPasswordFill/>
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password? <span>Click Here!</span></div>}
                    <div className="final-submit">{final}</div>
                    <div className="submit-container">
                        <div className={action==="Sign Up"?"submit":"submit gray"} onClick={()=>{setAction("Sign Up"); setFinal("Create Account")}}>Sign Up</div>
                        <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{setAction("Login"); setFinal("Continue")} }>Login</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;