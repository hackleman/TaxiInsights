import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

// Redux imports
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { clearErrors } from '../../actions/error';
import { setLogin, clearRoute } from '../../actions/route';
import PropTypes from 'prop-types';

// Styling imports 
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Card, Badge, InputGroup, 
  InputGroupAddon
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

      <Container className="Login-container">
        <Fade>
        <Card className="Card">
        <Badge className = "Header" color="secondary">Sign In</Badge>
          <Form className="Form">
            <Col>
              <FormGroup className = "Formgroup">
                <Label className = "label">Email</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <Button className = "Button-prepend" color="bg-light" >
                        <span>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      </Button>
                  </InputGroupAddon>
                  <Input className = "Email-form"
                    type="email"
                    name="username"
                    id="Email"
                    placeholder="busystudent@email.com"
                    onChange={this.onChange}
                  />
                </InputGroup>

              </FormGroup>
            </Col>
            <Col >
              <FormGroup className = "Formgroup">
                <Label className = "label" for="examplePassword">Password</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Button className = "Button-prepend" color="bg-light" >
                          <span>
                            <FontAwesomeIcon icon={faKey} />
                          </span>
                        </Button>
                    </InputGroupAddon>
                    <Input className = "Password-form"
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      onChange={this.onChange}
                    />
                </InputGroup>
              </FormGroup>
            </Col>
            <Button onClick = {this.onSubmit} outline color="primary" size = "md" className = "Submit-mobile">Submit</Button>
            <Button onClick = {this.onSubmit} outline color="primary" size = "lg" className = "Submit-desktop">Submit</Button>
          </Form>
        </Card>
        </Fade>
      </Container>
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
