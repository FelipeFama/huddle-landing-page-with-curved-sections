import React from "react";
import "../styles/components/footer.sass";
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
          <img src={logo} alt="logo" />
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
      </footer>
    </IconContext.Provider>
  );
}
