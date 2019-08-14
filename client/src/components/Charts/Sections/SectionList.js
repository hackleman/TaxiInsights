import React from 'react';
import Section from './Section';

export default function ChartList() {
    return (
        <div>
          <Section 
              title="Chart 1"
              page = "/charts/1"
              color = "#AADAFF"
          />
          <Section 
              title="Chart 2"
              page = "/charts/2"
              color = "#C3ECB2"
          />
          <Section 
              title="Chart 3"
              page = "/charts/3"
              color = "#F6CF65"
          />
          <Section 
              title="Chart 4"
              page = "/charts/4"
              color = "#FFF2AF"
          />
        </div>
    );
}