import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const HomeComponent = props => {

axios.get('/api/v1/getParty').then((res) => {
    console.log(res.data)

  }).catch(error => console.error(error))
    
return (<>
        <div className="home">
            <div className="homeWrapper">
                <div className="openPartyList">
                    open party list
                    <ul>
                        <li>
                            <img className="partyListImg" />
                            <div className="partyInfo">
                                <a href="/detail">
                                first partyyy
                                </a>
                                <span className="location"></span>
                                <span className="date">2022/10/21</span>
                                <span className="time">6pm</span>
                            </div>
                        </li>
                        <li>
                            <img className="partyListImg" />
                            <div className="partyInfo">
                                <a href="/detail">
                                second partyyy
                                </a>
                                <span className="location"></span>
                                <span className="date">2022/10/21</span>
                                <span className="time">6pm</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </> );
}
export default HomeComponent;