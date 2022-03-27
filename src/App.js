import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import HomeComponent from './HomeComponent';
import ProfileComponent from './ProfileComponent';
import LoginComponent from './LoginComponent';
import CreateParty from './CreateParty';
import PartyDetail from './PartyDetail';
import HostPartyDetail from './HostPartyDetail';



const App = props => {

    // axios.get('/*').then(res => {
    //     console.log(res)
    // }).catch(error => console.error(error));

    
    return (
        <div className="App">
            
            <Header />
                <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="profile" element={<ProfileComponent />} />     
                        <Route path="party" element={<CreateParty />} />  
                        <Route path="detail" element={<PartyDetail />} />       
                        <Route path="hostDetail" element={<HostPartyDetail />} />               
                </Routes>
            
        </div>
    );
}
export default App;