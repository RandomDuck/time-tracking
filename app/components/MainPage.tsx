
import React from 'react'
import { getLocalData } from '../../lib/localdata';

interface Props {
	localData: IUser[]
}

interface IUser {
	username: string
}

export async function getStaticProps() {
	const localData = await getLocalData()

	return {
		props: { localData }
	}
}
const MainPage = ({ localData }: Props) => {

	return (
		<div>
			{localData.map((user, index) => (
				<div key={index}>{user.username}</div>
			))}
		</div>
	)
}

export default MainPage
