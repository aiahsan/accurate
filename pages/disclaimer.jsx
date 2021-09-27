import Head from 'next/head';
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
      <Head>
        <title>Accurate | Financial transfer pricing made easy</title>
        <meta name='description' content='Accurate | Financial transfer pricing made easy' />
        <link rel='icon' href='/favicon.ico' />
        <script src='jquery.min.js'></script>
      </Head>
      <div className='hero-main'>
        <Navbar  showNav={false}/>
      
      </div>
      <div className="mt-5">
      <div className='mt-5 container'>
          <div className='solutions-main'>
            <h2 className='fw500 fs32 lh24'>Disclaimer</h2>
            <p className='fs18 lh24'>
            The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>
            <br></br>
            <p className='fs18 lh24'>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.  </p>
            <br></br>
            <p className='fs18 lh24'>
            Through this website you are able to link to other websites which are not under our control. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
            
            <br></br>
            <p className='fs18 lh24'>
            Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.            
            </p>
            
            
             </div>
               </div>
    </div>  
      <Element name='Contact' className='footer'>
        <div className='container'>
          
         <hr className='footer-rd'></hr>
          <div className='d-flex justify-content-between align-items-center df-x1'>
            <div>
              <Icon name='logo' />
            </div>
            <div className='d-flex justify-content-between align-items-center footer-end'>
              <p>All rights reserved © 2021 Accurate</p>
              <a><h2>Disclaimer</h2></a>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}
