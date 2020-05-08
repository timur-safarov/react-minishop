import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';


//books = state.books
const mapStateToProps = ({ cart }) => ({
	totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
	count: cart.items.length,
	items: uniqBy(cart.items, o => o.id)
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
export default connect(mapStateToProps, mapDispatchToProps)(Menu);