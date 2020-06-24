import React from 'react';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron fluid className='m-0 text-muted rounded p-3'>
      <h1>VSCode Hacks</h1>
      <h2>Check out SnipSnap, a better alternative to Code Shortcuts.</h2>
      <p>
        The VSCode Hacks is a resource for building JavaScript/React based
        applications quickly.
      </p>
      <ButtonGroup aria-label='Action buttons'>
        <Button
          variant='dark'
          href='https://github.com/dsznajder/vscode-es7-javascript-react-snippets/blob/master/README.md'
          target='_blank'
          rel='noopener noreferrer'
        >
          Reference
        </Button>
        <Button
          variant='secondary'
          href='https://github.com/tpkahlon/express/tree/master/vscode-hacks'
          target='_blank'
          rel='noopener noreferrer'
        >
          Code
        </Button>
        <Button
          variant='success'
          href='https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download
        </Button>
        <Button
          variant='danger'
          href='https://github.com/snipsnapdev/snipsnap'
          target='_blank'
          rel='noopener noreferrer'
        >
          SnipSnap
        </Button>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default Header;
