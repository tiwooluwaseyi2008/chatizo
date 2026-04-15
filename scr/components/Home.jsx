// src/components/Home.jsx  
import React from 'react';  
function Home() {  
  return <div className="container mt-3"><h3>Welcome to Chatizo!</h3><p>Discover trending chats and fun games.</p></div>;  
}  
export default Home;  

// src/components/FunZone.jsx  
import React from 'react';  
function FunZone() {  
  return <div className="container mt-3"><h3>Fun Zone</h3><p>Games, quizzes and more coming soon!</p></div>;  
}  
export default FunZone;  

// src/components/RandomChat.jsx  
import React, { useEffect, useState } from 'react';  
import io from 'socket.io-client';  
const socket = io('https://your-server.com'); // replace with your server URL  

function RandomChat() {  
  const [messages, setMessages] = useState([]);  
  const [input, setInput] = useState("");  
  const chatId = "random-chat"; // an example chat room  

  useEffect(() => {  
    socket.emit('join_chat', chatId);  
    socket.on('new_message', (msg) => {  
      setMessages(prev => [...prev, msg]);  
    });  
    return () => { socket.off('new_message'); };  
  }, []);  

  const sendMessage = () => {  
    const msgData = { chatId, sender: 'Me', content: input };  
    socket.emit('send_message', msgData);  
    setMessages(prev => [...prev, msgData]);  
    setInput("");  
  };  

  return (  
    <div className="container mt-3">  
      <h3>Random Chat</h3>  
      <div className="mb-2">  
        <button className="btn btn-primary" onClick={() => socket.emit('connect_stranger')}>Connect Me</button>  
      </div>  
      <div className="chat-window border p-2" style={{height: '300px', overflowY: 'scroll'}}>  
        {messages.map((m, i) => <div key={i}><strong>{m.sender}:</strong> {m.content}</div>)}  
      </div>  
      <div className="input-group mt-2">  
        <input className="form-control" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />  
        <button className="btn btn-secondary" onClick={sendMessage}>Send</button>  
      </div>  
    </div>  
  );  
}  
export default RandomChat;  

// src/components/Groups.jsx  
import React from 'react';  
function Groups() {  
  return <div className="container mt-3"><h3>Groups</h3><p>Join or create group chats here.</p></div>;  
}  
export default Groups;  

// src/components/Trending.jsx  
import React from 'react';  
function Trending() {  
  return <div className="container mt-3"><h3>Trending</h3><p>Popular chats and tools will appear here.</p></div>;  
}  
export default Trending;  

// src/components/Profile.jsx  
import React from 'react';  
function Profile() {  
  return <div className="container mt-3"><h3>Profile</h3><p>User information and stats.</p></div>;  
}  
export default Profile;  

// src/components/Settings.jsx  
import React from 'react';  
function Settings() {  
  return <div className="container mt-3"><h3>Settings</h3><p>Manage account, privacy, and notifications.</p></div>;  
}  
export default Settings;