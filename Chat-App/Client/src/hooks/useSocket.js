import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { setOnlineUsers, addMessage } from "../Features/Socket/SocketSlice";

const useSocket = (userId) => {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      const newSocket = io("http://localhost:8000", {
        query: { userId },
      });
      setSocket(newSocket);

     
      newSocket.on("getOnlineUsers", (users) => {
        dispatch(setOnlineUsers(users));
      });

      
      newSocket.on("newMessage", (message) => {
        dispatch(addMessage(message));
      });

      return () => {
        newSocket.disconnect();
        setSocket(null);
      };
    }
  }, [userId, dispatch]);

  return { socket };
};

export default useSocket;
