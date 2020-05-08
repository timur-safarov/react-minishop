import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import rootReducer from './reducers';

//С помощью applyMiddlewareмы указываем какую именно 
//библиотеку мы будем подключать в качестве посредника 

export default () => {
	const store = createStore(rootReducer, applyMiddleware(Logger));
	return store;
};

//console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]