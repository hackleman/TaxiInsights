import React, { Component } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import logo from '../../logos/now-black.svg';
import './scrollbar.scss';

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

        <img
        src={logo}
        
        className="scroll-logo"
        alt="Logo."
        onClick={this.scrollToTop}/>

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
              to="graphs"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500} >
              Maps
            </LinkScroll>
            </li>
          <li className="scroll-item">
          <LinkScroll
              activeClass="active"
              to="charts"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500} >
              Charts
            </LinkScroll>
            </li>

            <li 
                className="scroll-item"
                onClick={this.scrollToBottom}>
                  Join
            </li>
        </ul>
      </div>
    </nav>

    )
  }
}

export default ScrollBar;