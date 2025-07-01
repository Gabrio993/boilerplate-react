import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Home from "./components/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Character from "./components/Character.tsx";
import CreateCharacterForm from "./components/CreateCharacterForm.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="character/:id" element={<Character />} />
            <Route path="create" element={<CreateCharacterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
