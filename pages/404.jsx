import BenefitCard from '../components/BenefitCard';
import Navbar from '../components/navbar';
import Contact from '../components/getInTouchForm';
import React, { useRef } from 'react';
import { Toast } from "react-bootstrap";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import Embla from '../components/embla';
import Icon from '../components/icon';
export default function Home() {
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);
  return (
    <div>  {showmessage ? (
      <Toast
       className="messagebox"
      >
        <Toast.Header onClick={() => setshowmessage(false)}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Accurate</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    ) : (
      <></>
    )}
      <div className='hero-main'>
        <Navbar  showNav={false}/>
      
      </div>
      <div className="mt-5 error-page">
      <div className='mt-5 container'>
          <div className='solutions-main solutions-main1'>
            <h2 className='fw500 fs22 lh36 text-center'>Oh no, this page doesn’t exist <a href="/">redirect to the Home page </a></h2>
        
            
             </div>
               </div>
    </div>  
       </div>
  );
}
