import React, { Component } from 'react';
import Header from './Headers/IndexHeader';
import SectionList from './Sections/SectionList';

import './charts.scss';

class ChartIndex extends Component {
    render() {
        return (
            <div className = "chartindex"> 
                <Header title = "Charts"/>
                <SectionList />
              </div>
        );
    }
}

export default ChartIndex;
