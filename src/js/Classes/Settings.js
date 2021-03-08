const defaultLanguage = 'en';

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
            localStorage.setItem('lang', this.lang);
        }
    }
}