import React from "react";
import style from "./NavMenu.module.css";
import Link from "next/link";

export default function NavMenu(props) {
  return (
    
      <nav className={style.menu}>
        <ul className={style.lista} style={{ flexDirection: props.direction }}>
          <li >
            <Link href="/" style={{textDecoration: "none"}}>
              <p className={style.item} style={{ fontSize: props.fontSize }}>
                Home
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link href="/vistoria" style={{textDecoration: "none"}}>
              <p className={style.item} style={{ fontSize: props.fontSize }}>
                Vistoria
              </p>
            </Link>
          </li>

          <li style={{ fontSize: props.fontSize }}>
            <Link href="/sobrenos" style={{textDecoration: "none"}}>
              <p className={style.item} style={{ fontSize: props.fontSize }}>
                Sobre nós
              </p>
            </Link>
          </li>
        </ul>
      </nav>
  
  );
}