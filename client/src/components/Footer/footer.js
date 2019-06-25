import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {

  render() {
    return (
  <footer className="my-5 pt-5 text-muted text-center text-small">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossOrigin="anonymous"></link>
    <p className="mb-1">Jason S. Hackleman &copy; 2019</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="https://github.com/hackleman">LinkedIn</a></li>
      <li className="list-inline-item"><a href="https://github.com/hackleman">GitHub</a></li>
      <li className="list-inline-item"><a href="https://github.com/hackleman">Contact</a></li>
    </ul>
  </footer>
    )
  }
}

export default Footer;