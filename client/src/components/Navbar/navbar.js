import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';
import './navbar.css';

class NavBar extends Component {


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        logout: PropTypes.func.isRequired
      }


  render() {
      if (this.props.isAuthenticated) {

      }
        return (
            <nav className="nav" id="navbar">
                <ul className="nav-items">
                    <Link to="/">
                        <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo."
                    />
                    </Link>
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
                    <Link to="/contact">
                        <li className="nav-item">
                            Contact Me
                            </li>
                    </Link>
                </ul>
                <ul className="nav-items" + {this.props.isAuthenticated ?"  hide": ""}>
                    <Link to="/login">
                        <li className="nav-item">
                            Login
                            </li>
                    </Link>
                    <Link to="/register">
                        <li className="nav-item">
                            Register
                            </li>
                    </Link>
                    <Link to="/login">
                    <li onClick = {this.props.logout} className="nav-item">
                            Logout
                            </li>
                    </Link>
                </ul>
            </nav>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);

