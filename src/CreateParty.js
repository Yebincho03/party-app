import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const CreateParty = props => {
    const[title, setTitle] = useState("");
    const[location, setLocation] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [url, setUrl] = useState(null);
    
    function createParty(event) {

        event.preventDefault();

        const blobToBase64 = blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            return new Promise(resolve => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
            });
        };
        console.log(selectedImage);
        blobToBase64(selectedImage).then((res) => {
            console.log(res);
            const body = {
                file: res,
                timestamp: (new Date()).getTime()
            }
            console.log(body)
            const currentUser = localStorage.userInfo.replaceAll('"', '');
            const data = {
                title: title, 
                location: location, 
                date: date, 
                time: time,
                imageLink : body,
                hostingId : currentUser
            }
           
            console.log('sending data here', data)
    
            
            axios
                .post('/api/v1/newParty', data)
                .then(
                    res => {
                        // console.log(res)
                    }
                )
                .catch(error => console.error(error));
        });

    }

    useEffect(() => {
        var binaryData = [];
        binaryData.push(selectedImage);
        setUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "image/png"})))
    }, [selectedImage]);
    



    
return (<>
        <div className="CreatePartyContainer">
            <div className="homeBanner">
                <div className="bannerTitle">Plan your party</div>
                <img className="bannerImage"src="/image/party.jpeg"/>
            </div>
            <div className="hostPartyWrapper">
                <h1>Create a Party</h1>
                <div className="inputWrapper">
                    <div className="partyImg">
                        <img className="partyImage" src={selectedImage? url : null} />
                        <input type="file" id="file-input" className="imgInput" onChange={(event) => {setSelectedImage(event.target.files[0]);}} />
                    </div>
                    <form onSubmit={createParty}>
                        <div className="partyDetail">
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
                        <button className="hostBtn">create party</button>
                    </form> 
                </div>    
            </div>
        </div>
   </> );
}
export default CreateParty;