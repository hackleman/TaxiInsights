import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { closeMenu } from '../../../actions/route';
import PropTypes from 'prop-types';
import { SlideDown } from 'react-slidedown';
import Authlink from '../Fragments/authlinks';
import Guestlink from '../Fragments/guestlinks';
import 'react-slidedown/lib/slidedown.css';
import './dropdown.scss';

class Dropdown extends Component {

    state = {
        login: false,
        register: false,
        current: '',
        on: false
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        menu: PropTypes.bool,
        logout: PropTypes.func.isRequired
      }

  // close dropdown menu
  close = () => {
    this.props.closeMenu();
  }

  render() {
        return (
            <SlideDown className = {'my-dropdown-slidedown'}>
                {this.props.menu &&(
                    <nav className="dropdown">
                            <Link to="/charts">
                                <li onClick = {this.close} className={"nav-item" + (this.state.charts ? " activelink" : "")}>
                                    Charts </li>
                            </Link>
                            <Link to="/maps">
                                <li onClick = {this.close} className={"nav-item" + (this.state.maps ? " activelink" : "")}>
                                    Maps </li>
                            </Link>
                            <Link to="/contact">
                                <li onClick = {this.close} className={"nav-item" + (this.state.contact ? " activelink" : "")}>
                                    Contact Me </li>
                            </Link>
                            {this.props.isAuthenticated ? <Authlink />: <Guestlink menu = {true}/>}         
                    </nav>
                )}
            </SlideDown>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  menu: state.route.menu
})

export default connect(
  mapStateToProps,
  { logout, closeMenu }
)(Dropdown);

