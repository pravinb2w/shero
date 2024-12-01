import React, { MouseEventHandler } from 'react'
import Logo from '../../Assets/logo.svg'

const Header = ({openForm}:{openForm:MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <>
    <header className="r-between">
      <img
              src={Logo}
              alt="Shero Sparks Logo"
            />
      <button
        className="btn btn-primary"
        onClick={openForm}
      >
        Join our program
      </button>
  </header>
    </>
  )
}

export default Header