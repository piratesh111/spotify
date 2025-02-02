import React from 'react';
import Footer from './Footer';
import Sidebar from './sidebar';
import Body from './body';

function Player({spotify}) {
  return (
    <div className='player'>
        <div className='player__body'>
            <Sidebar></Sidebar>
            <Body spotify={spotify}></Body>
            
        </div>
        <Footer></Footer>
      
    </div>
  )
}

export default Player
