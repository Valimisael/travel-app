import React from 'react';
import logo from '../../img/logo.png';
import { header} from '../Data/data';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.changeLang = this.changeLang.bind(this);
    this.updateState = this.props.updateState.bind(this);
  }

  changeLang(e) {
    this.settings.updateLang(e.target.value);
    this.updateState(this.settings);
  }
  
  render () {
    const indexLanguage = Object.keys(header).indexOf(this.settings.lang);
    const activeValue = header[this.settings.lang].languages[indexLanguage];
    const options = header[this.settings.lang].languages.map((el, index) => {
      return (
        <option key = {index} value = {header[this.settings.lang][index]}>{el}</option>
      )
    })

    const placeHolder = header[this.settings.lang].placeHolder;
    
    return (
      <header className="header">
        <NavLink to="/" className="header__item logo">
          <img className="logo__image" alt="Logo" src={logo} />
        </NavLink>
        <div className="settings">
          <div className="header__item search">
            <div className="search__field">
              <label className="icon icon-search" htmlFor="search"></label>
              <input id="search" type="search" placeholder={placeHolder} />
            </div>
          </div>
          <div className="header__item localization">
            <select onChange = {this.changeLang} value={activeValue}>
              {options}
            </select>
          </div>
        </div>
      </header>
    )
  }
}