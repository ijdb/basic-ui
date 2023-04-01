import React from "react";
import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  function handleInputChange(e) {
    const { id, value, checked } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "male") {
      setGender(value);
    }
    if (id === "female") {
      setGender(value);
    }
    if (id === "acceptTerms") {
      setAcceptTerms(checked);
    }
  }

  function validatePassword() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8, }$/;
    return regex.test(password);
  }
  function validatePhone() {
    const regex = /^\d{10}$/;
    console.log(regex);
    return regex.test(phone);
  }
  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      //   validateEmail() &&
      //   validatePassword() &&
      //   validatePhone() &&
      password === confirmPassword
    ) {
      setShowSuccessMsg(true);
    }
  };

  return (
    <>
      {showSuccessMsg ? (
        <p>You have successfully created an account</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-container">
          <div className="username">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="lastname">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="confirm-password">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone number: </label>
            <input
              type="tel"
              placeholder="Phone Number"
              id="phone"
              value={phone}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => handleInputChange(e)}
              required
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => handleInputChange(e)}
              required
            />
            Female
          </label>
          <label htmlFor="acceptTerms">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={acceptTerms}
              onChange={(e) => handleInputChange(e)}
            />
            I accept the terms and conditions.
          </label>
          <button className="btn" type="submit" disabled={!acceptTerms}>
            Sign Up
          </button>
        </form>
      )}
    </>
  );
}
