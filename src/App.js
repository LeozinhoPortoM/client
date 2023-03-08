import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Home } from "../src/pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
