import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class Gallery extends React.Component {
  render () {
    const {images} = this.props;
    return <ImageGallery items={images} showPlayButton={false} />;
  }
}