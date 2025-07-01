import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
