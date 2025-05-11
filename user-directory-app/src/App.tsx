import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import AddUser from "./components/AddUser";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<UserProfile />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
