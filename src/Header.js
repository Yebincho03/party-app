import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const Header = props => {


    
return (<>
        <div className="headerWrapper">
            <div className="siteLogo">
                <a href="/">
                    <h2>PARTY CALENDAR</h2>
                </a>
            </div>
            <div className="nav-bar">
                <div className="navMenu">
                {localStorage.userInfo ?
                    (<a href="/party">
                        <h4>Host party</h4>
                    </a>):null}
                </div>
                <div className="navMenu">
                    {localStorage.userInfo ?
                    (<a href="/profile">
                        <h4>Profile</h4>
                    </a>)
                    :
                    (<a href="/login">
                        <h4>Login</h4>
                    </a>) }
                </div>
            </div>
        </div>
   </> );
}
export default Header;