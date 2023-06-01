import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./Login.css";

type SubmitEvent = React.FormEvent<HTMLFormElement>;

const Login = ({ onSubmitLogin }: { onSubmitLogin: (a: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    const username = (inputRef.current as { value: string }).value;
    onSubmitLogin(username);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="submit" className="login-form" onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          ref={inputRef}
        />
        <button type="submit" className="login-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default Login;
