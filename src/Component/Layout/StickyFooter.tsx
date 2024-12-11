import React, { MouseEventHandler } from 'react'

const StickyFooter = ({openForm}:{openForm:MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container r-between">
    <h4 className='text-white font-bold'>Filling Fast Only 7 Seats Left</h4>
      <button className="btn btn-secondary bg-white text-pink" onClick={openForm} >Register @ <span className='strike' style={{textDecoration:"line-through"}}>₹999</span> Free</button>
      </div>
  </footer>
  )
}

export default StickyFooter