import React, { useEffect, useState, useRef } from "react";
import ChatBackground from "../assets/ChatBackground.png";
import { FaArrowLeft } from "react-icons/fa";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeMessagesByIds } from "../Features/Socket/SocketSlice"; // Import action

function Chat() {
  const { toggleSidebar } = useOutletContext();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { message: newMessages } = useSelector((state) => state.socket);
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  // Handle new incoming messages from Redux
  useEffect(() => {
    if (newMessages && newMessages.length > 0) {
      const filteredMessages = newMessages.filter(
        (msg) => msg.senderId === id || msg.receiverId === id
      );

      if (filteredMessages.length > 0) {
        setMessages((prev) => [...prev, ...filteredMessages]);

        // Remove these messages from the Redux store
        const idsToRemove = filteredMessages.map((msg) => msg._id);
        dispatch(removeMessagesByIds(idsToRemove));
      }
    }
  }, [newMessages, id, dispatch]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/message/send/${id}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const response = await axios.post(
        `http://localhost:8000/api/message/send/${id}`,
        { message: newMessage }
      );
      setMessages((prev) => [...prev, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Scroll to the last message whenever messages are updated
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full h-screen bg-blue-400 flex items-center">
      <div
        className="w-full h-full flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${ChatBackground})` }}
      >
        {/* Header */}
        <div className="bg-white w-full h-12 flex flex-shrink-0 items-center px-4 shadow-md sticky top-0">
          <FaArrowLeft
            className="mr-4 sm:hidden block cursor-pointer"
            onClick={toggleSidebar}
          />
          <h2 className="text-lg font-bold">Chat Room</h2>
        </div>

        {/* Messages */}
        <div className="flex-grow w-full overflow-y-auto px-4 py-2 flex flex-col space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message._id}
                className={`flex w-full ${
                  message.senderId === user._id ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow-md max-w-xs ${
                    message.senderId === user._id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No messages yet</p>
          )}
          <div ref={messagesEndRef} /> {/* Reference for auto-scroll */}
        </div>

        {/* Input */}
        <div className="bg-white w-full flex-shrink-0 h-16 flex items-center px-4 shadow-md sticky bottom-0">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 mr-4 outline-none focus:ring-2 focus:ring-blue-400"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
