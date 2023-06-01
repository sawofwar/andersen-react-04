import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";

import Tabs from "./components/Tabs/Tabs";

import All from "./pages/All/All";
import Active from "./pages/Active/Active";
import Inactive from "./pages/Inactive/Inactive";

import TaskCounter from "./components/TaskCounter/TaskCounter";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState("");

  const loginSubmitHandler = (user: any) => {
    setUser(user);
  };

  return (
    <Router>
      <div className="wrapper">
        <h1>Todo List</h1>
        <h2>Welcome {user}</h2>

        <Tabs />
        <Routes>
          <Route
            path="/"
            element={<Login onSubmitLogin={loginSubmitHandler} />}
          />
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
