import React from "react";
import "./App.css";

import Lists from "./components/Lists";
import FriendList from "./components/FriendList";
import MainContent from "./components/MainContent";
import Player from "./components/Player";

function App() {
  return (
    <div className="container">
      <div className="lists">
        <Lists />
      </div>
      <div className="friends">
        <FriendList />
      </div>
      <div className="main_content">
        <MainContent />
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
}

export default App;
