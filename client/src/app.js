import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import { loadUser } from './actions/auth';
import store from './store';

import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Charts from './components/Charts/charts';
import Graphs from './components/Graphs/graphs';
import Auth from './components/Auth/login';
import Register from './components/Auth/register';
import Contact from './components/Contact/contact';
import './app.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store = {store}>
        <div className = "App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/charts" component={Charts} />
              <Route exact path="/graphs" component={Graphs} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Auth} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
      </Provider>

    )
  }
}

export default App;