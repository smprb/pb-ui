import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createStore from "./store";

ReactDOM.render(
    <App store={createStore()}/>,
    document.getElementById('root')
);
