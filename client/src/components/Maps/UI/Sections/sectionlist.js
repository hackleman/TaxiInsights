import React, { Component } from 'react';
import Section from './section';
import { animateScroll as scroll} from "react-scroll";

import './sections.scss';


class SectionList extends Component {
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
                        padding = ""
                        color = '#eae5c8'
                    />
                    <Section 
                        title="Trip Time"
                        dark={true}
                        page = "/maps/timemap"
                        padding = ""
                        color = '#ECD9BA'
                    />
                    <Section 
                        title="Normalized Fare"
                        dark={false}
                        page = "/maps/costnorm"
                        padding = ""
                        color = '#dcd3a3'
                    />
                    <Section 
                        title="Normalized Trip Time"
                        dark={true}
                        page = "/maps/timenorm"
                        padding = " bottom "
                        color = '#DEC19B'
                    />
                </div>
            </div>
        );
    }
  
}

export default SectionList;

