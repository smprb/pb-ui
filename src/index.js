import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.scss';
import { Provider } from 'react-redux'
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
