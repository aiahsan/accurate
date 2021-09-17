import React from 'react';
export default function CustomLeftArrow({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return <button onClick={() => onClick()}>Hi</button>;
}
