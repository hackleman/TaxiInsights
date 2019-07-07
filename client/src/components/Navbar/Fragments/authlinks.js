import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { closeMenu } from '../../../actions/route';
import PropTypes from 'prop-types';

class Authlink extends Component {

    state = {
        type: ''
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        menu: PropTypes.bool,
        logout: PropTypes.func.isRequired,
        closeMenu: PropTypes.func.isRequired
      }

  componentWillMount() {
     console.log(this.state.type);
  }
      

  render() {
        return (
            <div className = "nav-items">
            <Fragment> 
                <Link to="/login">
                <li className="nav-item" onClick = {this.props.logout}>
                        Logout
                        </li>
                </Link>
            </Fragment>     
            </div>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { logout, closeMenu }
)(Authlink);

