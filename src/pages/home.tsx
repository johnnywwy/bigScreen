import React from 'react';
import './home.scss';
import headerBg from '../images/img.png'

console.log(headerBg);
console.log();
export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage:`url(${headerBg})`}}/>
    </div>
  );
};
