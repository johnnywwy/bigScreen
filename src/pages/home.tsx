import React from 'react';
import './home.scss';
import headerBg from '../images/img.png'

console.log(headerBg);
console.log();
export const Home = () => {
  return (
    <div>
      <div className='x' style={{backgroundImage:`url(${headerBg})`}}></div>
    </div>
  );
};
