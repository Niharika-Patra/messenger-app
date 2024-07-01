import React, { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";

function App() {
  const friends = {
    Alice: [],
    Bob: [],
    Charlie: [],
  };
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState(friends);

  const handleFriendSelect = (friendName) => {
    setSelectedFriend(friendName);
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedFriend]: [
        ...prevMessages[selectedFriend],
        { sender: "Me", message },
      ],
    }));
  };

  return (
    <div className="App">
      <div className="container">
        <FriendList friends={Object.keys(friends)} onSelectFriend={handleFriendSelect} />
        <ChatWindow
          friend={selectedFriend}
          messages={messages[selectedFriend]}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default App;
