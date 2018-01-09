
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactComponent: JSX.Element = <App  url="http://localhost:3001/api/vendors" />;
const reactRoot: HTMLDivElement = document.getElementById('reactRoot') as HTMLDivElement;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
