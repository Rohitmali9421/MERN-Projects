import axios from "axios";

export const sendMessage = async ({
  id,
  newMessage,
  setNewMessage,
  setMessages,
}) => {
  if (!newMessage.trim()) return;
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/message/send/${id}`,
      { message: newMessage }
    );
    setMessages((prev) => [...prev, response.data]);
    setNewMessage(""); // Clear the input
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const fetchMessages = async (id, setMessages) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/message/get/${id}`
    );
    setMessages(response.data);
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
