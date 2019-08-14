import React from 'react';
import Header from '../Headers/Header';
import Chart from './Chart';

import '../charts.scss';

export default function Chart4() {
    return (
        <div className="Chart">
            <Header title = "Chart 4" color = '#FFF2AF'/>
            <Chart />
        </div>
    );
  }