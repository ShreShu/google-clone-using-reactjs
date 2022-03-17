import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* Home ->the homepage of app(search box) */}
      <Home />
      {/* Search page (The result) */}
      <Routes></Routes>
    </div>
  );
}

export default App;
