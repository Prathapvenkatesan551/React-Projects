import React from 'react'
import { useRef } from 'react';
import './Sidebar.css'
const Sidebar = () => {

        const newchatEle=document.querySelector('.newchat');
        const historyEle=document.querySelector('.histories');
        const bottomEle=document.querySelector('.bottom');
        const elementRef = useRef(null);
        const historyRef = useRef(null);


        const handleClick = () => {
           
        };
        const handleMouseEnter = () => {
            elementRef.current.classList.add('active');
            historyRef.current.classList.add('active');
            bottomEle.current.classList.add('active');
        };
      
        const handleMouseLeave = () => {
            elementRef.current.classList.remove('active');
            historyRef.current.classList.remove('active');
            bottomEle.current.classList.remove('active');

        };


  return (
    <div className='sidebar'>
        <div className='top'>
            <img src="menu_icon.png" alt="access" className='menu' />
            <div className='newchat'
            
            onClick={handleClick}        
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
                <img src="plus_icon.png" alt="" />
               <button className='one'
               ref={elementRef}
               >New  Chat</button>
            </div>
        </div>
        <div className='recent'>
            
            <p>recent</p>
          
            <div className='histories'  ref={historyRef}
             onClick={handleClick}      
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
            >
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
            <div className='recent-search'>
                <img src="message_icon.png" alt="" />
                <p>What is Java ...</p>
            </div>
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
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>

        </div>
      
    </div>
  )
}

export default Sidebar
