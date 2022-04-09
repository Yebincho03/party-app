import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const HomeComponent = props => {
    let [partyList, setPartyList] = useState([]);

    useEffect(()=>{
        axios.get('/api/v1/getParty').then((res) => {
            console.log(res.data)
            setPartyList(res.data)
        
        }).catch(error => console.error(error))

    },[]);
    
return (<>
        <div className="home">
            <div className="homeWrapper">
                <div className="homeBanner">
                    <div className="bannerTitle">VANCOUVER EVENTS</div>
                    <img className="bannerImage" src="./image/fireworks.jpg"/>
                </div>
                <div className="openPartyList">
                    <h1>VANCOUVER EVENTS</h1>
                    <ul>
                    {partyList.map(party =>  (
                        <li key={party._id} >
                            <img className="partyListImg" src={party.imageLink}/>
                            <div className="partyInfo">
                                <h3><a href="/detail">
                                {party.title}
                                </a></h3>
                                <span className="location">Location : {party.location}</span>
                                <span className="date">Date : {party.date.split('T')[0]}</span>
                                <span className="time">Time : {party.time}</span>
                                <button className="goingBtn">Going</button>
                            </div>
                        </li>
                    ))}
                        
                        
                    </ul>
                </div>
            </div>
        </div>
   </> );
}
export default HomeComponent;