import React from 'react'
import './Right.css'
const Right = () => {
  return (
    <div className='rightdiv'>
    <div className='right-top'>
    <button>Gemini</button>
    </div>
    <div className='right-cards'>
    <h1>Hello Prathap</h1>
    <h1>How Can I help you Today ?</h1>
    </div>
    <div className='right-bottom'>
        <div className='card'>
            <p>I sick and need help craft message for my bass</p>
        </div>
        <div className='card'>
            <p>I sick and need help craft message for my bass</p>
        </div>
        <div className='card'>
            <p>I sick and need help craft message for my bass</p>
        </div>
        <div className='card'>
            <p>I sick and need help craft message for my bass</p>
        </div>
    </div>
    <div className='engine'>
        <input type="text"  placeholder='Enter a Prompt'/>
    </div>
    </div>
  )
}

export default Right
