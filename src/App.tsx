import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Active from "./pages/Active/Active";
import Inactive from "./pages/Inactive/Inactive";

import Tabs from "./components/Tabs/Tabs";

import "./App.css";
import All from "./pages/All/All";
import TaskCounter from "./components/TaskCounter/TaskCounter";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1>Todo List</h1>

        <Tabs />
        <Routes>
          <Route path="/" element={<Active />} />
          <Route path="/inactive" element={<Inactive />} />
          <Route path="/active" element={<Active />} />
          <Route path="/all" element={<All />} />
        </Routes>
        <TaskCounter />
      </div>
    </Router>
  );
}

export default App;
