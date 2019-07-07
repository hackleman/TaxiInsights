import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { openMenu, closeMenu } from '../../../actions/route';
import PropTypes from 'prop-types';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../logos/logo.svg';
import './mobilenavbar.scss';

class MobileNavbar extends Component {

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
        menu: PropTypes.bool,
        logout: PropTypes.func.isRequired,
        openMenu: PropTypes.func.isRequired,
        closeMenu: PropTypes.func.isRequired
      }

  Toggle = () => {
    if(!this.props.menu) {
      this.props.openMenu();
    } else {
      this.props.closeMenu();
    }
  }

  close = () => {
    this.props.closeMenu();
  }

  render() {
        return (
            <nav className="nav-mobile" id="navbar">
              <Link to="/" onClick = {this.close}>
                <img
                        src={logo}
                        className="nav-logo-mobile"
                        alt="Logo."
                    />
                    </Link>
                <FontAwesomeIcon className="menu-mobile" size = 'lg' onClick = {this.Toggle} icon={faBars} />  
            </nav>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  menu: state.route.menu
})

export default connect(
  mapStateToProps,
  { logout, openMenu, closeMenu }
)(MobileNavbar);

