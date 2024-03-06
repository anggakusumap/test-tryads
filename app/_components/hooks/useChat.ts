import { Avatar, messageList } from "@/constants";
import { useState } from "react";

const useChat = () => {
  const [messages, setMessages] = useState(messageList);
  const [newMessageText, setNewMessageText] = useState("");

  const handleSendMessage = () => {
    if (newMessageText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        message: newMessageText.trim(),
        img: Avatar,
        type: "sender",
      };

      setMessages([...messages, newMessage]);
      setNewMessageText("");
    }
  };

  return {
    messages,
    newMessageText,
    setNewMessageText,
    handleSendMessage,
  };
};

export default useChat;
