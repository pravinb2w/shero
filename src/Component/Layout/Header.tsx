import React from 'react'
import Logo from '../../Assets/logo.svg'

const Header = () => {
  return (
    <>
    <header className="r-between">
      <img
              src={Logo}
              alt="Shero Sparks Logo"
            />
      <button className="btn btn-primary">Join our program</button>
  </header>
    </>
  )
}

export default Header