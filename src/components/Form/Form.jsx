import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supabaseClient } from "../../services/supabase";

import { BsPersonCircle } from "react-icons/bs";

import styles from "./Form.module.css";

export function Form() {
  const [url, setURL] = useState("");
  const [username, setUsername] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function userAlreadyExists(username) {
    username = username.trim();

    const { data } = await supabaseClient
      .from("user")
      .select("name")
      .eq("name", username);

    if (data.length) return true;
    else return false;
  }

  async function createNewUser(data) {
    await supabaseClient.from("user").insert([data]);
  }

  function onSubmit() {
    if (username.length) {
      userAlreadyExists(username).then((value) => {
        if (value) {
          navigate("/notifier", {
            state: {
              path: "/",
              message: "Este usuário já existe.",
            },
          });
        } else {
          const newUser = {
            name: username,
            picSource: url,
            logged: true,
            uuid: uuidv4(),
          };

          setUser(newUser);
          createNewUser(newUser);
          navigate("/chat");
        }
      });
    } else {
      document.querySelector("#name").focus();
    }
  }

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Criar usuário</h1>
      <fieldset>
        {url ? (
          <img
            src={url}
            id="userImage"
            alt="Não foi possível obter a imagem."
            className={styles.userImage}
          />
        ) : (
          <BsPersonCircle className="w-40 h-40 text-slate-300 self-center" />
        )}
        <div className="flex flex-1 flex-col mt-5">
          <label htmlFor="url">URL</label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={(event) => {
              setURL(event.target.value.trim());
            }}
            placeholder="URL da imagem"
          />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Nome do usuário"
          required
        />
      </fieldset>
      <button
        className={styles.submitButton}
        onClick={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        Pronto
      </button>
    </form>
  );
}
