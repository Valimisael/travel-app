import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class TravelApp extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}