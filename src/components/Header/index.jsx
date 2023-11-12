import React from 'react'
import style from './Header.module.css'
import NavMenu from '../NavMenu'
import Image from 'next/image'

export default function Header() {
  return (
    
        <header className={style.header}>
            <div>
                <Image
                className={style.img}
                src="/img/LogoBikeVision.png"
                width={150}
                height={150}/>
            </div>
            <NavMenu direction={"row"}/>
        </header>
  
  )
}