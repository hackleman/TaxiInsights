import React from 'react';
import Section from './Sections/sections';
import './graphs.css';

function Graphs() {
  return (
      <div>
          <Section 
              title="Map 1"
              dark={false}
              page = "/graphs/1"
              color = '#FFF2AF'
          />
          <Section 
              title="Map 2"
              dark={true}
              page = "/graphs/2"
              color = '#F6CF65'
          />
          <Section 
              title="Map 3"
              dark={false}
              page = "/graphs/3"
              color = '#C3ECB2'
          />
          <Section 
              title="Map 4"
              dark={true}
              page = "/graphs/4"
              color = '#AADAFF'
              
          />
        </div>

  );
}

export default Graphs;
