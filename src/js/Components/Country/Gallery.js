import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss';

import TranslateGallery from  '../../Settings/TranslateGallery';

export default function Gallery(props) {
  const {title, images, settings} = props;
  const gallery = new TranslateGallery(images, settings.lang).getArray();

  return (    
    <div className="country__gallery">
      <h2 className="country__title">{title}</h2>
      <ImageGallery items={gallery} showPlayButton={false} />
    </div>
  )
}