import React from 'react';
import './home.scss';
import headerBg from '../images/img.png'

console.log(headerBg);
console.log();
export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage:`url(${headerBg})`}}/>
      <main>
        <section className='section1'/>
        <section className='section2'/>
        <section className='section3'/>
        <section className='section4'/>
        <section className='section5'/>
      </main>
    </div>
  );
};
