import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import burgerBuilder from "./store/reducers/burgerBuilder";
import reducer from "./store/reducers/order";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilder,
    order: reducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
