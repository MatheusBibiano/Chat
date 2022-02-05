import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { ChatPage } from "./pages/ChatPage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage";
import { Notifier } from "./components/Notifier/Notifier";

export function Router() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/notifier" element={<Notifier />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
