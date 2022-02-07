import BenefitCard from '../components/BenefitCard';
import Navbar from '../components/navbar';
import Contact from '../components/getInTouchForm';
import React, { useRef } from 'react';
import { Toast } from "react-bootstrap";
import {ScheduleModal} from '../components/modal'
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
  const [activepost, setactivepost] = React.useState(0);
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showAnimation, setshowAnimation] = React.useState(false);

  const [show, setShow] = React.useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const scrollEvent = (e) => {
    const target = e.target;
    if (target.scrollTop >= 240 && target.scrollTop <= 479) {
      setactivepost(1);
    } else if (target.scrollTop >= 480 && target.scrollTop <= 719) {
      setactivepost(2);
    } else if (target.scrollTop >= 720 && target.scrollTop <= 959) {
      setactivepost(3);
    } else if (target.scrollTop >= 960 && target.scrollTop <= 1199) {
      setactivepost(4);
    } else if (target.scrollTop >= 1200) {
      setactivepost(5);
    } else {
      setactivepost(0);
    }
  };
  const ref = useRef();
  return (
    <>
    <div>
       {showmessage ? (
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
        <Navbar />
        <Element name='home'>
          <div className='container flex-row-b hero-inner'>
            <div className='herro1'>
              <h1 className='fw700 fs36 lh45'>
                Financial transfer pricing made easy
              </h1>
              <p className='fw500 fs20 lh30'>
                The most powerful and comprehensive financial transfer pricing
                software platform
              </p>
              <Link
             
             to='Contact'
             spy={true}
             smooth={true}
             duration={250}>
              <button  className='btn btn-nav fw500 fs14 lh17'>
             
                Schedule a demo
            
              </button>
              </Link>
              <h2 className='fw500 fs14 lh17'>
              The platform is currently licensed by multi-billion dollar multinationals with presence in over 100 countries
              </h2>
            </div>
            <div className='w-100 herro1-rg'>
              <img src='Hero image - Copy.png' alt="" />
            </div>
          </div>
        </Element>
      </div>
      <Element name='Benefits'>
        <div className='container'>
          <div className='benefit-main'>
            <h2 className='fw500 fs32 lh24'>Benefits</h2>
            <div className='benefit-inner'>
              <BenefitCard
                icon='c1'
                title='Achieve Full Compliance'
                description='Increase defensibility towards Tax Authroities worldwide by pricing and documenting financial transactions consistent with OECD guidance and best-practice financial theory'
              />
              <BenefitCard
                icon='c2'
                title='Save Time'
                description='Reduce time burden on in-house teams and eliminate coordination and waiting time associated with traditional advisory firms'
              />
              <BenefitCard
                icon='c3'
                title='Mitigate Risk'
                description='Monitor transactions in real-time, follow the audit trail and keep documents safe and organized in a single centralized platform'
              />
              <BenefitCard
                icon='c4'
                title='Facilitate Collabortion'
                description='Improve collaboration and visibility across internal departments with a centralized platform and workflow management'
              />
              <BenefitCard
                icon='c5'
                title='Optimize Positions'
                description='Run multiple scenarios quickly for equally defensible but more efficient transactions'
              />
              <BenefitCard
                icon='c6'
                title='Increase Quality'
                description='Ensure precise results and documentation by eliminating the human error and inconsistency inherent in traditional manual approaches'
              />
              <BenefitCard
                icon='c7'
                title='Reduce Controversy'
                description={`Avoid audits by pricing and documenting all intercompany financial transactions at arm's length`}
              />
              <BenefitCard
                icon='c8'
                title='Gain Independence'
                description='Reduce dependence on external advisors and free up internal resources'
              />
            </div>
          </div>
        </div>
      </Element>
      <Element name='Features'>
        <div>
          <div className='features-main'>
            <h1 className='fw500 fs32 lh24'>Features</h1>
            <div className='car-main'>
              <Embla />
            </div>
          </div>
        </div>
      </Element>
      <Element name='Solutions'>
        <div className='container'>
          <div className='solutions-main'>
            <h2 className='fw500 fs32 lh24'>Solutions</h2>
            <p className='fs18 lh22'>
              Accurate™ is a fully digital cloud-based software platform with
              the following modules:
            </p>
            <div className='scroll-main'>
              <div>
                <div className='mt-scroll-i'>
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 0;
                      setactivepost(0);
                    }}
                    className={`${activepost == 0 ? 'active ' : ''} fs16 lh20`}
                  >
                    Accurate Loan™
                  </h3>
                </div>
                <div className='mt-scroll-i'>
                  {' '}
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 240;
                      setactivepost(1);
                    }}
                    className={`${activepost == 1 ? 'active' : ''} fs16 lh20`}
                  >
                    Accurate Guarantee™
                  </h3>
                </div>
                <div className='mt-scroll-i'>
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 480;
                      setactivepost(2);
                    }}
                    className={`${activepost == 2 ? 'active' : ''} fs16 lh20`}
                  >
                    Accurate Back-to-Back™
                  </h3>
                </div>
                <div className='mt-scroll-i'>
                  {' '}
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 720;
                      setactivepost(3);
                    }}
                    className={`${activepost == 3 ? 'active' : ''} fs16 lh20`}
                  >
                    Accurate Cash Pool™
                  </h3>
                </div>
                <div className='mt-scroll-i'>
                  {' '}
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 960;
                      setactivepost(4);
                    }}
                    className={`${activepost == 4 ? 'active' : ''} fs16 lh20`}
                  >
                    Accurate Treasury & Accounting™
                  </h3>
                </div>
                <div className='mt-scroll-i'>
                  {' '}
                  <h3
                    onClick={() => {
                      ref.current.scrollTop = 1200;
                      setactivepost(5);
                    }}
                    className={`${activepost == 5 ? 'active' : ''} fs16 lh20`}
                  >
                    Accurate Financing Advisory™
                  </h3>
                </div>
              </div>
              <div className='support-scrollsnap'></div>

              <div
                className='scroll-container'
                ref={ref}
                onScroll={scrollEvent}
              >
                <div className='scroll-area'>
                  <div>
                    <h4 className={`active fade-in-image fs16 lh24`}>
                      Pricing, monitoring and documentation of intercompany
                      loans based on OECD guidance.
                    </h4>
                  </div>
                </div>
                <div className='scroll-area'>
                  <div>
                    <h4 className={`active fs16 lh24`}>
                      Pricing, monitoring and documentation of intercompany
                      guarantees based on OECD guidance.
                    </h4>
                  </div>
                </div>
                <div className='scroll-area'>
                  <div>
                    <h4 className={`active fs16 lh24`}>
                    Pricing, monitoring and documentation of intercompany back-to-back loans based on OECD guidance and the equity at risk approach.
                    </h4>
                  </div>
                </div>
                <div className='scroll-area'>
                  <div className='scr-top5'>
                    <h4 className={`active fs16 lh24`}>
                      Monitoring, control and documentation of cash pooling
                      synergy allocation based on OECD guidance.
                    </h4>
                    <h4 className={`active fs16 lh24`}>
                      Interested in becoming a pilot user?{' '}
                      <span>Contact us!</span>{' '}
                    </h4>
                  </div>
                </div>
                <div className='scroll-area'>
                  <div className='scr-top6'>
                    <h4 className={`active fs16 lh24`}>
                      Calculation, monitoring and notification of intercompany
                      financial transaction charges.
                    </h4>
                    <h4 className={`active fs16 lh24`}>
                      Interested in becoming a pilot user?{' '}
                      <span>Contact us!</span>{' '}
                    </h4>
                  </div>
                </div>
                <div className='scroll-area'>
                  <div className='scr-top7'>
                    <h4 className={`active fs16 lh24`}>
                      Bespoke automated advisory of relevant considerations
                      before issuing an intercompany financial transaction as
                      well as real-time monitoring of active positions.
                    </h4>
                    <h4 className={`active fs16 lh24`}>
                      Interested in becoming a pilot user?{' '}
                      <span>Contact us!</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name='Contact' className='footer'>
        <div className='container'>
          <h1>Contact us</h1>

          <div className='row'>
            <div className='col-md-6'>
              <Contact setmessage={setmessage} showAnimation={showAnimation} setshowmessage={setshowmessage} setshowAnimation={setshowAnimation} />
            </div>
            <div className='col-md-6'>
              <div style={{ width: '100%' }}>
                {/* <div className='d-flex'>
                  <div className='map-head'>
                    <p className='fw600 fs16 lh30'>Address</p>
                    <h2 className='fw500 fs16 lh24'>
                      Tordenskiolds gate 2, 0160 Oslo, Norway
                    </h2>
                  </div>
                  <div className='map-head'>
                    <p className='fw600 fs16 lh30'>CONTACT</p>
                    <h2 className='fw500 fs16 lh24'>contact@tpaccurate.com</h2>
                  </div>
                </div>
           */}
                <div style={{width: '100%', overflow: 'hidden', height: '420px'}}>
                <iframe
                  title="google-maps-headquarters"
                  width='100%'
                  height={670}
                  frameBorder={0}
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  style={{border:0,marginTop:-140}}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Tordenskiolds%20gate%202,%200160%20Oslo+()&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                </div>
              
              </div>
            </div>
          </div>
          <hr className='footer-rd'></hr>
          <div className='d-flex justify-content-between align-items-center df-x1'>
            <div>
              <Icon name='logo' />
            </div>
            <div className='d-flex justify-content-between align-items-center footer-end'>
              <p>All rights reserved © 2021 Accurate</p>
              <a href="disclaimer"><h2>Disclaimer</h2></a>
            </div>
          </div>
        </div>
      </Element>
    </div>
    <div className='scheduleBtn'>
      <button onClick={()=>handleShow()} className='btn'>Schedule a demo</button>
    </div>
    <ScheduleModal show={show} handleClose={handleClose}/>
    </>
  );
}
