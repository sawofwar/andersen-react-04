import { useEffect, useState } from "react";
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
import BigHeading from "./components/BigHeading/BigHeading";

function App() {
  const [user, setUser] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(true);
  const [wrapperOpacity, setWrapperOpacity] = useState(0);

  const [bigHeadingStyle, setBigHeadingStyle] = useState<
    { marginTop: string } | undefined
  >({ marginTop: "48px" });

  useEffect(() => {
    setTimeout(() => {
      setWrapperOpacity(1);
    }, 0);
  }, []);

  const loginSubmitHandler = (user: string) => {
    if (user !== "") {
      setUser(user);
      setShouldRedirect(true);

      setTimeout(() => {
        setShouldRedirect(false);
        setBigHeadingStyle({ marginTop: "24px" });
      }, 0);
    }
  };

  return (
    <Router>
      <div style={{ opacity: wrapperOpacity }} className="wrapper">
        <h2>Todo List</h2>
        {user ? (
          <>
            <BigHeading
              style={bigHeadingStyle}
              headingText={`Welcome, ${user}!`}
            />

            <Tabs />
          </>
        ) : (
          <BigHeading headingText="Log In" />
        )}

        {user && shouldRedirect ? <Navigate to="/active" /> : null}
        {!user ? <Navigate to="/" /> : null}

        <Routes>
          {!user ? (
            <Route
              path="/"
              element={<Login onSubmitLogin={loginSubmitHandler} />}
            />
          ) : null}
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
