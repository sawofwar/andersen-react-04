import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login/Login";

import Tabs from "./components/Tabs/Tabs";

import All from "./pages/All/All";
import Active from "./pages/Active/Active";
import Inactive from "./pages/Inactive/Inactive";

import TaskCounter from "./components/TaskCounter/TaskCounter";

import "./App.css";
import { set } from "firebase/database";

function App() {
  const [user, setUser] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(true);

  const loginSubmitHandler = (user: string) => {
    if (user !== "") {
      setUser(user);
      setShouldRedirect(true);

      setTimeout(() => {
        setShouldRedirect(false);
      }, 0);
    }
  };

  return (
    <Router>
      <div className="wrapper">
        <h2>Todo List</h2>
        {user ? (
          <>
            <h1>Welcome, {user}!</h1>
            <Tabs />
          </>
        ) : null}

        {user && shouldRedirect ? <Navigate to="/active" /> : null}
        {!user ? <Navigate to="/" /> : null}

        <Routes>
          {!user ? (
            <Route
              path="/"
              element={<Login onSubmitLogin={loginSubmitHandler} />}
            />
          ) : null}
          {user ? <Route path="/inactive" element={<Inactive />} /> : null}
          <Route path="/active" element={<Active />} />
          <Route path="/all" element={<All />} />
        </Routes>
        <TaskCounter />
      </div>
    </Router>
  );
}

export default App;
