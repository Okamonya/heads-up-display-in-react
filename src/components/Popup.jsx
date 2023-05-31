import React from 'react'
import { FaTimes } from 'react-icons/fa'


function Popup(props) {
  
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup_inner">
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup

