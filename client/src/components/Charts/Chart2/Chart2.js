import React from 'react';
import Header from '../Headers/Header';
import Chart from './Chart';

import '../charts.scss';

export default function Chart2() {
    return (
        <div className="Chart">
            <Header title = "Chart 2" color = '#C3ECB2'/>
            <Chart />
        </div>
    );
  }