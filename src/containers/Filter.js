import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';


//books = state.books
const mapStateToProps = ({ books, filter }) => ({
	filterBy: filter.filterBy
});

//Прокидываем books в функцию экшен setBooks 
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(filterActions, dispatch),
});

//или простым способом
/*const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
});*/

//С помощью connect мы соединяем наш компонент с нашим store
export default connect(mapStateToProps, mapDispatchToProps)(Filter);