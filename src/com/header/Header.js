import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faSearch,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import { gsap, Power4 } from "gsap";

import "./Header.scss";

export default function Header() {
  let hamburger = useRef(null);
  const onHover = () => {
    gsap.to(hamburger, {
      duration: 0.4,
      css: { backgroundColor: "#ff007b" },
    });
  };
  return (
    <header className="header">
      <div className="header__grid">
        <div className="header__grid__top-panel">
          <div className="header__grid__top-panel--logo">VC</div>
          <div className="header__grid__top-panel--socials">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div
          className="header__grid__btn"
          ref={(el) => {
            hamburger = el;
          }}
          onMouseEnter={onHover}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="header__grid__bottom-panel">
          <FontAwesomeIcon icon={faSearch} />
          <div className="header__grid__bottom-panel--toggle">
            <FontAwesomeIcon icon={faEllipsisV} />
            <FontAwesomeIcon icon={faEllipsisV} />
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      </div>
    </header>
  );
}
