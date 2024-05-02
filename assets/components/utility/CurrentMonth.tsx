import { Month } from '@/assets/models/Month'
import Link from 'next/link'
import React from 'react'

const CurrentMonth = ({days}: Month) => {
	return (
		<div className='max-w-[900px] m-auto gap-2 flex flex-wrap '>
		{days.map((day, index) => (
			<Link
				href={`/user/schedule/${day.dayIndex}`}
				className='day'
				key={index}
			>
				{day.dayIndex.toLocaleString()}
			</Link>
		))}
	</div>
	)
}

export default CurrentMonth
