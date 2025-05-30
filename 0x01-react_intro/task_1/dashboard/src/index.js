import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Notifications } from './Notifications';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(<Notifications />);
