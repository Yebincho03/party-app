import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const CreateParty = props => {
    const[title, setTitle] = useState("");
    const[location, setLocation] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");

    // console.log(title,location,date,time)

    async function createParty(event) {

        event.preventDefault();

        const data = {title: title, location: location, date: date, time: time}
        console.log('sending data here', data)

        
        await axios
            .post('/api/v1/newParty', data)
            .then(
                res => {
                    // console.log(res)
                }
            )
            .catch(error => console.error(error));
    }

    
return (<>
        <div className="CreatePartyContainer">
            <h1>Create a Party</h1>
            <div className="partyImg"></div>
            <form onSubmit={createParty}>
                <div className="PartyDetail">
                    <label> Party Title : 
                        <input type="text" id="partyName" name="partyName" onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label> Location : 
                        <input type="text" id="partyLoca" name="partyLoca" onChange={(e) => setLocation(e.target.value)}/>
                    </label>
                    <label> Date : 
                        <input type="date" id="partyDate" name="partyDate" onChange={(e) => setDate(e.target.value)}/>
                    </label>
                    <label> Time : 
                        <input type="time" id="partyTime" name="partyTime" onChange={(e) => setTime(e.target.value)}/>
                    </label>
                </div>
                <button>submit</button>
            </form>
        </div>
   </> );
}
export default CreateParty;