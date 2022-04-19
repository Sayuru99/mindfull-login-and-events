import React from 'react';
import './Events.css';

export default function Events() {
  return(
    <div>
    <div className='head'>
      <div className='pop'>
      <div className='relative'></div>
        POPULAR GROUPS
      </div>
      <div className='up'>
        UPCOMING EVENTS
      </div>
    </div>
    <div className='box'>
      <div className='div'>
      <img src={require("./fff.jpg")} className='img' alt="pic"></img>
      <p className='txt'>Beach Cleanup with Friends organized by Habitat Friends</p>
      <p className='grey'>13th August</p>
      <p className='grey'>4:00pm- 6PM</p>
      <p className='grey'>12 seats</p>
      <p className='prize'>LKR 2,000</p>
      </div>
      <div className='div'>
      <img src={require("./fff.jpg")} className='img' alt="pic"></img>
      <p className='txt'>Beach Cleanup with Friends organized by Habitat Friends</p>
      <p className='grey'>13th August</p>
      <p className='grey'>4:00pm- 6PM</p>
      <p className='grey'>12 seats</p>
      <p className='prize'>FREE</p>
      </div>
      <div className='div'>
      <img src={require("./fff.jpg")} className='img' alt="pic"></img>
      <p className='txt'>Beach Cleanup with Friends organized by Habitat Friends</p>
      <p className='grey'>13th August</p>
      <p className='grey'>4:00pm- 6PM</p>
      <p className='grey'>12 seats</p>
      <p className='prize'>LKR 2,000</p>
      </div>
      <div className='div'>
      <img src={require("./fff.jpg")} className='img' alt="pic"></img>
      <p className='txt'>Beach Cleanup with Friends organized by Habitat Friends</p>
      <p className='grey'>13th August</p>
      <p className='grey'>4:00pm- 6PM</p>
      <p className='grey'>12 seats</p>
      <p className='prize'>FREE</p>
      </div>
    </div>
    </div>
  );
}