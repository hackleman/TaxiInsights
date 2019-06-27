import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './Sections/sections';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './chart1.css';
import chart1data from './data';

class Chart1 extends Component {

  state = {
    chartData: null
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // API call here
    this.setState({
      chartData: chart1data
    })
  }

  render() {
    return (
      <div>
        <div className = "chart1header">
          <Section 
              title="Chart"
              dark={true}
          />
          </div>
          <div className = "chart1component">
            <Bar
              data={this.state.chartData}
              options={{
                title:{
                  display: this.props.displayTitle,
                  text: 'Largest Cities In Massachusetts',
                  fontSize: 25
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}
            />
          </div>
        </div>
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  {  }
)(Chart1);