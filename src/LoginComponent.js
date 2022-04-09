import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const LoginComponent = props => {
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");
        const [error, setError] = useState(false);

        const loginUser = async (e) => {
            e.preventDefault();
            console.log("dd")
            try {
                let loginConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                    }
                };
    
                const { data } = await axios.post('/api/v1/login', { email, password }, loginConfig)
    
                console.log(data);
                if (email == data.email && password == data.password) {
                    localStorage.setItem('userInfo', JSON.stringify(data.id))
                    setEmail('');
                    setPassword('');
                } else {
                    setError(true)
                }
    
            } catch (error) {
                console.error(error)
            }
        }




return (<>
        <div className="loginWrapper">
            <div className="homeBanner">
                <div className="bannerTitle">PARTY TIME</div>
                <img className="bannerImage"src="/image/concert.jpeg"/>
            </div>
            <div className="partyWrapper">
                <form onSubmit={loginUser}>
                        <div className="profileDetail">
                        <h2>Login</h2>
                            <label className="emailLabel"> Email : 
                                <input type="email" id="profileEmail" name="profileEmail" onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                            <label> Password : 
                                <input type="password" id="profilePW" name="profilePW" onChange={(e) => setPassword(e.target.value)}/>
                            </label>
                            <button className="btn">Login</button>
                            <a href="/register" className="linkCreate">create account</a>
                        </div>
                    </form>
            </div>
        </div>
   </> );
}
export default LoginComponent;