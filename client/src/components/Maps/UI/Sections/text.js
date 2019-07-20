import React, { Component } from "react";
import { Link as LinkScroll } from "react-scroll";
import { faMap, faAdjust, faCaretDown, faChartPie} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sections.scss';

class MapText extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
      }

      componentWillMount() {
          this.setState({dropdownOpen: false});
      }

      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div>
                <div className = "textsection">
                    <div className = "textsubsection">
                        <div className = "inner">
                            <span className = "inner-icon">
                                <FontAwesomeIcon icon={faMap} size = '2x'/>
                            </span>
                            <div>
                            Built from the groundup with React and Leaflet Maps API. 
                            </div>
                        </div>
                        </div>
                        <div className = "textsubsection">
                            <div className = "inner">
                                <span className = "inner-icon">
                                    <FontAwesomeIcon icon={faAdjust} size = '2x' />
                                </span>
                                <div>         
                                    Choose categories and filter your selections with an intuitive and visual UI.
                                </div>
                            </div>
                        </div>
                        <div className = "textsubsection">
                            <div className = "inner">    
                                <span className = "inner-icon">
                                    <FontAwesomeIcon icon={faChartPie} size = '2x'/>
                                </span>
                                <div>
                                    See detailed stats for every query.
                                </div>
                            </div>
                        </div>
                </div>
                <div className = "textsectionmobile">
                    <div className = "textsubsection">
                        <div className = "inner">
                            <span className = "inner-icon">
                            <LinkScroll
                                activeClass="active"
                                to="MapIndex"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                <div className = "buttond" color= "#F5F2E5">Choose a category to get started</div>
                             </LinkScroll>
                            
                            <div >
                                <FontAwesomeIcon  className = "inner-favicon" icon={faCaretDown} size = '1x'/>
                            </div>
                           
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        
        );
    }

}

export default MapText;