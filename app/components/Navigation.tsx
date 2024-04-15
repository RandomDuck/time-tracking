import Link from 'next/link'
import React from 'react'

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li><Link href={'/calender'}>Calender</Link></li>
				<li><Link href={'/'}>Home</Link></li>
			</ul>
		</nav>
	)
}

export default Navigation
