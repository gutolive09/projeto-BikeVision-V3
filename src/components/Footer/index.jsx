import React from "react";
import NavMenu from "../NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="footer"> 
        <div className="links">
          <NavMenu direction={"column"} fontSize={20} />
          <div className="links-img">
            <ul>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <small>Direitos reservados - <FontAwesomeIcon icon={faCopyright} /> BikeVision 2023</small>
        </div>
      </footer>
    </>
  );
}