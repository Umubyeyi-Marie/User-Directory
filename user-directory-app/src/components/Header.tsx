
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="space-x-4">
        <Link to="/" className="font-bold text-purple-600">Home</Link>
        <Link to="/add-user" className="text-purple-600">Add User</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded border bg-gray-100 dark:bg-gray-800 dark:text-white"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}