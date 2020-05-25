import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3'>
      <h1>VS Code Hacks!</h1>
      <p>
        The VS Code Hacks is a resource for building JavaScript/React based
        applications quickly.
      </p>
      <Button
        variant='dark'
        href='https://github.com/dsznajder/vscode-es7-javascript-react-snippets/blob/master/README.md'
        target='_blank'
        rel='noopener noreferrer'
      >
        View Source
      </Button>
    </Jumbotron>
  );
};

export default Header;
