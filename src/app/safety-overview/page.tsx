'use client'

import './safety-overview.css';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import Navigation from '../navigation';
import Footer from '../footer';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Females', 'Males'],
  datasets: [
    {
      label: 'Demographic',
      data: [38, 62],
      backgroundColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(254, 195, 94, 1)'
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)',
        'rgba(254, 195, 94, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
  },
};

export default function safetyOverview() {
  return (
    <div className='safetyOverview'>
      <Navigation/>
      <div className="accountSafety">
        <hr/>
        <div className="followerSafety">
          <h1 className="sectionHeader">Followers</h1>
          <p>Real accounts vs Bot accounts</p>
          <p>We detected &lt;1% of of all followers are Bot accounts</p>
          <div className='demographicChart'>
            <div className='demographicsInfo'>
              <h1>Demographics</h1>
              <p>Females 38%</p>
              <p>Males 62%</p>
            </div>
            <div className='pieChartSection'>
              <Pie data={data} options={options}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
