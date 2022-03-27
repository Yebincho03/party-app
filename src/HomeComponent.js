import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const HomeComponent = props => {


    
return (<>
        <div className="home">
            <div className="openPartyList">
                open party list
                <div>
                    <a href="/detail">
                        first partyyy
                    </a>
                </div>
            </div>
            <div className="mapView">
                map view
            </div>
        </div>
   </> );
}
export default HomeComponent;