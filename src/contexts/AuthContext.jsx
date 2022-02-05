import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    name: sessionStorage.getItem("name"),
    picSource: sessionStorage.getItem("picSource"),
    logged: stringToBoolean(sessionStorage.getItem("logged")),
    uuid: sessionStorage.getItem("uuid"),
  });

  function stringToBoolean(string) {
    if (string !== null && string !== undefined) {
      switch (string.toLowerCase().trim()) {
        case "true":
        case "1":
          return true;
        case "false":
        case "0":
          return false;
      }
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (Object.keys(user).length) {
      sessionStorage.setItem("name", user.name);
      sessionStorage.setItem("picSource", user.picSource);
      sessionStorage.setItem("logged", `${user.logged}`);
      sessionStorage.setItem("uuid", user.uuid);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
