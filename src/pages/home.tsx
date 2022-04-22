import React from 'react';
import './home.scss';
import headerBg from '../images/img.png';
import {Chart1} from '../components/chart1'
import {Chart2} from '../components/chart2'
import {Chart3} from '../components/chart3'
import {Chart4} from '../components/chart4'
import {Chart5} from '../components/chart5'
import {Chart6} from '../components/chart6'
import {Chart7} from '../components/chart7'
import {Chart8} from '../components/chart8'
import {Chart9} from '../components/chart9'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1 ">
          <Chart1/>
          <Chart2/>
        </section>
        <section className=" section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="section4">
          <Chart6/>
          <div className='bordered 年龄段'>
            <h2>犯罪人员年龄分布</h2>
            <div className='charts'>
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="bordered section5"/>
      </main>
      <footer>@github/johnnywwy</footer>
    </div>
  );
};
