import React, { Component } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import './scrollbar.css';

class ScrollBar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  render() {
    return (
      <nav className="scroll" id="scrollbar">
      <div className="scroll-content">
        <ul className="scroll-items">
          <li className="scroll-item">
          <LinkScroll
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500} >
             Welcome
            </LinkScroll>
          </li>
          <li className="scroll-item">
          <LinkScroll
              activeClass="active"
              to="charts"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500} >
              Data
            </LinkScroll>
            </li>
          <li className="scroll-item">
          <LinkScroll
              activeClass="active"
              to="graphs"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500} >
              Taxis
            </LinkScroll>
            </li>
            <li 
                className="scroll-item"
                onClick={this.scrollToBottom}>
                  Contact Me
            </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default ScrollBar;