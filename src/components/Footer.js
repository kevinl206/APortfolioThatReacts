import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    
    <footer id="footer">
      <a href="#" className="footer__logo">
        Kevin Lang

      <div className="footer__socials">
        <a href="www.facebook.com/kevin.lang.14/" target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="www.instagram.com/picklezthefluffycorgi/" target="_blank">
          <FaInstagram />
        </a>
        <a href="" target="_blank">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Developed with ❤ by PgLang</small>
      </div>
      </a>
    </footer>
  );
}