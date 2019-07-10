import React from 'react';
import Slider from 'react-input-slider';
import {
  Button, Badge
} from 'reactstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
      filterHour: props.filterHour,
      x: 0
    }

    this.changeHandler = this.changeHandler.bind(this);
  }

  formatTime() {
    
  }
  changeHandler() {
    console.log(this.state.x);
    this.state.filterHour(this.state.x);
  }

  render() {
    
    return (
      <div className="filterHours">
        <hr/>
        <h3>Select an Hour</h3>
        <p>Filter Average Taxi Fare by Hour</p>
        <p className = "p-mobile">Filter Trips by hour: </p>
        {/* <select defaultValue=""
          type="select"
          name="filter"
          onChange={(e) => this.state.filterHour(e)}>
            {
              this.state.categories.map((line, i) => {
                return (
                    <option value={line} key={i}>{line}</option>
                  );
              }, this)
            }
        </select> */}
        <div className = "Header-container">
          <Badge className = "Header" color="secondary">
          {(this.state.x < 12 ? this.state.x: this.state.x-12) + ':00 ' + (this.state.x < 12 ? 'AM':'PM')}
          </Badge>
        </div>

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

        {/* <div>
        <Button onSubmit = {console.log(this.state.x)} outline color="primary" size = "md" className = "Submit-mobile">Submit</Button>
        </div> */}
        <div className="Button">
        <Button onClick = {this.changeHandler} outline color="primary" size = "md" className = "Submit-desktop">Submit</Button>
        </div>
        
  
      </div>
    );
  }

};

export default Filter;