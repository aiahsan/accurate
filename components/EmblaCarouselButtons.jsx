import React from 'react';
import Icon from './icon';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type='button'
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--prev'
    onClick={onClick}
    disabled={!enabled}
  >
    <Icon name='ileft' />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--next'
    onClick={onClick}
    disabled={!enabled}
  >
    <Icon name='iright' />
  </button>
);
