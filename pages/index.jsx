import Head from 'next/head';
import BenefitCard from '../components/BenefitCard';
import Icon from '../components/icon';
import Navbar from '../components/navbar';
import dynamic from 'next/dynamic';
import React from 'react';
// import { useEmblaCarousel } from 'embla-carousel/react';
import Embla from '../components/embla';
export default function Home() {
  const [activepost, setactivepost] = React.useState(0);
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
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <script src='jquery.min.js'></script>
      </Head>
      <div className='hero-main'>
        <Navbar />
        <div className='container flex-row-b hero-inner'>
          <div className='herro1'>
            <h1 className='fw700 fs36 lh45'>
              Financial transfer pricing made easy
            </h1>
            <p className='fw500 fs20 lh30'>
              The most powerful and comprehensive financial transfer pricing
              software platform
            </p>
            <button className='btn btn-nav fw500 fs14 lh17'>
              Schedule a demo
            </button>

            <h2 className='fw500 fs14 lh17'>
              Accurate™ is used by multibillion dollar multinationals in over
              100 countries
            </h2>
          </div>
          <div className='w-100 herro1-rg'>
            <img src='Hero image.png' />
          </div>
        </div>
      </div>
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
              description='Improve collaboration and visibility across internal departments with a centralized platform'
            />
            <BenefitCard
              icon='c5'
              title='Optimize Positions'
              description='Run multiple scenarios quickly for equally defensible but more efficient transactions'
            />
            <BenefitCard
              icon='c6'
              title='Increase Quality'
              description='Ensure precise results and documentation by eliminating the human error and inconsistency inherent in traditional manual pricing approaches'
            />
            <BenefitCard
              icon='c7'
              title='Reduce Controversy'
              description={`Avoid audits by pricing and documenting all intercompany financial transactions at arm's length no matter how small or large`}
            />
            <BenefitCard
              icon='c8'
              title='Gain Independence'
              description='Free up internal time and reduce dependence on external advisors'
            />
          </div>
        </div>
      </div>
      <div>
        <div className='features-main'>
          <h1 className='fw500 fs32 lh24'>Features</h1>
          <div className='car-main'>
            <Embla />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='solutions-main'>
          <h2 className='fw500 fs32 lh24'>Solutions</h2>
          <p className='fs18 lh22'>
            Accurate™ is a fully digital cloud-based software platform with the
            following modules:
          </p>
          <div className='scroll-main'>
            <div>
              <div className='mt-scroll-i'>
                <h3 className={`${activepost == 0 ? 'active' : ''} fs16 lh20`}>
                  Accurate Loan™
                </h3>
              </div>
              <div className='mt-scroll-i'>
                {' '}
                <h3 className={`${activepost == 1 ? 'active' : ''} fs16 lh20`}>
                  Accurate Guarantee™
                </h3>
              </div>
              <div className='mt-scroll-i'>
                <h3 className={`${activepost == 2 ? 'active' : ''} fs16 lh20`}>
                  Acurrate Back-to-Back™
                </h3>
              </div>
              <div className='mt-scroll-i'>
                {' '}
                <h3 className={`${activepost == 3 ? 'active' : ''} fs16 lh20`}>
                  Accurate Cash Pool™
                </h3>
              </div>
              <div className='mt-scroll-i'>
                {' '}
                <h3 className={`${activepost == 4 ? 'active' : ''} fs16 lh20`}>
                  Accurate Treasury & Accounting™
                </h3>
              </div>
              <div className='mt-scroll-i'>
                {' '}
                <h3 className={`${activepost == 5 ? 'active' : ''} fs16 lh20`}>
                  Accurate Financing Advisory™
                </h3>
              </div>
            </div>
            <div class='support-scrollsnap'></div>

            <div class='scroll-container' onScroll={scrollEvent}>
              <div class='scroll-area'>
                <div>
                  <h4 className={`active fs16 lh20`}>
                    Pricing, monitoring and documentation of intercompany loans
                    based on OECD guidance.
                  </h4>
                </div>
              </div>
              <div class='scroll-area'>
                <div>
                  <h4 className={`active fs16 lh20`}>
                    Pricing, monitoring and documentation of intercompany
                    guarantees based on OECD guidance.
                  </h4>
                </div>
              </div>
              <div class='scroll-area'>
                <div>
                  <h4 className={`active fs16 lh20`}>
                    Pricing, monitoring of intercompany back-to-back loans based
                    on OECD guidance and he equity at risk approach
                  </h4>
                </div>
              </div>
              <div class='scroll-area'>
                <div className='scr-top5'>
                  <h4 className={`active fs16 lh20`}>
                    Monitoring, control and documentation of cash pooling
                    synergy allocation based on OECD guidance.
                  </h4>
                  <h4 className={`active fs16 lh20`}>
                    Interested in becoming a pilot user?{' '}
                    <span>Contact us!</span>{' '}
                  </h4>
                </div>
              </div>
              <div class='scroll-area'>
                <div className='scr-top6'>
                  <h4 className={`active fs16 lh20`}>
                    Calculation, monitoring and notification of intercompany
                    financial transaction charges
                  </h4>
                  <h4 className={`active fs16 lh20`}>
                    Interested in becoming a pilot user?{' '}
                    <span>Contact us!</span>{' '}
                  </h4>
                </div>
              </div>
              <div class='scroll-area'>
                <div className='scr-top7'>
                  <h4 className={`active fs16 lh20`}>
                    Bespoke automated advisory of relevant considerations before
                    issuing an intercompany financial transaction as well as
                    real-time monitoring of active positions.
                  </h4>
                  <h4 className={`active fs16 lh20`}>
                    Interested in becoming a pilot user?{' '}
                    <span>Contact us!</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* <div>
              <div className='scroll-cst scroll4'>
                <div className='content-scrl'></div>
              </div>
            </div>
            <div>
              <h4 className={`active fs16 lh20`}>
                Pricing, monitoring and documentation of intercompany loans
                based on OECD guidance.
              </h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
