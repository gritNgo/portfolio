import React from 'react'

function Stack() {
  return (
    <div className="flex-col flex items-center justify-center text-center pb-6 gap-5">
        <h2 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Stack</h2>
        <ol className='flex gap-6'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>MongoDB</li>
        </ol>
    </div>
  )
}

export default Stack;