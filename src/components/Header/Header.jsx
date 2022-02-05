import { Option } from "./Option/Option";
import { SearchBar } from "../SearchBar/SearchBar";
import { useAuth } from "../../contexts/AuthContext";

import { BsThreeDotsVertical, BsPersonCircle } from "react-icons/bs";

import styles from "./Header.module.css";

export function Header() {
  const { user } = useAuth();

  return (
    <header className={styles.container}>
      <div className={styles.userPicButton}>
        {!user.picSource ? (
          <BsPersonCircle className={styles.defaultIcon} />
        ) : (
          <img
            src={user.picSource}
            alt=""
            className="w-4/5 h-4/5 object-cover rounded-full"
          />
        )}
      </div>
      <h1 className="text-slate-200 text-lg ml-2">Olá, {user.name}</h1>
      <div className="flex flex-1 flex-row justify-end space-x-6">
        <SearchBar />
        <button className={styles.optionsButton + " group"}>
          <BsThreeDotsVertical className={styles.icon} />
          <Option />
        </button>
      </div>
    </header>
  );
}
