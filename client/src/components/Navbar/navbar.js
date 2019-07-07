import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

// Component imports
import MobileNavbar from './MobileNavbar/mobilenavbar';
import Dropdown from './Dropdown/dropdown';
import Authlink from './Fragments/authlinks';
import Guestlink from './Fragments/guestlinks';

// Styling imports
import logo from '../../logos/logo.svg';
import './navbar.scss';

class NavBar extends Component {

    state = {
        maps: this.props.routes
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        logout: PropTypes.func.isRequired,
        login: PropTypes.bool,
        register: PropTypes.bool
      }

  componentWillMount() {
    this.setLocationStyle();
  }


  setLocationStyle = () => {
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
    }
  }

  render() {
        return (
            <div>
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
                  {this.props.isAuthenticated ? <Authlink />: <Guestlink />}
                </ul>
            </nav>
            <MobileNavbar />
            <Dropdown />
            </div>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.route.login,
  register: state.route.register
})

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);

