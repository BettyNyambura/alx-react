import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <img src="https://alx-logo.png" alt="ALX logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  );
}

export default App;