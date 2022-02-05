import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <form className={styles.container}>
      <input
        type="text"
        id="searchBar"
        className={styles.searchBar}
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Pesquisar"
      />
      <button
        className={styles.searchButton}
        title="Pesquisar"
        onClick={(event) => {
          event.preventDefault();
          if (!search.length) document.querySelector("#searchBar").focus();
        }}
      >
        <BsSearch className="text-slate-200 text-xl active:text-white" />
      </button>
    </form>
  );
}
