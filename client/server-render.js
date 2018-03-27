import App from './components/App';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

// eslint-disable-next-line no-sync
const template = fs.readFileSync(__dirname + '/../index.html', 'utf8');

function renderApp(path, callback) {
  const rendered = renderToString(<App />);
  const page = template
    .replace('<!-- CONTENT -->', rendered);
  callback(null, page);
}

module.exports = renderApp;
