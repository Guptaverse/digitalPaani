import React from 'react'
import './Modal.css'

const Modal = ({open,onClose,children}) => {
    if(!open) return null;
  return (
    <>
    <div className='modalBlur'>
    <div className='modalCard'>
        {children}
        <button onClick={onClose}>close</button>
    </div>
    </div>
     </>
  )
}

export default Modal