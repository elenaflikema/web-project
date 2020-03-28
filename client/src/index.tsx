import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import combinedReducer from './redux/reducers';
import { Provider } from 'react-redux';

// STORE - globalized state

let store = createStore(
    combinedReducer
);

store.subscribe(() => console.log(store.getState()));
// DISPATCH

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

