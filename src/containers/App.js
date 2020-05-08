import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';


const sortBy = (books, filterBy) => {

	switch(filterBy) {

		case 'price_high':
			return orderBy(books, 'price', 'desc');
		case 'price_low':
			return orderBy(books, 'price', 'asc');
		case 'author':
			return orderBy(books, 'author', 'asc');
		case 'all':
		default:
			return books;

	}

};

const filterBooks = (books, searchQuery) => {
	return books.filter(
		o => 
		   o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
		|| o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);
};

const searchBooks = (books, filterBy, searchQuery) => {
	return sortBy(filterBooks(books, searchQuery), filterBy);
};

//books = state.books
const mapStateToProps = ({ books, filter }) => ({
	books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
	isReady: books.isReady
});

//Прокидываем books в функцию экшен setBooks 
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch),
});

//или простым способом
/*const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
});*/

//С помощью connect мы соединяем наш компонент с нашим store
export default connect(mapStateToProps, mapDispatchToProps)(App);