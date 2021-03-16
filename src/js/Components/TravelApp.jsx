import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Common/Header/Header.jsx';
import Footer from './Common/Footer/Footer.jsx';
import Home from './Home/Home.jsx';
import Country from './Country/Country.jsx';
import { COUNTRIES } from '../Data/data';
import ScrollToTop from '../Settings/ScrollToTop';

export default class TravelApp extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
  }
  
  render () {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div className="wrapper">
          <Header settings={this.settings} updateState={this.updateState}/>
          <Switch>
            <Route exact path="/">
              <Home settings={this.settings} updateState={this.updateState} />
            </Route>
            {
              COUNTRIES.map((country) => {
                return (
                  <Route path={country.url} key={country.name}>
                    <Country settings={this.settings} country={country} updateState={this.updateState} />
                  </Route>
                ) 
              })
            }
            <Route path="*">
              <Redirect to='/' />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

TravelApp.propTypes = {
  settings: PropTypes.shape({
    lang: PropTypes.string,
    search: PropTypes.string
  }),
  updateState: PropTypes.func
};