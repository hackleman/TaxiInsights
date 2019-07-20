import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseMap from '../map';

class CostMap extends Component {

  render() {
    return (
      <BaseMap 
        config='map1'
        geojson='geojson1'
        options = 'chart1Config'
        type = 'cost'
        datauri = 'costhour/'
        />
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  {  }
)(CostMap);