import React from 'react';
import Icon from './icon';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type='button'
    onClick={onClick}
    aria-label="Dot-Button"
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--prev'
    onClick={onClick}
    disabled={!enabled}
    aria-label="Previous-Carousel"
  >
    <Icon name='ileft' />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--next'
    onClick={onClick}
    disabled={!enabled}
    aria-label="Next-Carousel"
  >
    <Icon name='iright' />
  </button>
);
