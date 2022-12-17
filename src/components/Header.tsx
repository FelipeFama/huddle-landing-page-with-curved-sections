import React from "react";
import "../styles/components/header.sass";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <button>Try it free</button>
    </header>
  );
}
