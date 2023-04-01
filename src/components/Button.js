import React from "react";

export default function Button({ name, handleClick }) {
  return (
    <div>
      <button className="btn" onClick={handleClick}>{name}</button>
    </div>
  );
}
