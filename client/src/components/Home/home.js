import React, { Component } from 'react';
import LandingSection from './LandingSection';
import ScrollBar from '../Scrollbar/scrollbar';
import config from '../../assets/config';
import './home.scss'

class Home extends Component {
  state = {
      bodytext: config.landingsections
  }
  
  render() {
    return (
        <div className="landingpage">
             <ScrollBar />
             <LandingSection 
                 title="Taxi Insights."
                 id="main"
                 page = "/"
                 img = ' main '
                 header = {true}
             /> 
            <LandingSection 
                subtitle={this.state.bodytext.section4}
                id="graphs"
                page = "/maps"
                img = ' map-body '
                body = {true}
            />
            <LandingSection 
                title="Maps"
                id="graphs"
                page = "/maps"
                img = ' map-header '
                header = {true}
            />
            <LandingSection 
                subtitle={this.state.bodytext.section2}
                id="charts"
                page = "/charts"
                img = ' chart-body '
                body = {true}
            />
            <LandingSection 
                title="charts"
                id="charts"
                page = "/charts"
                img = ' chart-header '
                header = {true}
            />
            <LandingSection 
                title="Login / Register"
                id="about"
                page = "/login"
                img = ' login '  
                header = {true}         
            />
        </div>
    )
  }
}

export default Home;