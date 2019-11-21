import React, { useEffect, useState } from "react";
type LoginProps = {
  username: string;
  password: string;
  isLogged: boolean;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  doLogin: () => void;
  doLogout: () => void;
}
const Login = ({ username, password, isLogged, setUsername, setPassword, doLogin, doLogout }: LoginProps) => {

  const [isLogging, setIsLogging] = useState(false);
  const [hidding, setIsHidding] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        hideLogin();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    }
  }, []);

  const hideLogin = () => {
    setIsHidding(true);
    setTimeout(() => {
      setIsHidding(false);
      setIsLogging(false)
    }, 500);
  }

  const showLogin = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setUsername("");
    setPassword("");
    setIsLogging(true);
  }

  const cancelLogin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    hideLogin();
  }

  const avoidCancelLogin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const login = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setTimeout(() => {
      hideLogin();
      doLogin();
    }, 200);
  }

  const logout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    doLogout();
  }

  if (isLogged) {
    return (<a data-testid="logout-link" href="/logout" onClick={logout}>Logout</a>)
  }

  return (<div data-testid="login">
    <a data-testid="login-link" href="/login" onClick={showLogin}>Login</a>
    {isLogging ? (<div data-testid="login-form" className={`login ${hidding ? "login--fade" : ""}`} onClick={cancelLogin}>
      <div className="login__content" onClick={avoidCancelLogin}>
        <h1>Login to Your Account</h1>
        <form>
          <input data-testid="login-form-username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
          <input data-testid="login-form-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
          <input data-testid="login-form-btn" type="submit" name="login" className="" value="Login" disabled={username.trim() === "" || password.trim() === ""} onClick={login} />
        </form>
      </div>
    </div>) : null}
  </div>)

};

export default Login;
