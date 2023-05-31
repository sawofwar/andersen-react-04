import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Active from "./pages/Active/Active";
import Inactive from "./pages/Inactive/Inactive";

import Tabs from "./components/Tabs/Tabs";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1>Todo List</h1>

        <Tabs />
        <Routes>
          <Route path="/active" element={<Active />} />
          <Route path="/inactive" element={<Inactive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
