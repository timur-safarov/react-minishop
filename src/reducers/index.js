import { combineReducers } from 'redux';
import books from './books';
import cart from './cart';
import filter from './filter';

//Тут мы будем объединять редьюсеры
export default combineReducers({
	books,
	cart,
	filter
});