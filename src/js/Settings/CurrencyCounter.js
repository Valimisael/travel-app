import { DEFAULTLANGUAGE, CURRENCIESAPIURL, COMMON, DEFAULTCURRENCIESCODES, DECIMALPLACESFORCURRENCIES } from "../Data/data";

export default class CurrencyCounter {
  constructor(lang = DEFAULTLANGUAGE, country, updateState) {
    this.lang = lang;
    this.country = country;
    this.currencies = {
      local: '-',
      euro: '-',
      dollar: '-',

    };
    this.updateLanguage(lang);
    this.init(updateState);
  }

  init(updateState) {
    const euroPromise = fetch(CURRENCIESAPIURL(DEFAULTCURRENCIESCODES.euro)).then(data => data.json()).then(result => this.euro = result);
    const dollarPromise = fetch(CURRENCIESAPIURL(DEFAULTCURRENCIESCODES.dollar)).then(data => data.json()).then(result => this.dollar = result);
    const localPromise = fetch(CURRENCIESAPIURL(this.country.currencyCode)).then(data => data.json()).then(result => this.local = result);
    Promise.all([euroPromise, dollarPromise, localPromise])
      .then(() => {
        console.log('CurrencyCounter.js - sucsess:');
        this.currencies.local = (1 / this.local.Cur_OfficialRate * this.local.Cur_Scale);
        this.currencies.euro = (this.euro.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(DECIMALPLACESFORCURRENCIES)
        this.currencies.dollar = (this.dollar.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(DECIMALPLACESFORCURRENCIES)
        this.currencies.local = this.currencies.local.toFixed(DECIMALPLACESFORCURRENCIES);
        console.log('CurrencyCounter.js - currencies:', this.currencies);
        updateState();
      }, () => console.log('error'));
  }

  updateLanguage(lang) {
    this.currenciesNames = COMMON[lang].currencies;
    this.localCurrencyName = this.country.translations[lang].currencyName;
  }
}