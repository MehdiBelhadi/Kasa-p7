import React from 'react'
import './Footer.scss'


export function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logo'>
            <img src='kasa_white.svg' alt='logo' width='140'/>
        </div>
        <div className='footer__links'>
            © 2020 Kasa. All rights reserved
        </div>
    </footer>
  )
}