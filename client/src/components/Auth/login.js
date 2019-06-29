import React, {Component} from 'react';
import { Redirect, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { clearErrors } from '../../actions/error';
import PropTypes from 'prop-types';
import logo from '../../logos/login.svg';
import Zoom from 'react-reveal/Zoom';
import './auth.scss';

class Auth extends Component {

  state = {
    username: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({ [e.target.name] : e.target.value });
    console.log(this.state);
  }

  onSubmit = e => {
    this.props.clearErrors();

    const { username, password } = this.state;

    const newUser = {
      username,
      password
    }

    this.props.login(newUser);
  }

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to='/Charts' />
    }

    return (
        <div className = "mainlogin">
          <div className = "container">
            <Zoom>
            <div className="login-container">
              <div className = "loginheader">Login</div>
              <div className = "logincontent">
                <div className = "loginimage">
                  <img src = {logo} />
                </div>
                <div className = "loginform">
                  <div className = "loginformgroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={this.onChange} name="username" placeholder="username"/>     
                  </div>
                  <div className = "loginformgroup">
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={this.onChange} name="password" placeholder="********"/>     
                  </div>
                </div>
                <div className = "loginfooter">
                  <button type= "button" className="loginbtn" onClick = {this.onSubmit}>
                    Submit
                  </button>
                  <button type= "button" className="loginbtn register" onClick = {this.onSubmit}>
                  <Link to='/register'>Register</Link> 
                  </button>
                </div>
              </div>
            </div>
            </Zoom>
            </div>
            </div>
     

  );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Auth);
