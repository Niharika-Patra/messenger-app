import React, { useState } from "react";

const ChatWindow = ({ friend, messages, onSendMessage }) => {
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    onSendMessage(messageInput);
    setMessageInput("");
  };

  return (
    <div className="chat-window">
      {friend ? (
        <>
          <h2>Chat with {friend}</h2>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.sender === "Me" ? "sent" : "received"
                }`}
              >
                {msg.sender}: {msg.message}
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      ) : (
        <p>Select a friend to start chatting</p>
      )}
    </div>
  );
};

export default ChatWindow;
