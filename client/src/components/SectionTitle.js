import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center '>
        <h1 className="text-4xl font-semibold  text-secondary ">{title}</h1>
        

    </div>
  )
}

export default SectionTitle