import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './navbar.css';

class NavBar extends Component {

  render() {
    return (

        <nav className="nav" id="navbar">
            <div className="nav-content">
                <Link to="/">
                <img
                src={logo}
                className="nav-logo"
                alt="Logo."
            />
                </Link>
            <ul className="nav-items">
                <Link to="/charts">
                    <li className="nav-item">
                        Charts
                        </li>
                </Link>
                <Link to="/graphs">
                    <li className="nav-item">
                        Graphs
                        </li>
                </Link>
                <Link to="/about">
                    <li className="nav-item">
                        About
                        </li>
                </Link>
                <Link to="/contact">
                    <li className="nav-item">
                        Contact Me
                        </li>
                </Link>
            </ul>
            </div>
        </nav>
    )
  }
}

export default NavBar;