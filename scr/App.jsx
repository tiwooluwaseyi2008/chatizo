import React from 'react';  
import { Routes, Route } from 'react-router-dom';  
import BottomNav from './components/BottomNav';  
import Home from './components/Home';  
import FunZone from './components/FunZone';  
import RandomChat from './components/RandomChat';  
import Groups from './components/Groups';  
import Trending from './components/Trending';  
import Profile from './components/Profile';  
import Settings from './components/Settings';  

function App() {  
  return (  
    <>  
      <BottomNav />  
      <div style={{ paddingBottom: '60px' }}>  
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/fun" element={<FunZone />} />  
          <Route path="/chat" element={<RandomChat />} />  
          <Route path="/groups" element={<Groups />} />  
          <Route path="/trending" element={<Trending />} />  
          <Route path="/profile" element={<Profile />} />  
          <Route path="/settings" element={<Settings />} />  
        </Routes>  
      </div>  
    </>  
  );  
}  

export default App;