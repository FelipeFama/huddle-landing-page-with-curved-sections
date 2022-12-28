import React from "react";
import "./style.sass";
import logo from "/images/logob.svg";
import phone from "/images/icon-phone.svg";
import email from "/images/icon-email.svg";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
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
            <img src={email} alt="email logo" />
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
          <form>
            <input placeholder="Email Address" type="text" />
            <button>Subscribe</button>
          </form>
        </section>
      </footer>
    </IconContext.Provider>
  );
}
