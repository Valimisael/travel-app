import { DEFAULTLANGUAGE, COMMON } from '../Data/data';

export default class Settings {
	constructor() {
		this.lang = '';
		this.search ='';
		this.init();
	}

	init() {
		if (localStorage.getItem('lang')) {
			this.lang = localStorage.getItem('lang')
		} else {
			this.lang = DEFAULTLANGUAGE;
			localStorage.setItem('lang', DEFAULTLANGUAGE)
		}
	}

	updateLang(lang) {
		const indexLang = COMMON[this.lang].languages.indexOf(lang);
		const langList = Object.keys(COMMON);
		this.lang = langList[indexLang];
		localStorage.setItem('lang', this.lang);
	}

	updateSearch(value) {
		this.search = value;
	}
}