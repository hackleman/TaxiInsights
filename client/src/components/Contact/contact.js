import React, { Component } from 'react';
import axios from 'axios';

// Import styling
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Card, Badge, InputGroup, 
  InputGroupAddon
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { faParagraph, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Auth/auth.scss';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
    
  }

  onChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    let data = {
      name,
      email,
      message
    }

    axios.post('API_URI', data)
      .then( res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent');
      })

    console.log(data);
  }
  
  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: ''
    })
  }


  render() {
    return (
 

      
      <Container className="Login-container">
      <div className = "Register">
      <Fade>
      <Card className="Card">
      <Badge className = "Header" color="secondary">Contact Me</Badge>
        <Form className="Form">
        <Col>
            <FormGroup className = "Formgroup">
              <Label className = "label">Name</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend"> 
                  <Button color="bg-light" className = "Button-prepend">
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </Button>
                </InputGroupAddon>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  onChange={this.onChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className = "Formgroup">
              <Label className = "label">Message</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend"> 
                  <Button color="bg-light" className = "Button-prepend">
                      <span>
                        <FontAwesomeIcon icon={faParagraph} />
                      </span>
                    </Button>
                </InputGroupAddon>
                <Input
                  type="textarea"
                  name="msg"
                  id="message"
                  placeholder="Hello World~"
                  className = "text-area"
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
      </div>
    </Container>

    
    )
  } 
}

export default Contact;

