import React from 'react'
import Navigation from './Navigation'

const Header = () => {
	return (
		<header className='flex justify-between p-3'>
			<h1>My header</h1>
			<Navigation />
		</header>
	)
}

export default Header
