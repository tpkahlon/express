import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3'>
      <p className='m-0'>
        Inspired by Shopify's{' '}
        <a
          className='text-light text-decoration-none'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.shopify.ca/partners/shopify-cheat-sheet'
        >
          Liquid Cheat Sheet
        </a>
        .
      </p>
    </Jumbotron>
  );
};

export default Footer;
