import React from 'react'
import './Right.css'
const Right = () => {
  return (
    <div className='rightdiv'>
    <div className='right-top'>
        <div>
    <button>Gemini</button>
    </div>
    <div>
        <button>Try Gemini Premimum</button>
        <button>*</button>
        <button>*</button>
    </div>
    </div>
    <div className='right-cards'>
    <h1 className='colors'>Hello Prathap</h1>
    <h1 className='w-colors'>How Can I help you Today ?</h1>
    </div>
    {/* <div className='right-bottom'>
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
    </div> */}
    <div className='engine'>
        <div className='div-1'>
        <input type="text"  placeholder='Enter a Prompt'/>
        </div>
        <div div-2>
            <img src="send_icon.png" alt="" className='send'/>
        </div>
    </div>
    </div>
  )
}

export default Right