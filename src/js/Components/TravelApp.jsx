import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
          <Route exact path="/" render={(props) => <Home {...props} settings={this.settings} updateState = {this.updateState} />} />
          {
            COUNTRIES.map((country) => {
              return (
                <div key={country.name}>
                  <Route path={country.url} render={(props) => <Country {...props} settings={this.settings} country={country} updateState = {this.updateState} />} />
                </div>
              ) 
            })
          }
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}