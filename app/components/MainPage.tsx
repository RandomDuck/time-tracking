'use client';

import { User } from '@/pages/api/user';
import React, { useEffect, useState } from 'react'

const MainPage = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		if (users.length === 0) {
			const getUsers = async () => {
				const response = await fetch('/api/user')
				const data = await response.json();
				setUsers(data.users)
			}
			getUsers()
		}
	}, [])

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}

export default MainPage
