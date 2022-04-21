import React from 'react';
import './home.scss';
import headerBg from '../images/img.png';
import {Chart1} from '../components/chart1'
import {Chart2} from '../components/chart2'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1 ">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="bordered section2">
        </section>
        <section className="bordered section3"/>
        <section className="bordered section4"/>
        <section className="bordered section5"/>
      </main>
      <footer>@github/johnnywwy</footer>
    </div>
  );
};
