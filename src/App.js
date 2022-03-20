import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Results } from "./components/Results";
import { SearchResults } from "./components/SearchResults";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />}></Route>
      </Routes>
    </div>
  );
}

export default App;
