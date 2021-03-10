export default class TranslateGallery{
  constructor(gallery, lang) {
    this.gallery = [];
    this.init(gallery, lang)
  }

  init(gallery, lang) {
    this.gallery = gallery.map(element => {
      const {original, thumbnail} = element;
      const {description, thumbnailLabel} = element.translations[lang];
      return {
        original: original,
        thumbnail: thumbnail,
        description: description,
        thumbnailLabel: thumbnailLabel
      }
    });
  }

  getArray() {
    return this.gallery;
  }
}