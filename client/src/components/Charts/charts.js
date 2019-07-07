import React, { Component } from 'react';
import Section from './Sections/sections';
import './charts.scss';

//Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMenu } from '../../actions/route';

class Charts extends Component {

  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.closeMenu();
  }

  render() {
    return (
        <div className = "chartindex">
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

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
  { closeMenu }
)(Charts);

