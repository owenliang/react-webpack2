// react
import React from "react";
import ReactDOM from "react-dom";

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

// router根路由容器
import Container from "./Container";

// reducer
import * as reducers from "./reducer";
const allReducer = combineReducers({
    ...reducers,
    routing: routerReducer,  // react-router所需要的reducer
});

// redux store
const store = createStore(
    allReducer,
    applyMiddleware(
        thunk,
    ),
);

// 渲染
ReactDOM.render(
    (
        <Provider store={store}>
            <Container/>
        </Provider>
    ),
    document.getElementById('react-router-container')
);