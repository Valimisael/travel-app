import React from 'react';
import logo from '../img/logo.png';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <a href="/" className="header__item logo">
          <img className="logo__image" alt="Logo" src={logo} />
        </a>
        <div className="settings">
          <div className="header__item search">
            <div className="search__field">
              <label className="icon icon-search" htmlFor="search"></label>
              <input id="search" type="search" placeholder="Search" />
            </div>
          </div>
          <div className="header__item localization">
            <select>
              <option>English</option>
              <option>Russian</option>
              <option>Swedish</option>
            </select>
          </div>
        </div>
      </header>
    )
  }
}