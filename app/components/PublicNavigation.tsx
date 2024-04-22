import Link from 'next/link'
import React from 'react'
import { FUNCTION_ROUTES } from '../constants/constants'


const Navigation = () => {
	return (
		<nav>
			<ul>
				{FUNCTION_ROUTES.map((route) => (
					<li key={route.id} className=' float-left mr-5'><a href={route.url}>{route.title}</a></li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
