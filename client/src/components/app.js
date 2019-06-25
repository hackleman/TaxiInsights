import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home/home';
import NavBar from './Navbar/navbar';
import Footer from './Footer/footer';
import Charts from './Charts/charts';
import Graphs from './Graphs/graphs';
import './app.css';

class App extends Component {

  render() {
    return (
        <div className = "App">
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/charts" component={Charts} />
              <Route path="/graphs" component={Graphs} />
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </BrowserRouter>

        </div>
    )
  }
}

export default App;