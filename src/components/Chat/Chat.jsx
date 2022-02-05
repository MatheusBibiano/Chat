import { useEffect, useState } from "react";
import { useChat } from "../../contexts/ChatContext";
import { useAuth } from "../../contexts/AuthContext";
import { supabaseClient } from "../../services/supabase";

import { Message } from "./Message/Message";
import { TypingBar } from "../TypingBar/TypingBar";

import { IoSend } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

import styles from "./Chat.module.css";

export function Chat() {
  const { user } = useAuth();
  const { lastMsg, setLastMsg } = useChat();
  const [messages, setMessges] = useState([]);

  useEffect(() => {
    getMessages();
    messageListener();
  }, []);

  async function sendMessage(message, uuid) {
    message = message.trim();
    await supabaseClient.from("message").insert([{ content: message, uuid }]);
  }

  async function getMessages() {
    await supabaseClient
      .from("message")
      .select("*")
      .then(({ data }) => setMessges(data));
  }

  function messageListener() {
    supabaseClient
      .from("message")
      .on("*", () => {
        getMessages();
      })
      .subscribe();
  }

  const rows = messages.map((message) => (
    <li key={message.id} className="flex flex-col w-full">
      <Message metadata={message} />
    </li>
  ));

  return (
    <div className="flex flex-1 flex-col ml-3">
      <h2 className="flex items-center font-normal text-slate-200 text-lg ml-3">
        Chat <AiFillMessage className="text-slate-200 ml-2" />
      </h2>
      <div className={styles.container}>
        <ul className={styles.chat}>{rows}</ul>
        <form className={styles.writeMsgContainer}>
          <TypingBar />
          <button
            className={styles.sendMsgButton}
            title="Enviar"
            onClick={(event) => {
              event.preventDefault();
              const msg = lastMsg.trim();
              if (msg) {
                sendMessage(msg, user.uuid);
                setLastMsg("");
              } else {
                setLastMsg("");
                document.querySelector("#typingbar").focus();
              }
            }}
          >
            <IoSend className="text-slate-200 text-xl active:text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
