import React from 'react';

const Card = ({name, email, id}) => {
	return(
		<div className='tc bg-navy dib br3 pa3 ma2 bw2 shadow-5'>
			<a href='#' className='link mw5 dt hide-child br2 cover bg-center'>
      		<span className='white v-mid w-100 h-100 child bg-black-40 pa2'>
    			{name}
  			</span>
      		<img className='br4 dib grow link mw5 hide-child cover' alt='robots' src={`https://robohash.org/${id}?200X200`}/>
  			<span className='white v-mid w-100 h-100 child bg-black-40 pa2'>
    			{email}
  			</span>
			</a>

{/*			<img className='br4 dib grow link mw5 hide-child cover' alt='robots' src={`https://robohash.org/${id}?200X200`}/>
			<span class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
    			Card title
  			</span>*/}
		</div>
	);
}

export default Card; 