import { useRef } from "react";

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
      <form action="submit" className="login-form" onSubmit={formSubmitHandler}>
        <label htmlFor="username">Enter username</label>
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
