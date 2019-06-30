import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

import logo from '../../logos/logo.svg';
import './navbar.scss';

class NavBar extends Component {

    state = {
        maps: false,
        charts: false,
        contact: false,
        login: false,
        register: false,
        current: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        logout: PropTypes.func.isRequired
      }

  componentWillMount() {

    let current = window.location.pathname

    if (current.startsWith('/contact')) {
        let contact = true
        this.setState({ contact });
    } else if (current.startsWith('/charts')) {
        let charts = true
        this.setState({ charts });
    } else if (current.startsWith('/maps')) {
        let maps = true
        this.setState({ maps });
    } else if (current === '/login') {
        let login = true
        this.setState({ login });
    } else if (current === '/register') {
        let register = true
        this.setState({ register });
    }

  }

  render() {
        const guestLinks = (
            <Fragment>
                <Link to="/login">
                    <li className={"nav-item" + (this.state.login ? " activelink" : "")}>
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className={"nav-item" + (this.state.register ? " activelink" : "")}>
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
                        <li className={"nav-item" + (this.state.charts ? " activelink" : "")}>
                            Charts
                            </li>
                    </Link>
                    <Link to="/maps">
                        <li className={"nav-item" + (this.state.maps ? " activelink" : "")}>
                            Maps
                            </li>
                    </Link>
                    <Link to="/contact">
                        <li className={"nav-item" + (this.state.contact ? " activelink" : "")}>
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

