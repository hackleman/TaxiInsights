import React from 'react';
import logo from '../../../assets/costlegend.svg'
import block1 from '../../../assets/block1legend.svg'
import block2 from '../../../assets/block2legend.svg'
import block3 from '../../../assets/block3legend.svg'
import config from '../../../assets/config.js';
import {
  Modal, 
  ModalHeader, 
  Badge, 
  ModalBody, 
  ModalFooter, 
  Button
} from 'reactstrap';

class LegendModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            max: props.max,
            min: props.min,
            options: props.options,
            labels: '',
            type: ''
        }
      }

      componentWillMount() {
        this.setState({ 
          labels: config[this.state.options].label,
          type: config[this.state.options].type
        })
      }
    
      componentWillReceiveProps({max, min}) {
        this.setState({...this.state, max})
      }

  render() {
    return (
        <div>
            <div className="Legend-Modal">
                <Button onClick = {this.props.toggle} color="primary" size = "lg" className = "Submit-desktop">Legend</Button>
            </div>
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className = 'CostModal'>
                <ModalHeader toggle={this.props.toggle}>   
                
                    <Badge className = "Header" color="secondary">
                        Legend:
                    </Badge>
                    
                </ModalHeader>
                <ModalBody>
                    <img
                        src={logo}
                        className="cost-legend"
                        alt="Legend"
                    />
                    <div className="block">
                    <Badge className = "Header" color="secondary">
                        Color:
                    </Badge>
                    <Badge className = "Header" color="secondary">
                        {config[this.state.options].header}
                    </Badge>
                    
                    </div>
                    <br />
                    <div className="block">
                        <img
                        src={block1}
                        className="legend1"
                        alt="Legend"
                    />
                    <span className = "legend-text">{this.state.type==='time' ? Math.round(.1*this.state.max/60) : Math.round(.1*this.state.max) || this.state.min} {this.state.labels}</span>
                    </div>
                    <div className="block">
                    <img
                        src={block3}
                        className="legend2"
                        alt="Legend"
                    />
                    <span className = "legend-text">{this.state.type==='time' ? Math.round(.25*this.state.max/60) : Math.round(.2*this.state.max)} {this.state.labels}</span>
                    </div>
                    <div className="block">
                    <img
                        src={block2}
                        className="legend3"
                        alt="Legend"
                    />
                    <span className = "legend-text"> {this.state.type==='time' ? Math.round(.85*this.state.max/60) : Math.round(.8*this.state.max)} {this.state.labels}</span>
                    </div>
                </ModalBody>
                <ModalFooter className = "Footer-container">
                    <Button color="secondary" onClick={this.props.toggle}>Back To Map</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
  }

};

export default LegendModal;