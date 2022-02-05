import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { Chat } from "../components/Chat/Chat";
import { Header } from "../components/Header/Header";
import { UsersList } from "../components/UsersList/UsersList";

import { ChatContextProvider } from "../contexts/ChatContext";

export function ChatPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.uuid === "null") navigate("/");
  });

  return user.uuid === "null" ? (
    <></>
  ) : (
    <div className="flex flex-1 flex-col p-3">
      <Header />
      <div className="flex flex-1 flex-row h-5/6">
        <ChatContextProvider>
          <UsersList />
          <Chat />
        </ChatContextProvider>
      </div>
    </div>
  );
}
