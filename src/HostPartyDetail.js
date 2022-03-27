import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const HostPartyDetail = props => {


    
return (<>
        <div className="PartyDetailContainer">
        <div className="partyImg">img</div>
            <div className="partyDetail">
                <div className="party-title">title</div>
                <div className="party-location">Location</div>
                <div className="party-date">Date</div>
                <div className="party-time">Time</div>
                <div className="party-desc">Description</div>
            </div>
            <label>Invite friends</label>
            <input type="text" id="partyLoca" name="partyLoca" />
            <button>add</button>
        </div>
   </> );
}
export default HostPartyDetail;