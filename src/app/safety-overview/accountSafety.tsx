import './safety-overview.css';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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

export default function AccountSafety() {
    return(
      <div className="accountSafety">
        <header className="dmSafetyHeader">
            <div className="safetyFirstRow">
                <div className="profile-section">
                    <div className="profile-main">
                        <Image className="profile-pic" width={60} height={60} src="/images/rosieJenkins.png" alt="" />
                    </div>
                    <div className="profile-info">
                        <span className="user-full-name">Rosie Jenkins</span>
                        <span className="user-name">@riseeee_kins</span>
                        <span className="follower-count">463 followers</span>
                    </div>
                </div>
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faInstagram} className="page-instagram-icon fa-2xl" />
                </div>
            </div>
        </header>
        <div className="safety-heading">
            <div className="safety-message">
              <p className="safety-title">DM Safety</p>
              <p className="safety-sentence">
                Based on the public accounts that follow this profile, this account is safe.
              </p>
            </div>
            <div className="safety-column">
              <Image src="/images/safevector.png" width={29} height={29} alt="" className="safe-vector" />
              <p className="safe">Safe</p>
            </div>
        </div>
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
    )
}