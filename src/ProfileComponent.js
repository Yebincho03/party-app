import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const ProfileComponent = props => {


    
return (<>
    <div className="profileContainer">
        <div className="userProfile">
            <div className="userDetail">
                <div className="userName">
                    NAME : Yebin
                </div>
                <div className="userEmail">
                    EMAIL : Yebin@mail.com
                </div>
                <div className="userEmail">
                    Phone : +1 123-456-789
                </div>
                <button>edit</button>
            </div>
        </div>
        <div className="partyType">
            <div className="partyList">
                <h3>Invited Private party list</h3>
                <a href="/detail">
                    first partyyy
                </a>
            </div>
            <div className="partyList">
                <h3>Going party list</h3>
            </div>
            <div className="partyList">
                <h3>Hosting party list</h3>
                <a href="/HostDetail">
                    hosting first partyyy
                </a>
            </div>
        </div>
    </div>
   </> );
}
export default ProfileComponent;