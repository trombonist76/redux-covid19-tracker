import React from 'react'
import image from "../images/header-image.png"

export default function Header() {
  return (
    <header>
        <img src={image} alt="" />
        <h1>Global and Country Wise Cases of Corona Virus</h1>
        <span>(For a Particular country, select a Country from below)</span>
    </header>
  )
}
