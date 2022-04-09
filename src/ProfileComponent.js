import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";



const ProfileComponent = props => {
    let [user, setUser] = useState({name: "", email: ""});
    let [hosting, setHosting] = useState([]);
    const currentUser = localStorage.userInfo.replaceAll('"', '');

    useEffect(()=>{
        async function getProfile(){
            await axios.get(`/api/v1/profile/${currentUser}`)
            .then((res) => {
                setUser(res.data)
            }).catch(error => console.error(error))
        }
        getProfile();
    },[]);

    useEffect(()=>{
        async function getHosting(){
            await axios.get(`/api/v1/profile/hosting/${currentUser}`)
            .then((res) =>{
                setHosting(res.data.hosting)
            }).catch(error => console.error(error))

        }
        getHosting();
    },[user]); 
    console.log(testArr)

    const logoutUser = async (e) => {
        e.preventDefault();

        try {
            if (localStorage.userInfo) {
                localStorage.removeItem('userInfo');
            } else {
                setError(true)
            }

        } catch (error) {
            console.error(error)
        }
    }



return (<>
    <div className="profileContainer">
        <div className="userProfile">
            <div className="userDetail">
                <div className="userName">NAME : {user.name}</div>
                <div className="userEmail">EMAIL : {user.email}</div>
                <button className="goingBtn" onClick={logoutUser}><a href="/">log out</a></button>

            </div>
        </div>
        <div className="partyType">
            <div className="partyList">
                <h3>Going party list</h3>
            </div>
            <div className="partyList">
                <h3>Hosting party list</h3>
                <ul>
                    {hosting.map(party => {
                        <li>{party.title}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
   </> );
}
export default ProfileComponent;