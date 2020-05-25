import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3'>
      <h1>VS Code Hacks!</h1>
      <p>
        The VS Code Hacks is a resource for building JavaScript/React based
        applications quickly.
      </p>
      <ButtonGroup aria-label='Action buttons'>
        <Button
          variant='dark'
          href='https://github.com/dsznajder/vscode-es7-javascript-react-snippets/blob/master/README.md'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Source
        </Button>
        <Button
          variant='success'
          href='https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download
        </Button>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default Header;
