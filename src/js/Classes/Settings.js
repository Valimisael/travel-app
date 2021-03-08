import { defaultLanguage, header } from '../Data/data';

export default class Settings {
    constructor() {
        this.lang = '';
        this.init();
    }

    init() {
        if (localStorage.getItem('lang')) {
            this.lang = localStorage.getItem('lang')
        } else {
            this.lang = defaultLanguage;
            localStorage.setItem('lang', defaultLanguage)
        }
    }

    updateLang(lang) {
        const indexLang = header[this.lang].languages.indexOf(lang);
        const langList = Object.keys(header);
        this.lang = langList[indexLang];
        localStorage.setItem('lang', this.lang);
    }
}