import React, { useState, ChangeEvent, FormEvent } from "react";
import "./style.sass";
import logo from "/images/logob.svg";
import phone from "/images/icon-phone.svg";
import emailIcon from "/images/icon-email.svg";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (emailValidation.test(email)) {
      setState("success");
    } else {
      setState("error");
    }
  }

  return (
    <IconContext.Provider value={{ color: "#fff", size: "3em" }}>
      <footer>
        <section className="footer-container">
          <img className="logo-footer" src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <article className="phone-container">
            <img src={phone} alt="phone logo" />
            <p>Phone: +1-543-123-4567</p>
          </article>
          <article className="email-container">
            <img src={emailIcon} alt="email logo" />
            <p>example@huddle.com</p>
          </article>
          <ul className="social-links">
            <li>
              <MdFacebook />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </ul>
        </section>
        <section className="form-footer">
          <h1>Newsletter</h1>
          <p>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email Address"
              value={email}
              type="text"
              onChange={handleEmail}
            />
            <button>Subscribe</button>
            <div className="state-container">
              {state === "success" && (
                <p className="success-state">
                  Email sign up has been successful
                </p>
              )}
              {state === "error" && (
                <p className="error-state">
                  Please provide a valid email address!
                </p>
              )}
            </div>
          </form>
        </section>
      </footer>
    </IconContext.Provider>
  );
}
