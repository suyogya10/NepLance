import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
    
    const [message, setMessage] = useState("");
    const { to_userid } = useParams();
    const[sentText, setSentText] = useState("");

    function AddChat() {
        const from_userid = JSON.parse(localStorage.getItem("user-info")).user.id;
        const username = JSON.parse(localStorage.getItem("user-info")).user.name;
        let formData = new FormData();
        formData.append("from_userid", from_userid);
        formData.append("message", message);
        formData.append("to_userid", to_userid);
        formData.append("username", username);
        
        fetch("http://localhost:8000/api/addchat", {
            method: "POST",
            body: formData,
          }).then((result) => {
            result.json().then((resp) => {
              console.warn(resp);
            });
          });
          setSentText(message);
          
      }


    return (
        <>
            <div className="chat">
                <input type="text" placeholder="Type a message" onChange={(e) => setMessage(e.target.value)}/>
                
            </div>
            <button onClick={AddChat}>Send</button>


            <div className="chat__messages">
                <div className="chat__message">
                    <p> 
                        {sentText}
                        <span className="chat__name"> </span>
                        <br></br>
                        
                        <span className="chat__timestamp" style={{marginLeft:"50px"}}> </span>
                    </p>
                </div>
                </div>
        </>
    );
    }

export default Chat;