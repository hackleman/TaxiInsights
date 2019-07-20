import React, { Component } from 'react';
import Section from './sections';
import { animateScroll as scroll} from "react-scroll";

import './sections.scss';


class DropdownSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
          open: props.dropdownOpen
        };
      }

      scrollToTop = () => {
        scroll.scrollToTop();
      }

      componentWillReceiveProps() {
          this.setState({
              open: this.props.open
          })
      }
    
    render() {
        return (
            <div>
                <div>
                    <Section 
                        title="Fare"
                        dark={false}
                        page = "/maps/costmap"
                        color = '#eae5c8'
                    />
                    <Section 
                        title="Trip Time"
                        dark={true}
                        page = "/maps/timemap"
                        color = '#ECD9BA'
                    />
                    <Section 
                        title="Normalized Fare"
                        dark={false}
                        page = "/maps/costnorm"
                        color = '#dcd3a3'
                    />
                    <Section 
                        title="Normalized Trip Time"
                        dark={true}
                        page = "/maps/timenorm"
                        color = '#DEC19B'
                    />
                    <Section
                        title=""
                        dark={true}
                        page = "/maps/timenorm"
                        color = '#DEC19B' />
                </div>
            </div>
        );
    }
  
}

export default DropdownSection;

