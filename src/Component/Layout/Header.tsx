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
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Join our program
      </button>
  </header>
    </>
  )
}

export default Header