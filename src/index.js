import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

export default render;