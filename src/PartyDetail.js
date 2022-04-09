import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const PartyDetail = props => {


    
return (<>
        <div className="PartyDetailContainer">
            <div className="homeBanner">
                <div className="bannerTitle">VANCOUVER EVENTS</div>
                <img className="bannerImage" src="./image/fireworks.jpg"/>
            </div>
        <div className="partyImg">img</div>
            <div className="partyDetail">
                <div className="party-title">title</div>
                <div className="party-location">Location</div>
                <div className="party-date">Date</div>
                <div className="party-time">Time</div>
                <div className="party-desc">Description</div>
            </div>
            <button>going</button>
        </div>
   </> );
}
export default PartyDetail;