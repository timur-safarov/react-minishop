import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (

	<Menu secondary>
		<Menu.Item
		  active={filterBy === 'all'}
		  onClick={setFilter.bind(this, 'all')}
		>Все</Menu.Item>
		<Menu.Item
		  active={filterBy === 'price_high'}
		  onClick={setFilter.bind(this, 'price_high')}
		>Цена (дорогие)</Menu.Item>
		<Menu.Item
		  active={filterBy === 'price_low'}
		  onClick={setFilter.bind(this, 'price_low')}
		>Цена (дешёвые)</Menu.Item>
		<Menu.Item
		  active={filterBy === 'author'}
		  onClick={setFilter.bind(this, 'author')}
		>По автору</Menu.Item>

		<Menu.Item>
			<Input icon="search" 
						onChange={e => setSearchQuery(e.target.value)} 
							value={searchQuery} 
								placeholder="Введите запрос"
			/>
		</Menu.Item>
	</Menu>

);


export default Filter;