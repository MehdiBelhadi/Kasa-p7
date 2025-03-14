import React from 'react'
import './Banner.scss'


export function Banner({title, imageBackground}) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageBackground})` }}>
        {title && <h1>{title}</h1>}
    </div>
  )
}