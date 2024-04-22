import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">About</Link>
        </ol>
      </nav>
      <Outlet />
    </>
  );
}
