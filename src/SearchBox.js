import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
	return (
			<div className ='pa2'>
				<input 
					className='pa2 ba bg-navy hover-bg-gold hover-navy w-50 pa2 ba mb2'
					type='search' 
					placeholder='search robots' 
					onChange = {searchchange}
				/>
			</div>
		);
}

export default SearchBox;