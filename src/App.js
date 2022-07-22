import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Journey from "./Container/Journey/Journey";
import Store from "./Container/Store/Store";
import Team from "./Container/Team/Team";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/home" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </div>
  );
}

export default App;
