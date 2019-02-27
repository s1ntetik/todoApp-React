import React from 'react';
import './footer.css'

const Footer = ({ gitLink }) => {

  return (
      <div className={'footer-link'}>
        <a target={'_blank'} href={ gitLink }>This App is on GitHub</a>
      </div>
  )
};

export default Footer;