import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer=(state = '',action)=>{
    if (action.type === 'ADD_FEELINGS') {
        console.log('ADDING FEELINGS');
        return action.payload
    }
    if (action.type === "EMPTY"){
        return state = '';
    }
    return state;
}


const understandingReducer=(state = '',action)=>{
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log('ADDING UNDERSTANDINGS');
        return action.payload
    }

    if (action.type === "EMPTY"){
        return state = '';
    }
    return state;
}

const supportReducer=(state = '',action)=>{
    if (action.type === 'ADD_SUPPORT') {
        console.log('ADDING SUPPORT');
        return action.payload
    }
    if (action.type === "EMPTY"){
        return state = '';
    }
    return state;
}

const commentReducer=(state = '' ,action)=>{
    if (action.type === 'ADD_COMMENT') {
        console.log('ADDING COMMENT');
        return action.payload
    }
    if (action.type === "EMPTY"){
        return state = '';
    }
    return state;
}




const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
