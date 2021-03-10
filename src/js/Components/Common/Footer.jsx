import React from 'react';
import './Footer.scss';

import { FOOTER } from '../../Data/data';

export default function Footer() {
  const author = FOOTER.author;

  return(
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__author'>
        {
          author.map((author) => {
            return <a href={author.link} target="_blank" rel="noreferrer" key={author.name}>@{author.name}</a>
          })
        }
        </div>
        <div className='footer__logo'>
          <a href={FOOTER.logo.link} target='_blank' rel='noreferrer'>
            <img src={FOOTER.logo.img} alt={FOOTER.logo.alt} />
          </a>
        </div>
        <div className='footer__year'>&copy;{FOOTER.year}</div>
      </div>
    </footer>
  )
}