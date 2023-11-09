import React from 'react'
import './Header.module.css'
import NavMenu from '../NavMenu'
import Image from 'next/image'

export default function Header() {
  return (
    <>
        <header className="header">
            <div>
                <Image
                src="/img/LogoBikeVision.png"/>
            </div>
            <NavMenu direction={"row"}/>
        </header>
    </>
  )
}