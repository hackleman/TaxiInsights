import React from 'react';
import Slider from 'react-input-slider';
import config from '../../../assets/config.js';
import {
  Button, Badge
} from 'reactstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      categories: props.categories,
      filterHour: props.filterHour,
      x: 0,
      heading: '',
      subtitle: ''
    }

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    let options = this.state.options || null;

    if (options) {
      this.setState({subtitle: config[options][2]})
    }

  }

  changeHandler() {
    this.props.filterHour(this.state.x);
  }

  render() {
    
    return (
      <div className="filterHours">
        <hr/>
        <h3>{ this.state.title || 'Select an Hour'}</h3>
        <p>{ this.state.subtitle || 'Gives average cost per trip'}</p>
        <p className = "p-mobile">Filter Trips by hour: </p>
        <div className = "Header-container">
          <Badge className = "Header" color="secondary">
          {(this.state.x < 12 ? this.state.x: this.state.x-12) + ':00 ' + (this.state.x < 12 ? 'AM':'PM')}
          </Badge>
        </div>
        <div className = "filter-slider">
        <Slider
          axis="x"
          xstep={1}
          xmin={0}
          xmax={24}
          x={this.state.x}
          onChange={({ x }) => {
            this.setState({ x: parseFloat(x.toFixed(2)) });
            }
          }
        />
        </div>

        <div className="Button">
        <Button onClick = {this.changeHandler} outline color="primary" size = "md" className = "Submit-desktop">Submit</Button>
        </div>
        
  
      </div>
    );
  }

};

export default Filter;