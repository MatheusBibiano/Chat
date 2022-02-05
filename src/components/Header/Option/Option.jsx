import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { supabaseClient } from "../../../services/supabase";

import { FiLogOut } from "react-icons/fi";

import styles from "./Option.module.css";

export function Option() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function doLogout() {
    sessionStorage.clear();
    supabaseClient.removeAllSubscriptions();

    supabaseClient
      .from("user")
      .update({ logged: false })
      .match({ uuid: user.uuid })
      .then(({ error }) => {
        if (!error) navigate("/", { replace: true });
      });
  }

  return (
    <span className={styles.container + " group-focus-within:scale-100"}>
      <span className={styles.logoutButton} onClick={doLogout}>
        Logout
        <FiLogOut className={styles.icon} />
      </span>
    </span>
  );
}
