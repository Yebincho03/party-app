import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const Header = props => {


    
return (<>
        <div className="headerWrapper">
            <div className="siteLogo">
                <a href="/">
                    <h1>@PARTY@</h1>
                </a>
            </div>
            <div className="nav-bar">
                <div className="navMenu">
                    <a href="/party">
                        <h2>Host party</h2>
                    </a>
                </div>
                <div className="navMenu">
                    <a href="/login">
                        <h2>Login</h2>
                    </a>
                </div>
                <div className="navMenu">
                    <a href="/profile">
                        <h2>Profile</h2>
                    </a>
                </div>
            </div>
        </div>
   </> );
}
export default Header;