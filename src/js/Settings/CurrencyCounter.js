import { DEFAULTLANGUAGE, CURRENCIESAPIURL, COMMON, DEFAULTCURRENCIESCODES, DECIMALPLACESFORCURRENCIES, CURRENCIES_ADDITIONAL_URL, DEFAULT_SHORT_CURRENCIES_CODES} from "../Data/data";

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
    this.init();
    this.updateState = updateState;
  }

  init() {
    const euroPromise = fetch(CURRENCIESAPIURL(DEFAULTCURRENCIESCODES.euro)).then(data => data.json()).then(result => this.euro = result);
    const dollarPromise = fetch(CURRENCIESAPIURL(DEFAULTCURRENCIESCODES.dollar)).then(data => data.json()).then(result => this.dollar = result);
    const localPromise = fetch(CURRENCIESAPIURL(this.country.currencyCode)).then(data => data.json()).then(result => this.local = result);
    Promise.all([euroPromise, dollarPromise, localPromise])
      .then(() => {
        this.currencies.local = (1 / this.local.Cur_OfficialRate * this.local.Cur_Scale);
        this.currencies.euro = (this.euro.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(DECIMALPLACESFORCURRENCIES)
        this.currencies.dollar = (this.dollar.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(DECIMALPLACESFORCURRENCIES)
        this.currencies.local = this.currencies.local.toFixed(DECIMALPLACESFORCURRENCIES);
        this.updateState();
      }, () => this.useAdditionalService());
  }

  useAdditionalService() {
    console.warn(COMMON[this.lang].currenciesApiUrlError);
    fetch(CURRENCIES_ADDITIONAL_URL(this.country.currencyShortCode))
    .then(result => result.json())
    .then(data => {
      const rates = data.conversion_rates;
      this.currencies.euro = (1/rates[DEFAULT_SHORT_CURRENCIES_CODES.euro]).toFixed(DECIMALPLACESFORCURRENCIES);
      this.currencies.dollar = (1/rates[DEFAULT_SHORT_CURRENCIES_CODES.dollar]).toFixed(DECIMALPLACESFORCURRENCIES);
      this.currencies.local = (1/rates[DEFAULT_SHORT_CURRENCIES_CODES.ruble]).toFixed(DECIMALPLACESFORCURRENCIES);
      this.updateState();
    });
  }

  updateLanguage(lang) {
    this.currenciesNames = COMMON[lang].currencies;
    this.localCurrencyName = this.country.translations[lang].currencyName;
  }
}