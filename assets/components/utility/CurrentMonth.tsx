import { Month } from '@/assets/models/Month'
import Link from 'next/link'
import React from 'react'

const CurrentMonth = ({days}: Month) => {
	return (
		<div className='max-w-[900px] m-auto gap-2 flex flex-wrap '>
		{days.map((day, index) => (
			<Link
				href={`/schedule/day/${day.dayIndex}`}
				className='h-[100px] w-[100px] border-solid bg-red-100 border-black'
				key={index}
			>
				{day.dayIndex.toLocaleString()}
			</Link>
		))}
	</div>
	)
}

export default CurrentMonth
