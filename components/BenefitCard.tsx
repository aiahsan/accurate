import React from 'react';
import Icon from './icon';
export default function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='benefitcard'>
      <Icon name={icon} />
      <h2 className='fw500 fs20 lh24'>{title}</h2>
      <p className='fs16 lh24'>{description}</p>
    </div>
  );
}
