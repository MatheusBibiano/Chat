import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatContextProvider({ children }) {
  const [lastMsg, setLastMsg] = useState("");

  return (
    <ChatContext.Provider value={{ lastMsg, setLastMsg }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
