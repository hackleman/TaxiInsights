import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseMap from '../map';

class TimeNorm extends Component {


  render() {
    return (
      <BaseMap
        config='map4'
        geojson='geojson4' 
        options='chart4Config'
        datauri = 'avgtimes/'/>
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  {  }
)(TimeNorm);