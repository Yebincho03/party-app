import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const CreateAccountComponent = props => {
        const[email, setEmail] = useState("");
        const[name, setName] = useState("")
        const[password, setPassword] = useState("");


        async function register(event) {
            event.preventDefault();
    
            const data = {email: email, name: name, password: password}
            console.log('sending data here', data)
    
            
            await axios
                .post('/api/v1/profile', data)
                .then(
                    
                    res => localStorage.setItem('userInfo', JSON.stringify(res.data._id))
                    
                )
                .catch(error => console.error(error));
        }


return (<>
        <div className="loginWrapper">
            <div className="homeBanner">
                <div className="bannerTitle">Join Us</div>
                <img className="bannerImage"src="/image/concert.jpeg"/>
            </div>
            <div className="partyWrapper">
                <form onSubmit={register}>
                    <div className="profileDetail">
                        <h2>Create account</h2>
                        <label> Email : 
                            <input type="email" id="profileEmail" name="profileEmail" onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label> Name : 
                            <input type="text" id="profileName" name="profileName" onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label> Password : 
                            <input type="password" id="profilePW" name="profilePW" onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        <button className="btn"><a href="/login">Sign up</a></button>
                    </div>
                </form>
            </div>
        </div>
   </> );
}
export default CreateAccountComponent;