import React from 'react';
import './Header.scss';

import { LOGOS} from '../../Data/media';
import { COMMON } from '../../Data/data';
import { NavLink } from 'react-router-dom';

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
    const indexLanguage = Object.keys(COMMON).indexOf(this.settings.lang);
    const activeValue = COMMON[this.settings.lang].languages[indexLanguage];
    const options = COMMON[this.settings.lang].languages.map((el, index) => {
      return (
        <option key = {index} value = {COMMON[this.settings.lang][index]}>{el}</option>
      )
    })

    const placeHolder = COMMON[this.settings.lang].placeHolder;
    
    return (
      <header className="header">
        <NavLink to="/" className="header__item logo">
          <img className="logo__image" alt="Logo" src={LOGOS.headerLogo} />
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