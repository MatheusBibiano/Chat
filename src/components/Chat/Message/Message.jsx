import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { supabaseClient } from "../../../services/supabase";

import { BsPersonCircle } from "react-icons/bs";

import styles from "./Message.module.css";

export function Message({ metadata }) {
  const { user } = useAuth();
  const [author, setAuthor] = useState({});
  const time = metadata.time.split(":");

  useEffect(() => {
    supabaseClient
      .from("user")
      .select("name, picSource")
      .eq("uuid", metadata.uuid)
      .then(({ data }) => {
        const [author] = data;
        setAuthor(author);
      });
  }, [metadata.uuid]);

  return metadata.uuid === user.uuid ? (
    <div className="flex flex-col items-end mt-2 mr-4">
      <span
        className={styles.container + " self-end rounded-tr-none bg-violet-800"}
      >
        {metadata.content}
      </span>
      <span className="text-sm text-slate-500">{`${time[0]}:${time[1]}`}</span>
    </div>
  ) : (
    <div className="flex items-center mb-3">
      {author.picSource ? (
        <img
          src={author.picSource}
          alt=""
          className="self-start w-8 h-8 object-cover rounded-full"
        />
      ) : (
        <BsPersonCircle className="self-start text-slate-300 w-8 h-8" />
      )}
      <div className="flex flex-col ml-2">
        <span className="text-slate-200 text-sm mb-1">{author.name}</span>
        <span
          className={
            styles.container + " self-start rounded-tl-none bg-slate-600"
          }
        >
          {metadata.content}
        </span>
        <span className="text-sm text-slate-500">{`${time[0]}:${time[1]}`}</span>
      </div>
    </div>
  );
}
