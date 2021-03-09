import { defaultLanguage, common } from '../Data/data';

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
        const indexLang = common[this.lang].languages.indexOf(lang);
        const langList = Object.keys(common);
        this.lang = langList[indexLang];
        localStorage.setItem('lang', this.lang);
    }
}