'use client';
import React from 'react'
import { getLocalData } from '@/lib/localdata';

const localData = getLocalData();

const MainPage = () => {

	return (
		<div>
			{localData.map((user, index) => (
				<div key={index}>{user.username}</div>
			))}
		</div>
	)
}

export default MainPage
