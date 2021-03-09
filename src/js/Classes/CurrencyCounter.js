import { defaultLanguage, currenciesApiURL, common, defaultCurrenciesCodes, decimalPlacesForCurrencies} from "../Data/data";

export default class CurrencyCounter {
    constructor(lang = defaultLanguage, country, updateState) {
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
            const euroPromise = fetch(currenciesApiURL(defaultCurrenciesCodes.euro)).then(data => data.json()).then(result => this.euro = result);
            const dollarPromise = fetch(currenciesApiURL(defaultCurrenciesCodes.dollar)).then(data => data.json()).then(result => this.dollar = result);
            const localPromise = fetch(currenciesApiURL(this.country.currencyCode)).then(data => data.json()).then(result => this.local = result);
            Promise.all([euroPromise, dollarPromise, localPromise])
            .then(() => {
                console.log('CurrencyCounter.js - sucsess:');
                this.currencies.local = (1 / this.local.Cur_OfficialRate * this.local.Cur_Scale);
                this.currencies.euro = (this.euro.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(decimalPlacesForCurrencies)
                this.currencies.dollar = (this.dollar.Cur_OfficialRate * this.euro.Cur_Scale * this.currencies.local).toFixed(decimalPlacesForCurrencies)
                this.currencies.local = this.currencies.local.toFixed(decimalPlacesForCurrencies);
                console.log('CurrencyCounter.js - currencies:', this.currencies); 
                updateState();
            }, () => console.log('error'));
    }

    updateLanguage(lang) {
        this.currenciesNames = common[lang].currencies;
        this.localCurrencyName = this.country.translations[lang].currencyName;
    }
}