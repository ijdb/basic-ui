import React, { useState } from "react";
import Button from "./components/Button";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";

function App() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  function handleSignupClick() {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  }

  function handleLoginClick() {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  }

  function handleBackClick() {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  }

  return (
    <div>
      <h1>Welcome to facebook</h1>
      <div className="btn-container">
        {(showSignUpForm || showLoginForm) && (
          <Button name="Back" handleClick={handleBackClick} />
        )}
        {!showSignUpForm && !showLoginForm && (
          <Button name="Sign Up" handleClick={handleSignupClick} />
        )}
        {!showSignUpForm && !showLoginForm && (
          <Button name="Log In" handleClick={handleLoginClick} />
        )}
      </div>
      {showSignUpForm && <Signup />}
      {showLoginForm && <LogIn />}
    </div>
  );
}

export default App;
