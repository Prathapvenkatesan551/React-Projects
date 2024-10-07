import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img src="menu_icon.png" alt="access" className='menu' />
            <div className='newchat'>
                <img src="plus_icon.png" alt="" />
                <p>New Chat</p>
            </div>
        </div>
        <div className='recent'>
            <p>recent</p>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
           
        </div>
        <div className='bottom'>
            <div className='bottom-items'>
                <img src="question_icon.png" alt="" />
                <p>Help</p>
                
            </div>
            <div className='bottom-items'>
            <img src="history_icon.png" alt="" />
       
                <p>Activity</p>
                
            </div>
            <div className='bottom-items'>
            <img src="setting_icon.png" alt="" />
                <p>Settings</p>
                
            </div>
            <div className='bottom-data'>
                <p>Coimbatore , Tamilnadu , India</p>
                <p>From your Ip address : updated location</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
