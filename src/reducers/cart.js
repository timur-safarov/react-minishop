const initialState = {
	items: []
};


export default (state = initialState, action) => {

	switch(action.type) {

		//В названиях функций экшенов это пишется так addToCart
		case 'ADD_TO_CART':
			return {
				...state,
				items: [
					...state.items,
					action.payload
				]
			};

		//В экшинах это пишется так removeFromCart
		case 'REMOVE_FROM_CART':

			console.log('REMOVE_FROM_CART');

			return {
				...state,
				items: state.items.filter(o => o.id != action.payload)
			};
			break;

		default:
			return state;

	}

};