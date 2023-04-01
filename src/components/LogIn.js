import { useState } from "react";

export default function LogIn() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccessMsg(true)
  }
  return (
    <>
      {showSuccessMsg ? (
        <p>You have successfully logged in</p>
      ) : (
        <form className="login-container" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn">Log In</button>
        </form>
      )}
    </>
  );
}
