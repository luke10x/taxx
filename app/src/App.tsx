import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [syncStatus, setSyncStatus] = useState<string>('Loading...');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response: Response) => response.text())
      .then((text: string) => {
        setSyncStatus(text);
      })
      .catch((error: Error) => {
        console.error('Failed to fetch', error);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <dl>
          <dt>Sync status:</dt>
          <dd>{syncStatus}</dd>
        </dl>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
