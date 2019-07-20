import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseMap from '../map';


class TimeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <BaseMap 
        config='map2'
        geojson='geojson2'
        options = 'chart2Config'
        datauri = 'avgtimes/'
        />
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  {  }
)(TimeMap);