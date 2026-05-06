import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='relative h-full w-[60%] flex-shrink-0 overflow-hidden rounded-4xl'>
      <img src={props.img} alt={props.tag} className='h-full w-full object-cover' />
      <RightCardContent id={props.id} color={props.color} tag={props.tag} />
    </div>
  )
}

export default RightCard