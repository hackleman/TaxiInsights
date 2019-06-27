import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

import logo from '../../logos/logo.svg';
import './navbar.css';

class NavBar extends Component {


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        logout: PropTypes.func.isRequired
      }


  render() {
        const guestLinks = (
            <Fragment>
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
            </Fragment>
        )

        const authLinks = (
            <Fragment> 
                <Link to="/login">
                <li className="nav-item" onClick = {this.props.logout}>
                        Logout
                        </li>
                </Link>
            </Fragment>
        )

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
                            Maps
                            </li>
                    </Link>
                    <Link to="/contact">
                        <li className="nav-item">
                            Contact Me
                            </li>
                    </Link>
                </ul>
                <ul className="nav-items">
                  {this.props.isAuthenticated ? authLinks: guestLinks}  
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

