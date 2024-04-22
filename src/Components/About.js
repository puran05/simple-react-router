import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const [attempts, setAttempts] = useState(3);
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    setAttempts((currentAttempt) => currentAttempt - 1);
    alert(attempts);
  };

  useEffect(() => {
    if (attempts <= 0) {
      alert("Going back");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [attempts, navigate]);

  return (
    <div>
      <h2>Hello from about</h2>
      <hr></hr>

      <Link to="/">Return to home page</Link>
      <hr></hr>
      <p>Danger!!DO NOT CLICK THIS BUTTON MORE THAN 3 TIMES</p>
      <button onClick={handleSumbit}>Danger button</button>
    </div>
  );
}
