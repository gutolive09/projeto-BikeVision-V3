import React from "react";
import NavMenu from "../NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    
      <footer className={style.footer}> 
        <div className={style.links}>
          <NavMenu direction={"column"} fontSize={20} />
          <div className={style.linksImg}>
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
        <div className={style.copyright}>
          <small>Direitos reservados - <FontAwesomeIcon icon={faCopyright} /> BikeVision 2023</small>
        </div>
      </footer>
  );
}