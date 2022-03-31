import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const CreateParty = props => {


    
return (<>
        <div className="CreatePartyContainer">
            <h1>Create a Party</h1>
            <div className="partyImg"></div>
            <form>
                <div className="PartyDetail">
                    <label> Party Title : 
                        <input type="text" id="partyName" name="partyName" />
                    </label>
                    <label> Location : 
                        <input type="text" id="partyLoca" name="partyLoca" />
                    </label>
                    <label> Date : 
                        <input type="date" id="partyDate" name="partyDate" />
                    </label>
                    <label> Time : 
                        <input type="time" id="partyTime" name="partyTime" />
                    </label>
                </div>
                <button>submit</button>
            </form>
        </div>
   </> );
}
export default CreateParty;