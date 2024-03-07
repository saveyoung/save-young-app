'use client'

import './safety-overview.css';

import Navigation from '../navigation';
import Footer from '../footer';
import AccountSafety from './accountSafety';

import styles from 'daisyui';
import DMSafety from './dmSafety';

export default function safetyOverview() {
  return (
    <div className='safetyOverview'>
      <Navigation/>
      <div className="overviewSlider">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <DMSafety/>
          </div>
          <div id="item2" className="carousel-item w-full">
            <AccountSafety/>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <Footer/>
    </div>
  );
}
