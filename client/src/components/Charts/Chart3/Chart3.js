import React from 'react';
import Header from '../Headers/Header';
import Chart from './Chart';

import '../charts.scss';

export default function Chart3() {
    return (
        <div className="Chart">
            <Header title = "Chart 3" color = '#F6CF65'/>
            <Chart />
        </div>
    );
  }