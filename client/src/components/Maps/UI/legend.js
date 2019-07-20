import React from 'react';
import logo from '../assets/costlegend.svg'
import block1 from '../assets/block1legend.svg'
import block2 from '../assets/block2legend.svg'
import block3 from '../assets/block3legend.svg'
import config from '../assets/config.js';

class Legend extends React.Component {
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
      <div className="Legend">
        <hr/>
        <h3>Legend</h3>
        <img
            src={logo}
            className="cost-legend"
            alt="Legend"
        />
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

        
        <hr/>
      </div>
    );
  }

};

export default Legend;


// import React from 'react';

// // Styling
// import { faMap } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '../assets/costlegend.svg'
// import block1 from '../assets/block1legend.svg'
// import block2 from '../assets/block2legend.svg'
// import block3 from '../assets/block3legend.svg'



// class Legend extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       maximum: props.max,
//       minimum: props.min,
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.maximum !== this.props.max) {
//       this.setState({maximum: this.props.max})
//     }
//   }


//   render() {
//     return (
//       <div className = "Legend">
//         <div className="inner">
//             <img
//                 src={logo}
//                 className="cost-legend"
//                 alt="Legend"
//             />
//             <div className="block1">
//               <img
//                   src={block1}
//                   className="block1-legend"
//                   alt="Legend"
//               />
//               <span className = "legend-text">{Math.round(.1*this.props.max) || this.props.min} $ / trip</span>
//             </div>
//             <div className="block1">
//               <img
//                   src={block3}
//                   className="block1-legend"
//                   alt="Legend"
//               />
//               <span className = "legend-text">{Math.round(.2 * this.props.max)} $ / trip</span>
//             </div>
//             <div className="block2">
//               <img
//                   src={block2}
//                   className="block2-legend"
//                   alt="Legend"
//               />
//               <span className = "legend-text"> {Math.round(this.props.max)} $ / trip</span>
//             </div>

//             <span className = 'icon'>
//               Legend.
//             </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Legend;