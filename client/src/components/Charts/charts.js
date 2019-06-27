import React, { Component } from 'react';
import Section from './Sections/sections';
import './charts.css';

class Charts extends Component {


  render() {
    return (
        <div>
          <Section 
              title="Chart 1"
              dark={false}
              page = "/charts/1"
              color = "#AADAFF"
          />
          <Section 
              title="Chart 2"
              dark={true}
              page = "/charts/2"
              color = "#C3ECB2"
          />
          <Section 
              title="Chart 3"
              dark={false}
              page = "/charts/3"
              color = "#F6CF65"
          />
          <Section 
              title="Chart 4"
              dark={true}
              page = "/charts/4"
              color = "#FFF2AF"
          />
          </div>
    );
  }
};

export default Charts;
