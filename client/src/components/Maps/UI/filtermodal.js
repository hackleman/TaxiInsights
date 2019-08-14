import React from 'react';
import Slider from 'react-input-slider';
import config from '../../../assets/config.js';
import {
  Modal, 
  ModalHeader, 
  Badge, 
  ModalBody, 
  ModalFooter, 
  Button
} from 'reactstrap';

class MobileFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: props.categories,
          filterHour: props.filterHour,
          x: 0,
          options: props.options
        }
    
        this.changeHandler = this.changeHandler.bind(this);
      }
    
      formatTime() {
        
      }
      changeHandler() {
        this.state.filterHour(this.state.x);
      }

  render() {
    
    return (
        <div>
            <div className="MobileFilter">
                <Button onClick = {this.props.toggle} color="primary" size = "lg" className = "Submit-desktop">Select a Time</Button>
            </div>
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className = 'CostModal'>
                <ModalHeader toggle={this.props.toggle}>Select an Hour:</ModalHeader>
                <ModalBody>
                   {config[this.state.options].modaltext} 
                </ModalBody>
                <div className = "Header-container">
                    <Badge className = "Header" color="secondary">
                    {(this.state.x < 12 ? this.state.x: this.state.x-12) + ':00 ' + (this.state.x < 12 ? 'AM':'PM')}
                    </Badge>
                </div>
                <div className = "Slider-container">
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
                <ModalFooter className = "Footer-container">
                    <Button color="primary" onClick={this.changeHandler}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
  }

};

export default MobileFilter;