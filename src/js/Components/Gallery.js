import React from 'react';
import ImageGallery from 'react-image-gallery';
import TranslateGallery from  '../Classes/TranslateGallery';

export default class Gallery extends React.Component {
  render () {
    const {images, settings} = this.props;
    const gallery = new TranslateGallery(images, settings.lang).getArray();
    
    return <ImageGallery items={gallery} showPlayButton={false} />;
  }
}