
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App1 } from './components/App1';
import { App2 } from './components/App2';
import { App3 } from './components/App3';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactComponent: JSX.Element = (
  <div>
    <App1 url="http://localhost:3001/api/vendors" />
    <App2 url="http://localhost:3001/api/vendors" />;
    <App3 url="http://localhost:3001/api/vendors" />;
  </div>
);

const reactRoot: HTMLDivElement = document.getElementById('reactRoot') as HTMLDivElement;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
