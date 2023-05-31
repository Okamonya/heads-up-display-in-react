import React from 'react'
import './Call.css'
import Pic from '../../image/pic.jpg'

const Calls = () => {
  return (
    <section className='call__container'>
      <div className="call__card">
        <div className="left__box">
          <h1>Call from</h1>
          <h2>Joe Adams</h2>
        </div>
        <div className="right__box">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="bottom__card">
        <div className="answer__call">
          <div className="pickback-color">
            <p>Answer</p>
          </div>
        </div>
        <div className="reject__call">
          <div className="endback-color">
            <p>End</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calls;