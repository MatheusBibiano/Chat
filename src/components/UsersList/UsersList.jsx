import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { User } from "../User/User";
import { supabaseClient } from "../../services/supabase";

import { BsFillPeopleFill } from "react-icons/bs";

import styles from "./UsersList.module.css";

export function UsersList() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [payload, setPayload] = useState();

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data);
    });
    userListener();
  }, []);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [payload]);

  async function getUsers() {
    return await supabaseClient
      .from("user")
      .select("*")
      .not("uuid", "eq", user.uuid);
  }

  function userListener() {
    supabaseClient
      .from("user")
      .on("*", (payload) => {
        setPayload(payload);
      })
      .subscribe();
  }

  const rows = users.map((user, index) => (
    <li key={index} className="flex">
      <User data={user} />
    </li>
  ));

  return (
    <div className="flex flex-col w-1/4 h-full">
      <h2 className="flex items-center font-normal text-slate-200 text-lg ml-3">
        Usuários <BsFillPeopleFill className="text-slate-200 ml-2" />
      </h2>
      <aside className={styles.container}>
        {rows.length ? (
          <ul>{rows}</ul>
        ) : (
          <span className="flex-1 flex items-center justify-center text-slate-200">
            Não há usuários
          </span>
        )}
      </aside>
    </div>
  );
}
