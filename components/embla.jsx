import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import { useEmblaCarousel } from 'embla-carousel/react';
import Icon from './icon';
import useInterval from "./useInterval";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
   });  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [delay, setDelay] = useState(5000);
  const [isRunning, setIsRunning] = useState(true);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
 

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className='embla'>
        <div className='embla__viewport' ref={viewportRef}>
          <div className='embla__container'>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item'>
                  <div className='flex-row-b f-box1'>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='w-100ip'>
                          <img className='w-100i3 fi1' src='g0.png' />
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right'>
                      <h2 className='fw700 fs18 lh22'>
                        Fully Digital Platform
                      </h2>
                      <div className='d-flex'>
                        <p className='fw500 fs20 lh36'>
                          Fully digital with real-time monitoring, document
                          management and audit trail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item'>
                  <div className='flex-row-b f-box1'>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='w-100ip'>
                          <img className='w-100i3 fi2' src='g3.png' />
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right'>
                      <h2 className='fw700 fs18 lh22'>
                        EU ESMA Certified Credit Rating Model
                      </h2>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          Proprietary implicit support model
                        </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          Solvency, liquidity and profitability ratio peer group
                          benchmarking
                        </p>
                      </div>

                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          Delineation of transaction as equity or debt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item'>
                  <div className='flex-row-b f-box1 f-box2 '>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='w-100ip'>
                          <img className='w-100i3 fi3' src='g4.png' />
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right mx-470'>
                      <h2 className='fw700 fs18 lh22'>
                        Automated Report & Agreement Generation
                      </h2>
                      <div className='d-flex'>
                        <p className='fw500 fs20 lh36'>
                        TP documentation reports and legal agreements automatically generated using our compliant templates or your custom templates.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item'>
                  <div className='flex-row-b f-box1 f-box2'>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='w-100ip'>
                          <img className='w-100i3 fi4' src='g5.png' />
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right'>
                      <h2 className='fw700 fs18 lh22'>Industry Leading Data</h2>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          2+ million bond curves added daily
                        </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>32 currencies</p>
                      </div>

                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          36 countries & 9 regions
                        </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>13 industry sectors </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>21 credit ratings </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          3 month to 30 year tenors{' '}
                        </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>3 tiers </p>
                      </div>
                      <div className='d-flex spmodal'>
                        <Icon name='arb' />
                        <p className='fw500 fs18 lh27'>
                          Fixed & floating rates{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item'>
                  <div className='flex-row-b f-box1 f-box3'>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='w-100ip'>
                          <img className='w-100i3' src='g6.png' />
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right mx-470'>
                      <h2 className='fw700 fs18 lh22'>Fully OECD Compliant</h2>
                      <div className='d-flex'>
                        {' '}
                        <p className='fw500 fs20 lh36'>
                          Compliant with Actions 4, 8-10 of the OECD BEPS Action
                          Plan and best-practice financial theory.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner'>
                {' '}
                <div className='item mt-4'>
                  <div className='flex-row-b f-box1 f-box3'>
                    <div className='f-box1-left'>
                      <div>
                        {' '}
                        <div className='d-flex mb-4'>
                          <div className='box-main-img mr-3'>
                            <img src='a1.png' className='w-100 pl-4 pr-4' />
                          </div>
                          <div className='box-main-img'>
                            <img src='a2.png' className='w-100 p-4' />
                          </div>
                        </div>
                        <div className='d-flex mb-2'>
                          <div className='box-main-img mr-3'>
                            <img src='a3.png' className='w-100 p-4' />
                          </div>
                          <div className='box-main-img '>
                            <img src='a4.png' className='w-100 pl-4 pr-4' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='f-box1-right mx-470 mtn-5'>
                      <h2 className='fw700 fs18 lh22'>
                        Fully Secure & Encrypted
                      </h2>
                      <div className='d-flex'>
                        <p className='fw500 fs20 lh36'>
                        Secure and encrypted through Microsoft Azure, HTTPS, SSO, OWASP and more. All servers are based in Germany.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
