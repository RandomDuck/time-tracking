import React from 'react'
import PublicNavigation from './PublicNavigation'

const Header = () => {
	return (
		<header className='flex justify-between p-3'>
			<h1>Time tracking</h1>
			<PublicNavigation />
		</header>
	)
}

export default Header
