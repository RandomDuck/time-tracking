import React from 'react'

const DayId = ({params}: { params: { id: number}}) => {
	return (
		<div>
			<h2>{params.id}</h2>
		</div>
	)
}

export default DayId
