import React from 'react';
export default function CustomRightArrow({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return <button onClick={() => onClick()} />;
}
