import React from "react";
import "./NavMenu.module.css";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <>
      <nav className="menu">
        <ul className="lista" style={{ flexDirection: props.direction }}>
          <li >
            <Link to={"/"} style={{textDecoration: "none"}}>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Home
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link to={"/vistoria"} style={{textDecoration: "none"}}>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Vistoria
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link to={"/sobrenos"} style={{textDecoration: "none"}}>
              <p className="item" style={{ fontSize: props.fontSize }}>
                Sobre nós
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}