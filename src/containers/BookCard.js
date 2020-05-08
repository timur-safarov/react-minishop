import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';


//books = state.books
const mapStateToProps = ({ cart }, { id }) => ({
	//Колличество книг которые были добавлены
	addedCount: cart.items.reduce(
		(count, book) => count + (book.id === id ? 1 : 0), 
		0
	)
});

//Прокидываем books в функцию экшен setBooks 
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cartActions, dispatch),
});

//или простым способом
/*const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
});*/

//С помощью connect мы соединяем наш компонент с нашим store
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);