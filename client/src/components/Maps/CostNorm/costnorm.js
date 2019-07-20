import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseMap from '../map';

class CostNorm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }


  }

  render() {
    return (
      <BaseMap 
        config='map3'
        geojson='geojson3'
        options = 'chart3Config'
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
)(CostNorm);