import React from 'react';
import logo from '../../img/rs_school_js.svg';

const footer = {
  author: [
    {
      name: 'Valimisael',
      link: 'https://github.com/Valimisael',
    },
    {
      name: 'Jimmba',
      link: 'https://github.com/Jimmba',
    },
  ],
  logo: {
    img: logo,
    alt: 'RSSchool JS',
    link: 'https://rs.school/js/',
  },
  year: '2021',
}

export default class Footer extends React.Component {
  render() {
    const author = footer.author;

    return(
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__author'>
          {
            author.map((author, index) => {
              return <a href={author.link} target="_blank" rel="noreferrer" key={index}>@{author.name}</a>
            })
          }
          </div>
          <div className='footer__logo'>
            <a href={footer.logo.link} target='_blank' rel='noreferrer'>
              <img src={footer.logo.img} alt={footer.logo.alt} />
            </a>
          </div>
          <div className='footer__year'>&copy;{footer.year}</div>
        </div>
      </footer>
    )
  }
}