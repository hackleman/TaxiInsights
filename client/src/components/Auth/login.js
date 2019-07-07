import React, {Component} from 'react';
import { Redirect, Link } from "react-router-dom";

import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { clearErrors } from '../../actions/error';
import { setLogin, clearRoute } from '../../actions/route';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
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
    clearErrors: PropTypes.func.isRequired,
    setLogin: PropTypes.func.isRequired,
    clearRoute: PropTypes.func.isRequired
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

  componentDidMount() {
    this.props.setLogin();
  }

  componentWillUnmount() {
    this.props.clearRoute();
  }

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to='/' />
    }

    return (
        <div className = "mainlogin">
          <div className = "container">
            <Fade>
            <div className="login-container">
              
              <div className = "logincontent">
                {/* <div className = "loginimage">
                  <img src = {logo} alt = 'https://www.freepik.com/free-photos-vectors/background" Background vector created by macrovector - www.freepik.com' />
                </div> */}
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
            </Fade>
            </div>
            </div>
     

  );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  routes: state.route.routes
})

export default connect(
  mapStateToProps,
  { login, clearErrors, setLogin, clearRoute }
)(Auth);
