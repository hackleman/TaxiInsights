import React, { Component } from 'react';
import './chart1.scss';
import {
  VictoryChart, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip,
  VictoryLine, VictoryScatter 
} from 'victory';



export default class render extends Component {
  state = {
	  color: "red", 
	  width: "", 
	  toDraw: [], 
	}

  onSubmit = (evt) => {
  	evt.preventDefault(); 
  	const newShape = {
  	   color: this.state.color, 
  	   width: this.state.width,
  	}
    this.setState({ toDraw: [...this.state.toDraw, newShape]})
  } 

  onChange = (evt) => {
  	this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    return(
      <VictoryChart height={400} width={400}
      containerComponent={<VictoryVoronoiContainer/>}
    >
        <VictoryGroup
          color="#c43a31"
          labels={(d) => `y: ${d.y}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10 }}
            />
          }
          data={[
            { x: 1, y: -3 },
            { x: 2, y: 5 },
            { x: 3, y: 3 },
            { x: 4, y: 0 },
            { x: 5, y: -2 },
            { x: 6, y: -2 },
            { x: 7, y: 5 }
          ]}
        >
          <VictoryLine/>
          <VictoryScatter
            size={(d, a) => {return a ? 8 : 3;}}
          />
        </VictoryGroup>
        <VictoryGroup
          labels={(d) => `y: ${d.y}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10 }}
            />
          }
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 1 },
            { x: 3, y: 2 },
            { x: 4, y: -2 },
            { x: 5, y: -1 },
            { x: 6, y: 2 },
            { x: 7, y: 3 }
          ]}
        >
          <VictoryLine/>
          <VictoryScatter
            size={(d, a) => {return a ? 8 : 3;}}
          />
        </VictoryGroup>
     </VictoryChart>
    )
  }
}