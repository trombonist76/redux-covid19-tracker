import React from 'react'

export default function Card({data}) {
  const [title,content] = data
  return (
    <div className='card'>
        <h3>{title}</h3>
      <span><p>{content.value}</p></span>
    </div>
  )
}
