import { useChat } from "../../contexts/ChatContext";

export function TypingBar() {
  const { lastMsg, setLastMsg } = useChat();

  return (
    <input
      type="text"
      id="typingbar"
      value={lastMsg}
      onChange={(event) => {
        setLastMsg(event.target.value);
      }}
      className="flex flex-row
                 h-14 w-full pl-4 
                 bg-slate-700 text-slate-200 
                 rounded-full 
                 outline-1 outline-emerald-500"
      placeholder="Digite uma mensagem"
    />
  );
}
